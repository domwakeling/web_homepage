const beautify_html = require("js-beautify").html;
const sass = require('sass');
const CleanCSS = require("clean-css");
const Image = require("@11ty/eleventy-img");
require('dotenv').config();

let count = 0;

async function generateTwitterImage(src, alt) {
    if (!src || src == '') return '';
    // stop errors in development (comment out to test locally)
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        return `<img src="${src}" alt="${alt}" class="tweet_img" loading="lazy" decoding="async">`;
    }
    // production
    if (alt === undefined) {
        alt = ''
    }
    let metadata = {};
    try {
        metadata = await Image(src, {
            widths: [300],
            formats: ["jpeg"],
            outputDir: "./_site/img/"
        });
        let data = metadata.jpeg.pop();
        return `<img
                    src="${data.url}"
                    alt="${alt}"
                    class="tweet_img"
                    loading="lazy"
                    decoding="async"
                    width="${data.width}"
                    height="${data.height}"
                >`;
    } catch (e) {
        console.error(e.message);
        return `<img
                src="/img/qm.jpg"
                class="tweet_img"
                alt="${alt}"
                style="width: 75%; height: auto;"
                loading="lazy"
                decoding="async"
                width="300"
                height="500"
            >`;
    }
}

async function generateBeerImage(src) {
    if (!src || src == '') {
        console.log("Empty src passed to generateBeerImage");
        return '';
    }
    // stop errors in development (comment out to test locally)
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        return `<img src="${src}" alt="beer image" class="tweet_img" loading="lazy" decoding="async">`;
    }
    // production
    let metadata = {};
    try {
        metadata = await Image(src, {
            widths: [300],
            formats: ["png"],
            outputDir: "./_site/img/beer/",
            urlPath: "/img/beer/"
        });
        let data = metadata.png.pop();
        return `<img
                    src="${data.url}"
                    alt="beer image"
                    class="beer_img"
                    loading="lazy"
                    decoding="async"
                    width="${data.width}"
                    height="${data.height}"
                >`;
    } catch (e) {
        console.error(e.message);
        return `<img
                    src="/img/qm.jpg"
                    alt="?"
                    class="beer_img"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="500"
                >`;
    }
}

async function generateArcherImage(src) {
    if (!src || src == '') return '';
    // stop errors in development (comment out to test locally)
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        return `<img alt="archer image" src="${src}" style="width: 100%; height: auto;  border-radius: 1.0rem;" />`;
    }
    // production
    metadata = await Image(src, {
        widths: [300],
        formats: ["jpeg"],
        outputDir: "./_site/img/archer/",
        urlPath: "/img/archer/"
    });
    let data = metadata.jpeg.pop();
    return `<img
                src="${data.url}"
                alt="archer image"
                style="width: 100%; height: auto;  border-radius: 1.0rem;"
                loading="lazy"
                decoding="async"
                width="${data.width}"
                height="${data.height}"
            >`;
}

async function generateF1Image(src, alt) {
    if (alt === undefined) {
        alt = ''
    }
    metadata = await Image(src, {
        widths: [300],
        formats: ["webp", "png"],
        outputDir: "./_site/img/f1/",
        urlPath: "/img/f1/"
    });
    let wdata = metadata.webp.pop();
    let pdata = metadata.png.pop();
    return `
        <picture>
            <source srcset="${wdata.url}" type="image/webp">
            <source srcset="${pdata.url}" type="image/png">
            <img
                src="${pdata.url}"
                alt="${alt}"
                style="width: 75%; height: auto;"
                width="${pdata.width}"
                height="${pdata.height}"
            >
        </picture>`;
}

async function generateFootballImage(src, alt) {
    // stop errors in development (comment out to test locally)
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        return `<img
            src="${src}"
            alt="${alt}"
            height="80"
            width="80"
            style="height: 40px; width: 40px; border: 2px solid orange; border-radius: 50%; position: relative; top: 0.5rem"
            loading="lazy"
            decoding="async">`;
    }
    // production
    if (alt === undefined) {
        alt = ''
    }
    let metadata = await Image(src, {
        widths: [80],
        formats: ["webp", "png"],
        outputDir: "./_site/img/football/",
        urlPath: "/img/football/"
    });
    console.log(++count, src);
    let wdata = metadata.webp.pop();
    let pdata = metadata.png.pop();
    return `
        <picture>
            <source srcset="${wdata.url}" type="image/webp">
            <source srcset="${pdata.url}" type="image/png">
            <img
            src="${pdata.url}"
            alt="${alt}"
            style="height: 40px; width: 40px; border: 2px solid orange; border-radius: 50%; position: relative; top: 0.5rem"
            loading="lazy"
            decoding="async">
        </picture>`;
}

