const EleventyFetch = require("@11ty/eleventy-fetch");
const jsdom = require('jsdom');
require('dotenv').config();

module.exports = async function () {

    try {
        let html_data = await EleventyFetch('https://www.cyclingnews.com/race-results/', {
            duration: "3h",
            type: "buffer"
        });
        
        const dom = new jsdom.JSDOM(html_data);
        const articles = dom.window.document.querySelectorAll('div.listingResult');
        const result = [];
        // get up to 5 items, return gracefully if there *aren't* seven items            
        let complete = false;
        let idx = 0;
        while (!complete) {
            const article = articles[idx];
            if (article && article.querySelector('div.image-remove-reflow-container')) {
                const temp = {
                    imageUrl: articles[idx].querySelector('div.image-remove-reflow-container').getAttribute('data-original'),
                    altText: articles[idx].querySelector('img').getAttribute('alt'),
                    link: articles[idx].querySelector('a.article-link').getAttribute('href'),
                    title: articles[idx].querySelector('h3').textContent
                }
                result.push(temp);
            }
            idx += 1;
            if (result.length >= 5 || idx >= articles.length) complete = true;
        }
        return result;

    } catch (error) {
        console.log('Error getting cycling data:', error.message);
        return [];
    }
};
