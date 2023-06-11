const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {

    // If more are needed: use Wikipedia, right-click on the image and open in new tab, this will
    // allow you to get link with "upload"; generating out PNG's to retain transparency
    const imgUrls = {
        'mercedes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/358px-Mercedes-Benz_in_Formula_One_logo.svg.png',
        'red_bull': './src/img/f1/red_bull.png',
        'mclaren': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/320px-McLaren_Racing_logo.svg.png',
        'racing_point': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/BWT_Racing_Point_Logo.svg/320px-BWT_Racing_Point_Logo.svg.png',
        'aston_martin': './src/img/f1/aston_martin.png',
        'renault': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Renault_F1_Team_logo_2019.svg/320px-Renault_F1_Team_logo_2019.svg.png',
        'alpine': './src/img/f1/alpine_f1.png',
        'ferrari': './src/img/f1/scuderia_ferrari.png',
        'alphatauri': './src/img/f1/scuderia_alphatauri.png',
        'alfa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_Alfa_Romeo_Racing_Orlen.svg/320px-Logo_Alfa_Romeo_Racing_Orlen.svg.png',
        'haas': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Haas_F1_Team_logo.png',
        'williams': 'https://upload.wikimedia.org/wikipedia/en/e/e8/Williams_Racing_2020_logo.png'
    }

    try {

         const f1data = await EleventyFetch('https://ergast.com/api/f1/current/constructorStandings.json', {
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

    } catch {
        return [];
    }
};
