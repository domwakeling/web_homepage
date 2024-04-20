require('dotenv').config();
const Image = require("@11ty/eleventy-img");

const generateImageTags = async (src, alt) => {
    try {
        console.log('generating img:', src.substring(0, 50));
        const metadata = await Image(src, {
            widths: [125, 150, 200, 250, 300],
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

const generateArcherImage = async (src) => {
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [300, 400, 424, 600, 800, 848],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/img/archer/",
        urlPath: "/img/archer/"
    });
    const attributes = {
        alt: "Archer TV show screenshot",
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
        widths: [240, 480],
        formats: ["webp", "png"],
        outputDir: "./_site/img/f1/",
        urlPath: "/img/f1/"
    });
    const attributes = {
        alt,
        loading: "lazy",
        decoding: "async",
        sizes: "240px",
        style: "width: 240px; height: auto;"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateWeatherImage = async (icon, alt) => {
    const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [50, 100],
        formats: ["webp", "png"],
        outputDir: "./_site/img/weather/",
        urlPath: "/img/weather/"
    });
    const attributes = {
        alt,
        loading: "lazy",
        decoding: "async",
        sizes: "50px",
        style: "width: 50px; height: 50px;"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateBitcoinImage = async () => {
    const src = `./src/img/bitcoin.png`;
    console.log('generating img: bitcoin');
    const metadata = await Image(src, {
        widths: [44, 88],
        formats: ["webp", "png"],
        outputDir: "./_site/img/bitcoin/",
        urlPath: "/img/bitcoin/"
    });
    const attributes = {
        alt: "Bitcoin logo",
        loading: "lazy",
        decoding: "async",
        sizes: "44px",
        style: "width: 44px; height: auto; float: left; position: relative; top: 7px; margin-right: 0.25rem"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateCatImage = async (src) => {
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [300, 400, 600],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/img/general/",
        urlPath: "/img/general/"
    });
    const attributes = {
        alt: "a cute cat photo that is cute",
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
        widths: [100, 200],
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
        widths: [64,128],
        formats: ["webp", "png"],
        outputDir: "./_site/img/flags/",
        urlPath: "/img/flags/"
    });
    const attributes = {
        alt,
        loading: "lazy",
        decoding: "async",
        sizes: "64px",
        style: "width: 64px; height: auto"
    }
    return Image.generateHTML(metadata, attributes);
}

const generateWatchImage = async (src) => {    
    console.log('generating img:', src.substring(0, 60));
    const metadata = await Image(src, {
        widths: [250, 500],
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

module.exports = {
    generateArcherImage,
    generateBitcoinImage,
    generateCatImage,
    generateF1Image,
    generateFlagImage,
    generateImageTags,
    generateLinkImage,
    generateWatchImage,
    generateWeatherImage
}