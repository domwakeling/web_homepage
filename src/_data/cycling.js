const axios = require('axios');
const jsdom = require('jsdom');
require('dotenv').config();

module.exports = async function () {

    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return [
        {
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/5DvZWgS6dztq6feQTTdAw3.jpg',
            link: 'https://www.cyclingnews.com/races/de-brabantse-pijl-la-fleche-brabanconne-2021/elite-men/results/',
            title: 'Tom Pidcock sprints to win at De Brabantse Pijl'
        },
        {
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/8xxroR6VmksY3B8eh5ewUR.jpg',
            link: 'https://www.cyclingnews.com/races/volta-a-la-comunitat-valenciana-2021/stage-1/results/',
            title: 'Volta a la Comunitat Valenciana: Miles Scotson wins stage 1'
        },
        {
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/8MZmL7fcBJST58KKLHX7bh.jpg',
            link: 'https://www.cyclingnews.com/races/brabantse-pijl-dames-2021/elite-women/results/',
            title: 'Ruth Winder wins Brabantse Pijl Dames after Demi Vollering celebrates too soon'
        },
        {
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/DJVMcsG5yUBfefgWaQsGqG.jpg',
            link: 'https://www.cyclingnews.com/races/presidential-cycling-tour-of-turkey-2021/stage-4/results/',
            title: 'Tour of Turkey: Mark Cavendish wins stage 4 after huge crash in sprint finish'
        },
        {
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/SVnbQ9uvdV2s3DjFJRFpC.jpg',
            link: 'https://www.cyclingnews.com/races/presidential-cycling-tour-of-turkey-2021/stage-3/results/',
            title: 'Tour of Turkey: Mark Cavendish wins stage 3'
        },
        // {
        //     imageUrl: 'https://cdn.mos.cms.futurecdn.net/ZCFsd5HkvuqsZpcAeFoHbh.jpg',
        //     link: 'https://www.cyclingnews.com/races/gorge-gravel-grinder-2021/elite-women/results/',
        //     title: "Rebecca Fahringer overcomes intimidation to win Gorge Gravel Grinder over 'cross rival Clara Honsinger"
        // },
        // {
        //     imageUrl: 'https://cdn.mos.cms.futurecdn.net/WYEWig96USzwLcPfTnLb94.jpg',
        //     link: 'https://www.cyclingnews.com/races/presidential-cycling-tour-of-turkey-2021/stage-2/results/',
        //     title: 'Tour of Turkey: Mark Cavendish wins stage 2'
        // }
    ];

    let htmldata = await axios
        .get('https://www.cyclingnews.com/race-results/')
        .then(res => res.data)
        .then(data => {
            const dom = new jsdom.JSDOM(data);
            const articles = dom.window.document.querySelectorAll('div.listingResult');
            const ret = [];
            // get up to 7 items, return gracefully if there *aren't* seven items            
            let complete = false;
            let idx = 0;
            while (!complete) {
                // console.log(articles[i].querySelector('div.image-remove-reflow-container').getAttribute('data-original'));
                const article = articles[idx];
                if (article && article.querySelector('div.image-remove-reflow-container')) {
                    const temp = {
                        imageUrl: articles[idx].querySelector('div.image-remove-reflow-container').getAttribute('data-original'),
                        link: articles[idx].querySelector('a.article-link').getAttribute('href'),
                        title: articles[idx].querySelector('h3').textContent
                    }
                    ret.push(temp);
                }
                idx += 1;
                if (ret.length >= 5 || idx >= articles.length) complete = true; 
            }
            return ret
        })
        .catch((err) => {
            console.error(err);
            return [];
        });

    return htmldata;

};
