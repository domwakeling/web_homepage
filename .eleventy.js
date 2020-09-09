const beautify_html = require("js-beautify").html;
const sass = require('dart-sass');
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

    // beautify HTML files when output => ensures indentation is correct
    eleventyConfig.addTransform("beautifyHTML", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return beautify_html(content);
        }

        return content;
    });

    eleventyConfig.addNunjucksFilter("convertSASS", function (value) {
        return sass.renderSync({data: value}).css.toString()
    });

    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // because we're making a function we need to return the "normal" exports object
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
};