async function generateBaseballImage(src, alt) {
    if (alt === undefined) {
        alt = ''
    }
    let metadata = await Image(src, {
        widths: [60],
        formats: ["webp", "png"],
        outputDir: "./_site/img/baseball/",
        urlPath: "/img/baseball/"
    });
    console.log(++count, src);
    let wdata = metadata.webp.pop();
    let pdata = metadata.png.pop();
    return `
        <picture>
            <source srcset="${wdata.url}" type="image/webp">
            <source srcset="${pdata.url}" type="image/png">
            <img
                src="${pdata.url}"
                alt="${alt}"
                style="width: 3.0rem; height: auto; position: relative; top: 0.2rem"
                height="60"
                width="60"
                loading="lazy"
                decoding="async">
        </picture>`;
}

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
        return sass.compileString(value).css.toString()
    });

    // filter to stringify JSON
    eleventyConfig.addNunjucksFilter("stringify", function (value) {
        return JSON.stringify(value);
    });

    // filter to turn comma-seperated form list into string
    eleventyConfig.addNunjucksFilter("formstring", function (value) {
        return value ? value.split(",").join("") : null;
    })

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

    // filter to take a Unix timestamp and return the weekday
    eleventyConfig.addNunjucksFilter("weekdayfromutc", function(utc) {
        const date = new Date(utc * 1000)
        return `${["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"][date.getDay()]}day`
    })

    // filter to take a decimal and return nearest whole number
    eleventyConfig.addNunjucksFilter("rounddecimal", function(n) {
        const minmax = [Math.floor(n), Math.ceil(n)];
        if (Math.abs(minmax[0] * 1.0 - n) < Math.abs(minmax[1] * 1.0 - n)) {
            return minmax[0]
        } else {
            return minmax[1]
        }
    })

    // add a new shortcode to return today (date generator ran) in a pleasing format
    eleventyConfig.addShortcode("todayString", () => {
        const today = new Date()
        const weekday = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"][today.getDay()]
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December']
        return `${weekday}day ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`
    })

    // take Twitter images, pass them to function which generates a 300-wide version,
    // get back html 
    eleventyConfig.addNunjucksAsyncShortcode("twitterImage", generateTwitterImage);

    // take Archer images, pass them to function which generates a 300-wide version,
    // get back html 
    eleventyConfig.addNunjucksAsyncShortcode("archerImage", generateArcherImage);

    // take Beer images, pass them to function which generates a 300-wide version,
    // get back html 
    eleventyConfig.addNunjucksAsyncShortcode("beerImage", generateBeerImage);

    // take F1 images, pass them to function which generates a 300-wide version,
    // get back html 
    eleventyConfig.addNunjucksAsyncShortcode("f1Image", generateF1Image);

    // take football images, pass them to function which generates a 44-wide version,
    // get back html 
    eleventyConfig.addNunjucksAsyncShortcode("footballImage", generateFootballImage);

    // take baseball images, pass them to function which generates a 44-wide version,
    // get back html 
    eleventyConfig.addNunjucksAsyncShortcode("baseballImage", generateBaseballImage);

    // filter to return an openweathermap icon link from icon code
    eleventyConfig.addNunjucksFilter("owmicon", function(shortcode) {
        return `https://openweathermap.org/img/wn/${shortcode}@2x.png`
    })

    // filter to generate a properly-formatted date string from a teet created_at string
    eleventyConfig.addNunjucksFilter("datefromtweet", function(item) {
        let t = item.created_at.match(/^\d{4}-(\d{2})-(\d{2})T(\d{2}:\d{2})/)
        // let t = item.created_at.match(/^(\w{3}) (\w{3}) (\d*) (\d*:\d*)/)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec']
        return `${t[2]} ${months[parseInt(t[1])]} ${t[3]}`.toUpperCase(); 
    });

    // filter to minimise css
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // filter to upperstring text
    eleventyConfig.addNunjucksFilter("upper", function(text) {
        return text.toUpperCase();
    })

    // copy from src/_includes/favicons to the root
    eleventyConfig.addPassthroughCopy({ "src/_includes/favicons": "." })

    // copy from src/img to the root
    eleventyConfig.addPassthroughCopy({ "src/img": "./img" })

    // because we're making a function we need to return the "normal" exports object
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};