const beautify_html = require("js-beautify").html;

const beautifyHTML = (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
        return beautify_html(content);
    }
    return content;
};

module.exports = {
    beautifyHTML
}