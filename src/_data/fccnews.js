const EleventyFetch = require("@11ty/eleventy-fetch");
const jsdom = require('jsdom');
require('dotenv').config();

module.exports = async function () {

    try {        
        let html_data = await EleventyFetch('https://www.freecodecamp.org/news/', {
            duration: "3h",
            type: "buffer"
        });

        const dom = new jsdom.JSDOM(html_data);
        const articles = dom.window.document.querySelectorAll('article');
        const result = [];
        // get src and title for first n items
        for (let i = 0; i < 4; i++) {
            const temp = {
                imageUrl: articles[i].querySelector('.post-card-image').getAttribute('srcset'),
                altText: articles[i].querySelector('img').getAttribute('alt'),
                link: articles[i].querySelector('a.post-card-image-link').getAttribute('href'),
                title: articles[i].querySelector('h2>a').textContent
            }
            result.push(temp);
        }
        for (item of result) {
            // strip out leading spaces and newlines from the title
            item.title = item.title.replace(/\n/g, '').replace(/\s{3,}/g, '');
            // get thw "width 200" image for the image srcset
            item.imageUrl = item.imageUrl
                .split(",")
                .filter(x => /w200/.test(x))[0]
                .split(" ")[0];
            // if urls are relative, fix that
            if (/^\/news/.test(item.imageUrl)) {
                item.imageUrl = "http://freecodecamp.org" + item.imageUrl;
                item.imageUrl = item.imageUrl.replace('600w', '300w');
            }
            // turn links into full url
            if (/^\/news/.test(item.link)) {
                item.link = "http://freecodecamp.org" + item.link
            }
        }
        return result;

    } catch {
        return [];
    }
        

};
