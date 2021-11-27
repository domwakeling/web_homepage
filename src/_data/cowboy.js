const axios = require('axios');
require('dotenv').config();

module.exports = async function () {

    let cowboydata = []
    
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
    
        cowboydata = [

            {
                anime: 'Cowboy Bebop',
                character: 'Spike Spiegel',
                quote: 'I love the type of woman who can kick my ***.' 
            },
            {
                anime: 'Cowboy Bebop',
                character: 'Vicious',
                quote: 'There is nothing left to believe in.' 
            },
            {
                anime: 'Cowboy Bebop',
                character: 'Andy Von De Oniyate',
                quote: "Why don't we drink to me and my reflection in your lovely eyes?" 
            },
            {
                anime: 'Cowboy Bebop',
                character: 'Spike Spiegel',
                quote: "Once, there was a tiger striped cat. This cat, die…also died. But this time.....he didn't come back." 
            },
            {
                anime: 'Cowboy Bebop',
                character: 'Spike Spiegel',
                quote: 'There are three things I hate the most: Kids, pets…why do we have all of them packed into our ship!?' 
            },
            {
                anime: 'Cowboy Bebop',
                character: 'Spike Spiegel',
                quote: "*points to Jet*Don't give me that art of war crap!…o the other man*You take too long to take a sh*t!" 
            },
            {
                anime: 'Cowboy Bebop',
                character: 'Spike Spiegel',
                quote: "Don't you want to hang out and waste your life with us?" 
            },
            {
                anime: 'Cowboy Bebop',
                character: 'Spike Spiegel',
                quote: "A man can't just live on carbohydrates alone..." 
            },
            {
                anime: 'Cowboy Bebop',
                character: 'Spike Spiegel',
                quote: "I'm not going there to die. I'm going there to find out if I'm really alive." 
            },
            {
                anime: 'Cowboy Bebop: The Movie',
                character: 'Vincent Volaju',
                quote: 'Of the days that I have lived, only those I spent with you seemed real.'
             }
        ]

    } else {
        const page = Math.floor(Math.random() * 20) + 1
        cowboydata = await axios.get(`https://animechan.vercel.app/api/quotes/anime?title=cowboy%20bebop&page=${page}`)
            .then(response => response.data)
    }

    return cowboydata[Math.floor(Math.random() * cowboydata.length)]
}