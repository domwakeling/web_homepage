const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {

    // If more are needed: use Wikipedia, right-click on the image and open in new tab, this will
    // allow you to get link with "upload"; generating out PNG's to retain transparency
    const imgUrls = {
        'mercedes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/640px-Mercedes_AMG_Petronas_F1_Logo.svg.png',
        'red_bull': './src/img/f1/red_bull.png',
        'mclaren': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/640px-McLaren_Racing_logo.svg.png',
        'aston_martin': './src/img/f1/aston_martin.png',
        'renault': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Renault_F1_Team_logo_2019.svg/640px-Renault_F1_Team_logo_2019.svg.png',
        'alpine': './src/img/f1/alpine_f1.png',
        'ferrari': './src/img/f1/scuderia_ferrari.png',
        'alphatauri': './src/img/f1/scuderia_alphatauri.png',
        'alfa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_Alfa_Romeo_Racing_Orlen.svg/640px-Logo_Alfa_Romeo_Racing_Orlen.svg.png',
        'haas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/MoneyGram_Haas_F1_Team_Logo.svg/640px-MoneyGram_Haas_F1_Team_Logo.svg.png',
        'williams': './src/img/f1/williams.png',
        'rb': 'https://upload.wikimedia.org/wikipedia/en/2/2b/VCARB_F1_logo.svg',
        'sauber': './src/img/f1/stake_sauber.png'
    }

    try {
        // const f1data = await EleventyFetch('https://ergast.com/api/f1/current/constructorStandings.json', {
        const f1data = await EleventyFetch('http://api.jolpi.ca/ergast/f1/current/constructorStandings.json', {
             duration: "3h",
             type: "json"
         });

        return f1data
            .MRData
            .StandingsTable
            .StandingsLists[0]
            .ConstructorStandings
            .map((item) => ({
                imageUrl: imgUrls[item.Constructor.constructorId],
                name: item.Constructor.name,
                points: item.points
            }));

    } catch (error) {
        console.log("Error when fetching from F1:", error.message);
        return [];
    }
};
