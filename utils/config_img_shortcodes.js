require('dotenv').config();
const Image = require("@11ty/eleventy-img");

const generateImageTags = async (src, alt) => {
    console.log('generating img:', src.substring(0,50));
    if (!src || src == '') return '';
    if (alt === undefined) {
        alt = ''
    }
    let metadata = {};
    try {
        metadata = await Image(src, {
            widths: [300],
            formats: ["webp", "jpeg"],
            outputDir: "./_site/img/general/",
            urlPath: "/img/general/"
        });
        let wdata = metadata.webp[0];
        let jdata = metadata.jpeg[0];
        return `
            <picture>
                <source srcset="${wdata.url}" type="image/webp">
                <source srcset="${jdata.url}" type="image/jpeg">
                <img
                    src="${jdata.url}"
                    alt="${alt}"
                    class="side_image"
                    height="${jdata.height}"
                    width="${jdata.width}"
                    loading="lazy"
                    decoding="async"
                >
            </picture>`;
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
    } else {
        console.log('generating img:', src.substring(0, 60));
    }
    let metadata = {};
    try {
        metadata = await Image(src, {
            widths: [300],
            formats: ["webp", "png"],
            outputDir: "./_site/img/beer/",
            urlPath: "/img/beer/"
        });
        let wdata = metadata.webp[0];
        let pdata = metadata.png[0];
        return `
            <picture>
                <source srcset="${wdata.url}" type="image/webp">
                <source srcset="${pdata.url}" type="image/png">
                <img
                    src="${pdata.url}"
                    alt="beer image"
                    class="beer_img"
                    height="${pdata.height}"
                    width="${pdata.width}"
                    loading="lazy"
                    decoding="async"
                >
            </picture>`;
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
    console.log('generating img:', src.substring(0, 60));
    if (!src || src == '') return '';
    let metadata = await Image(src, {
        widths: [600],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/img/archer/",
        urlPath: "/img/archer/"
    });
    let wdata = metadata.webp[0];
    let jdata = metadata.jpeg[0];
    return `
        <picture>
            <source srcset="${wdata.url}" type="image/webp">
            <source srcset="${jdata.url}" type="image/jpeg">
            <img
                src="${jdata.url}"
                alt="archer image"
                style="width: 100%; height: auto;  border-radius: 1.0rem;"
                height="${jdata.height}"
                width="${jdata.width}"
                loading="lazy"
                decoding="async"
            >
        </picture>`
}

const generateF1Image = async (src, alt) => {
    console.log('generating img:', src.substring(0, 60));
    if (alt === undefined) {
        alt = ''
    }
    let metadata = await Image(src, {
        widths: [300],
        formats: ["webp", "png"],
        outputDir: "./_site/img/f1/",
        urlPath: "/img/f1/"
    });
    let wdata = metadata.webp[0];
    let pdata = metadata.png[0];
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
    console.log('generating img:', src.substring(0, 60));
    if (alt === undefined) {
        alt = ''
    }
    let metadata = await Image(src, {
        widths: [80],
        formats: ["webp", "png"],
        outputDir: "./_site/img/football/",
        urlPath: "/img/football/"
    });
    let wdata = metadata.webp[0];
    let pdata = metadata.png[0];
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
    console.log('generating img:', src.substring(0, 60));
    if (alt === undefined) {
        alt = ''
    }
    let metadata = await Image(src, {
        widths: [60],
        formats: ["webp", "png"],
        outputDir: "./_site/img/baseball/",
        urlPath: "/img/baseball/"
    });
    let wdata = metadata.webp[0];
    let pdata = metadata.png[0];
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

const generateWeatherImage = async (icon, alt) => {
    if (alt === undefined) {
        alt = ''
    }
    const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log('generating img:', src.substring(0, 60));
    let metadata = await Image(src, {
        widths: [50],
        formats: ["webp", "png"],
        outputDir: "./_site/img/weather/",
        urlPath: "/img/weather/"
    });
    let wdata = metadata.webp[0];
    let pdata = metadata.png[0];
    return `
        <picture>
            <source srcset="${wdata.url}" type="image/webp">
            <source srcset="${pdata.url}" type="image/png">
            <img
                src="${pdata.url}"
                alt="${alt}"
                height="50"
                width="50"
                loading="lazy"
                decoding="async">
        </picture>`;
}

const generateCatImage = async (src) => {
    console.log('generating img:', src.substring(0, 60));
    if (!src || src == '') return '';
    let metadata = await Image(src, {
        widths: [600],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/img/general/",
        urlPath: "/img/general/"
    });
    let wdata = metadata.webp[0];
    let jdata = metadata.jpeg[0];
    return `
        <picture>
            <source srcset="${wdata.url}" type="image/webp">
            <source srcset="${jdata.url}" type="image/jpeg">
            <img
                src="${jdata.url}"
                alt="random cat image"
                style = "width: 100%; height: auto; border-radius: 1.0rem;"
                height="${jdata.height}"
                width="${jdata.width}"
                loading="lazy"
                decoding="async"
            >
        </picture>`
}

const generateLinkImage = async (src, alt) => {
    console.log('generating img:', src.substring(0, 50));
    if (!src || src == '') return '';
    if (alt === undefined) {
        alt = ''
    }
    let metadata = await Image(src, {
        widths: [200],
        formats: ["webp", "png"],
        outputDir: "./_site/img/links/",
        urlPath: "/img/links/"
    });
    let wdata = metadata.webp[0];
    let pdata = metadata.png[0];
    return `
        <picture>
            <source srcset="${wdata.url}" type="image/webp">
            <source srcset="${pdata.url}" type="image/png">
            <img
                src="${pdata.url}"
                alt="${alt}"
                class="link_img"
                height="${pdata.height}"
                width="${pdata.width}"
                loading="lazy"
                decoding="async"
            >
        </picture>`;
}

const generateFlagImage = async (src, alt) => {
    if (alt === undefined) {
        alt = ''
    }
    console.log('generating img:', src.substring(0, 60));
    let metadata = await Image(src, {
        widths: [64],
        formats: ["webp", "png"],
        outputDir: "./_site/img/flags/",
        urlPath: "/img/flags/"
    });
    let wdata = metadata.webp[0];
    let pdata = metadata.png[0];
    return `
        <picture>
            <source srcset="${wdata.url}" type="image/webp">
            <source srcset="${pdata.url}" type="image/png">
            <img
                src="${pdata.url}"
                alt="${alt}"
                height="48"
                width="64"
                loading="lazy"
                decoding="async">
        </picture>`;
}

module.exports = {
    generateArcherImage,
    generateBaseballImage,
    generateBeerImage,
    generateCatImage,
    generateF1Image,
    generateFlagImage,
    generateFootballImage,
    generateImageTags,
    generateLinkImage,
    generateWeatherImage
}