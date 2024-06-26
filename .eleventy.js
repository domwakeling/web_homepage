// require('dotenv').config();
const {
    generateArcherImage,    
    generateBitcoinImage,
    generateCatImage,
    generateF1Image,
    generateFlagImage,
    generateImageTags,
    generateLinkImage,
    generateWatchImage,
    generateWeatherImage
} = require('./utils/config_img_shortcodes.js');

const {
    convertSASS,
    cssmin,
    datefromtoot,
    formstring,
    jsmin,
    rounddecimal,
    stringify,
    upper,
    weekdayfromutc
} = require('./utils/filters.js');

const { beautifyHTML } = require('./utils/transforms.js');


module.exports = function (eleventyConfig) {

    // beautify HTML files when output => ensures indentation is correct
    eleventyConfig.addTransform("beautifyHTML", beautifyHTML);

    // filter to convert SASS to CSS
    eleventyConfig.addFilter("convertSASS", convertSASS);

    // filter to stringify JSON
    eleventyConfig.addFilter("stringify", stringify);

    // filter to turn comma-separated form list into string
    eleventyConfig.addFilter("formstring", formstring);

    // filter to take a Unix timestamp and return the weekday
    eleventyConfig.addFilter("weekdayfromutc", weekdayfromutc);

    // filter to take a decimal and return nearest whole number
    eleventyConfig.addFilter("rounddecimal", rounddecimal);

    // add a new shortcode to return today (date generator ran) in a pleasing format
    eleventyConfig.addShortcode("todayString", () => {
        const today = new Date()
        const weekday = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"][today.getDay()]
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December']
        return `${weekday}day ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`
    });

    // image handlers
    eleventyConfig.addShortcode("processImage", generateImageTags);
    eleventyConfig.addShortcode("archerImage", generateArcherImage);
    eleventyConfig.addShortcode("bitcoinImage", generateBitcoinImage);
    eleventyConfig.addShortcode("catImage", generateCatImage);
    eleventyConfig.addShortcode("flagImage", generateFlagImage);
    eleventyConfig.addShortcode("f1Image", generateF1Image);
    eleventyConfig.addShortcode("linkImage", generateLinkImage);
    eleventyConfig.addShortcode("watchImage", generateWatchImage);
    eleventyConfig.addShortcode("weatherImage", generateWeatherImage);

    // filter to generate a properly-formatted date string from a toot created_at string
    eleventyConfig.addFilter("datefromtoot", datefromtoot);

    // filter to minimise css
    eleventyConfig.addFilter("cssmin", cssmin);

    // filter to minimise js
    eleventyConfig.addFilter("jsmin", jsmin);

    // filter to upperString text
    eleventyConfig.addFilter("upper", upper);

    // copy from src/_includes/favicons to the root
    eleventyConfig.addPassthroughCopy({ "src/_includes/favicons": "." });

    // copy from src/img to the root
    eleventyConfig.addPassthroughCopy({ "src/img": "./img" });

    // because we're making a function we need to return the "normal" exports object
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};