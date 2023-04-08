require('dotenv').config();
const Image = require("@11ty/eleventy-img");

const generateImageTags = async (src, alt) => {
    if (!src || src == '') return '';
    // stop errors in development (comment out to test locally)
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        return `<img src="${src}" alt="${alt}" class="side_image" loading="lazy" decoding="async">`;
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
                    class="side_image"
                    loading="lazy"
                    decoding="async"
                    width="${data.width}"
                    height="${data.height}"
                >`;
    } catch (e) {
        console.error(e.message);
        return `<img
                src="/img/qm.jpg"
                class="side_image"
                alt="${alt}"
                style="width: 75%; height: auto;"
                loading="lazy"
                decoding="async"
                width="300"
                height="500"
            >`;
    }
}

const generateBeerImage = async (src) => {
    if (!src || src == '') {
        console.log("Empty src passed to generateBeerImage");
        return '';
    }
    // stop errors in development (comment out to test locally)
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        return `<img src="${src}" alt="beer image" class="side_image" loading="lazy" decoding="async">`;
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

const generateArcherImage = async (src) => {
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

const generateF1Image = async (src, alt) => {
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

const generateFootballImage = async (src, alt) => {
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

const generateBaseballImage = async (src, alt) => {
    if (alt === undefined) {
        alt = ''
    }
    let metadata = await Image(src, {
        widths: [60],
        formats: ["webp", "png"],
        outputDir: "./_site/img/baseball/",
        urlPath: "/img/baseball/"
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
                style="width: 3.0rem; height: auto; position: relative; top: 0.2rem"
                height="60"
                width="60"
                loading="lazy"
                decoding="async">
        </picture>`;
}

module.exports = {
    generateArcherImage,
    generateBaseballImage,
    generateBeerImage,
    generateF1Image,
    generateFootballImage,
    generateImageTags
}