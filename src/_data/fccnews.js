const axios = require('axios');
const jsdom = require('jsdom');
require('dotenv').config();

module.exports = async function () {

    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return [
        {
            imageUrl: 'http://freecodecamp.org/news/content/images/size/w600/2021/04/Screen-Shot-2021-04-08-at-7.00.31-AM.png',
            link: 'http://freecodecamp.org/news/open-source-insights-what-we-learned-from-860-million-github-event-logs/',
            title: 'Open Source Insights – What We Learned from 860 Million GitHub Event Logs'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDh8fGFybXl8ZW58MHx8fHwxNjE3ODI3OTQz&ixlib=rb-1.2.1&q=80&w=2000',
            link: 'http://freecodecamp.org/news/how-i-kept-coding-while-serving-in-the-military/',
            title: 'How I Kept Coding While Serving in the Military'
        },
        {
            imageUrl: 'http://freecodecamp.org/news/content/images/size/w600/2021/04/snakeeng.png',
            link: 'http://freecodecamp.org/news/improve-your-python-skills-by-coding-a-snake-game/',
            title: 'Improve Your Python Skills by Coding a Snake Game'
        },
        {
            imageUrl: 'http://freecodecamp.org/news/content/images/size/w600/2021/04/react-libraries-you-should-be-using.png',
            link: 'http://freecodecamp.org/news/react-libraries-you-should-use/',
            title: 'The Best React Libraries You Should Be Using Today'
        },
        {
            imageUrl: 'http://freecodecamp.org/news/content/images/size/w600/2021/04/Brand-Poster-1.png',
            link: 'http://freecodecamp.org/news/build-your-personal-brand-as-a-developer/',
            title: 'How to Build Your Personal Brand as a Developer'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1572062505547-912c49028cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIwfHxkYXJrJTIwbW9kZXxlbnwwfHx8fDE2MTc2MDM0NTI&ixlib=rb-1.2.1&q=80&w=2000',
            link: 'http://freecodecamp.org/news/gmail-dark-mode/',
            title: 'Gmail Dark Mode – How to Change the Gmail Background Theme on Desktop, iOS, and Android'
        }
    ];

    let htmldata = await axios
        .get('https://www.freecodecamp.org/news/')
        .then(res => res.data)
        .then(data => {
            const dom = new jsdom.JSDOM(data);
            const articles = dom.window.document.querySelectorAll('article');
            const ret = [];
            // get src and title for first n items
            for (let i = 0; i < 6; i++) {
                const temp = {
                    imageUrl: articles[i].querySelector('.post-card-image').getAttribute('src'),
                    link: articles[i].querySelector('a.post-card-image-link').getAttribute('href'),
                    title: articles[i].querySelector('h2>a').textContent
                }
                ret.push(temp);
            }
            for (item of ret) {
                // strip out leading spaces and newlines from the title
                item.title = item.title.replace(/\n/g, '').replace(/\s{3,}/g, '');
                // turn imageUrl into full url
                if (/^\/news/.test(item.imageUrl)) {
                    item.imageUrl = "http://freecodecamp.org" + item.imageUrl
                }
                // turn links into full url
                if (/^\/news/.test(item.link)) {
                    item.link = "http://freecodecamp.org" + item.link
                }
            }
            return ret
        })
        .catch((err) => {
            console.error(err);
            return [];
        });
    
    return htmldata;

};
