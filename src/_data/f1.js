const axios = require('axios');
require('dotenv').config();

module.exports = async function () {

    let f1data = {};

    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        f1data = {
            "MRData": {
                "xmlns": "http://ergast.com/mrd/1.4",
                "series": "f1",
                "url": "http://ergast.com/api/f1/current/constructorstandings.json",
                "limit": "30",
                "offset": "0",
                "total": "10",
                "StandingsTable": {
                    "season": "2021",
                    "StandingsLists": [
                        {
                            "season": "2021",
                            "round": "1",
                            "ConstructorStandings": [
                                {
                                    "position": "1",
                                    "positionText": "1",
                                    "points": "555",
                                    "wins": "1",
                                    "Constructor": {
                                        "constructorId": "mercedes",
                                        "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                        "name": "Mercedes",
                                        "nationality": "German"
                                    }
                                },
                                {
                                    "position": "2",
                                    "positionText": "2",
                                    "points": "28",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "red_bull",
                                        "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                                        "name": "Red Bull",
                                        "nationality": "Austrian"
                                    }
                                },
                                {
                                    "position": "3",
                                    "positionText": "3",
                                    "points": "18",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "mclaren",
                                        "url": "http://en.wikipedia.org/wiki/McLaren",
                                        "name": "McLaren",
                                        "nationality": "British"
                                    }
                                },
                                {
                                    "position": "4",
                                    "positionText": "4",
                                    "points": "12",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "ferrari",
                                        "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                        "name": "Ferrari",
                                        "nationality": "Italian"
                                    }
                                },
                                {
                                    "position": "5",
                                    "positionText": "5",
                                    "points": "2",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "alphatauri",
                                        "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                                        "name": "AlphaTauri",
                                        "nationality": "Italian"
                                    }
                                },
                                {
                                    "position": "6",
                                    "positionText": "6",
                                    "points": "1",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "aston_martin",
                                        "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                        "name": "Aston Martin",
                                        "nationality": "British"
                                    }
                                },
                                {
                                    "position": "7",
                                    "positionText": "7",
                                    "points": "0",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "alfa",
                                        "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                                        "name": "Alfa Romeo",
                                        "nationality": "Swiss"
                                    }
                                },
                                {
                                    "position": "8",
                                    "positionText": "8",
                                    "points": "0",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "alpine",
                                        "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
                                        "name": "Alpine F1 Team",
                                        "nationality": "French"
                                    }
                                },
                                {
                                    "position": "9",
                                    "positionText": "9",
                                    "points": "555",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "williams",
                                        "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                        "name": "Williams",
                                        "nationality": "British"
                                    }
                                },
                                {
                                    "position": "10",
                                    "positionText": "10",
                                    "points": "0",
                                    "wins": "0",
                                    "Constructor": {
                                        "constructorId": "haas",
                                        "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                                        "name": "Haas F1 Team",
                                        "nationality": "American"
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        }
    } else {
         f1data = await axios
        .get('https://ergast.com/api/f1/current/constructorStandings.json')
        .then(res => res.data)
        .catch((err) => {
            console.error(err);
            return {};
        });
    }

    // If more are needed: use Wikipedia, right-click on the image and open in new tab, this will
    // allow you to get link with "upload"; generating out PNG's to retain transparency
    const imgUrls = {
        'mercedes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/358px-Mercedes-Benz_in_Formula_One_logo.svg.png',
        'red_bull': 'https://upload.wikimedia.org/wikipedia/en/b/b2/Red_Bull_Racing_2021_logo.png',
        'mclaren': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/320px-McLaren_Racing_logo.svg.png',
        'racing_point': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/BWT_Racing_Point_Logo.svg/320px-BWT_Racing_Point_Logo.svg.png',
        // 'aston_martin': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Aston_Martin_F1.svg/562px-Aston_Martin_F1.svg.png',
        'aston_martin': '/img/aston_martin.png',
        'renault': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Renault_F1_Team_logo_2019.svg/320px-Renault_F1_Team_logo_2019.svg.png',
        // 'alpine': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Alpine_F1_Team_Logo.svg/262px-Alpine_F1_Team_Logo.svg.png',
        'alpine': '/img/alpine_f1.png',
        // 'ferrari': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Scuderia_Ferrari_Logo.svg/177px-Scuderia_Ferrari_Logo.svg.png',
        'ferrari': '/img/scuderia_ferrari.png',
        // 'alphatauri': 'https://upload.wikimedia.org/wikipedia/en/0/09/Scuderia_Alpha-Tauri.svg',
        'alphatauri': '/img/scuderia_alphatauri.png',
        'alfa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_Alfa_Romeo_Racing_Orlen.svg/320px-Logo_Alfa_Romeo_Racing_Orlen.svg.png',
        'haas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Uralkali_Haas_F1_Team_Logo.svg/405px-Uralkali_Haas_F1_Team_Logo.svg.png',
        'williams': 'https://upload.wikimedia.org/wikipedia/en/e/e8/Williams_Racing_2020_logo.png'
    }

    // we have the data, need to map it
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

};
