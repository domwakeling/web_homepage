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

    // filter to convert SASS to CSS
    eleventyConfig.addNunjucksFilter("convertSASS", function (value) {
        return sass.renderSync({data: value}).css.toString()
    });

    // filter to stringify JSON
    eleventyConfig.addNunjucksFilter("stringify", function (value) {
        return JSON.stringify(value);
    });

    // filter to take a tweet and either strip the final url (if it's not a "real" link) or
    // turn it into an <a> tag if it *is* a real link
    eleventyConfig.addNunjucksFilter("tweetbodytext", function (item) {
        // receives a tweet item
        let t = item.full_text;
        let u = item.entities.urls;
        const htmlRegex = /^(.*) ((([A-Za-z]{5,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
        if (!u || u.length == 0) {
            m = t.match(htmlRegex)
            return m ? m[1] : t
        }
        for (url of u) {
            t = t.replace(url.url, `<a href="${url.expanded_url}">${url.display_url}</a>`)
        }
        return t;
    });

    // filter to generate a properly-formatted date string from a teet created_at string
    eleventyConfig.addNunjucksFilter("datefromtweet", function(item) {
        let t = item.created_at.match(/^(\w{3}) (\w{3}) (\d*) (\d*:\d*)/)
        return `${t[1]} ${parseInt(t[3])} ${t[2]} - ${t[4]}`.toUpperCase()
    });

    // filter to minimise css
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // because we're making a function we need to return the "normal" exports object
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};