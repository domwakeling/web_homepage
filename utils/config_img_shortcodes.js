require('dotenv').config();
const Image = require("@11ty/eleventy-img");

const generateImageTags = async (src, alt) => {
    try {
        console.log('generating img:', src.substring(0, 50));
        const metadata = await Image(src, {
            widths: [300],
            formats: ["webp", "jpeg"],
            outputDir: "./_site/img/general/",
            urlPath: "/img/general/"
        });
        const attributes = {
            alt: alt,
            class:  "side_image",
            loading: "lazy",
            decoding: "async",
            sizes: `(min-width: 2080px) 170px,
                    (min-width: 1540px) calc(7.5vw + 16px),
                    (min-width: 1160px) calc(10.28vw + 14px),
                    (min-width: 1020px) 174px,
                    (min-width: 780px) calc(15.91vw + 15px),
                    (min-width: 500px) 158px, 32.22vw`
        }
        return Image.generateHTML(metadata, attributes);
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
    try {
        console.log('generating img:', src.substring(0, 60));
        const metadata = await Image(src, {
            widths: [300],
            formats: ["webp", "png"],
            outputDir: "./_site/img/beer/",
            urlPath: "/img/beer/"
        });
        const attributes = {
            alt: "beer image",
            class: "beer_img",
            loading:"lazy",
            decoding:"async",
            sizes: `(min-width: 2080px) 170px,
                    (min-width: 1540px) calc(7.5vw + 16px),
                    (min-width: 1160px) calc(10.28vw + 14px),
                    (min-width: 1020px) 174px,
                    (min-width: 780px) calc(15.91vw + 15px),
                    (min-width: 500px) 158px, 32.22vw`
        }
        return Image.generateHTML(metadata, attributes);
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
    const metadata = await Image(src, {
        widths: [600],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/img/archer/",
        urlPath: "/img/archer/"
    });
    const attributes = {
        alt: "archer image",
        style: "width: 100%; height: auto;  border-radius: 1.0rem;",
        loading: "eager",
        decoding: "async",
        sizes: `(min-width: 2080px) 424px,
                (min-width: 1540px) calc(18.65vw + 40px),
                (min-width: 1160px) calc(25.83vw + 33px),
                (min-width: 1020px) 434px,
                (min-width: 780px) calc(39.55vw + 39px),
                (min-width: 500px) 396px, 81.67vw`
    }
    return Image.generateHTML(metadata, attributes);
}

const generateF1Image = async (src, alt) => {
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [240],
        formats: ["webp", "png"],
        outputDir: "./_site/img/f1/",
        urlPath: "/img/f1/"
    });
    const attributes = {
        alt,
        loading: "lazy",
        decoding: "async",
        sizes: "240px"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateFootballImage = async (src, alt) => {
    console.log('generating img:', src.substring(0, 60)); 
    const metadata = await Image(src, {
        widths: [80],
        formats: ["webp", "png"],
        outputDir: "./_site/img/football/",
        urlPath: "/img/football/"
    });
    const attributes = {
        alt,
        style: "height: 40px; width: 40px; border: 2px solid orange; border-radius: 50%; position: relative; top: 0.5rem; object-fit: cover;",
        loading: "lazy",
        decoding: "async",
        sizes:"40px"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateBaseballImage = async (src, alt) => {
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [60],
        formats: ["webp", "png"],
        outputDir: "./_site/img/baseball/",
        urlPath: "/img/baseball/"
    });
    const attributes = {
        alt,
        style: "width: 3.0rem; height: auto; position: relative; top: 0.2rem",
        loading: "lazy",
        decoding: "async"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateWeatherImage = async (icon, alt) => {
    const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [50],
        formats: ["webp", "png"],
        outputDir: "./_site/img/weather/",
        urlPath: "/img/weather/"
    });
    const attributes = {
        alt,
        loading: "lazy",
        decoding: "async",
        sizes: "50px"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateCatImage = async (src) => {
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [600],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/img/general/",
        urlPath: "/img/general/"
    });
    const attributes = {
        alt: "random cat image",
        style:  "width: 100%; height: auto; border-radius: 1.0rem;",
        loading: "lazy",
        decoding: "async",
        sizes: `(min-width: 2080px) 424px,
                (min-width: 1540px) calc(18.65vw + 40px),
                (min-width: 1160px) calc(25.83vw + 33px),
                (min-width: 1020px) 434px,
                (min-width: 780px) calc(39.55vw + 39px),
                (min-width: 500px) 396px, 81.67vw`
    }
    return Image.generateHTML(metadata, attributes);
}

const generateLinkImage = async (src, alt) => {
    console.log('generating img:', src.substring(0, 50));
    const metadata = await Image(src, {
        widths: [200],
        formats: ["webp", "png"],
        outputDir: "./_site/img/links/",
        urlPath: "/img/links/"
    });
    const attributes = {
        alt,
        class: "link_img",
        loading:"lazy",
        decoding:"async",
        sizes: "100px"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateFlagImage = async (src, alt) => {
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [64],
        formats: ["webp", "png"],
        outputDir: "./_site/img/flags/",
        urlPath: "/img/flags/"
    });
    const attributes = {
        alt,
        loading: "lazy",
        decoding: "async",
        sizes: "64px"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateWatchImage = async (src) => {    
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [500],
        formats: ["webp", "png"],
        outputDir: "./_site/img/general/",
        urlPath: "/img/general/"
    });
    const attributes = {
        style: "width: 250px; height: 250px;",
        sizes: "250px",
        alt: "watchface",
        loading: "eager",
        decoding: "async"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateMastoImage = async (src) => {
    try {
        console.log('generating img:', src.substring(0, 50));
        const metadata = await Image(src, {
            widths: [80],
            formats: ["webp", "jpeg"],
            outputDir: "./_site/img/general/",
            urlPath: "/img/general/"
        });
        const attributes = {
            alt:"user avatar",
            class: "toot_user",
            loading:"eager",
            decoding:"async",
            sizes: "36px"
        }
        return Image.generateHTML(metadata, attributes);
    } catch (e) {
        console.error(e.message);
        return '';
    }
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
    generateMastoImage,
    generateWatchImage,
    generateWeatherImage
}