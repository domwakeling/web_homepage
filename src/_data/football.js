const axios = require('axios');
require('dotenv').config();

module.exports = async function () {

    let footballdata = {}
    // in development, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        footballdata = {
            data: {
                "filters": {},
                "competition": {
                    "id": 2021,
                    "area": {
                        "id": 2072,
                        "name": "England"
                    },
                    "name": "Premier League",
                    "code": "PL",
                    "plan": "TIER_ONE",
                    "lastUpdated": "2020-09-15T00:15:01Z"
                },
                "season": {
                    "id": 619,
                    "startDate": "2020-09-12",
                    "endDate": "2021-05-23",
                    "currentMatchday": 1,
                    "winner": null
                },
                "standings": [
                    {
                        "stage": "REGULAR_SEASON",
                        "type": "TOTAL",
                        "group": null,
                        "table": [
                            {
                                "position": 1,
                                "team": {
                                    "id": 57,
                                    "name": "Arsenal FC",
                                    "crestUrl": "https://crests.football-data.org/57.svg"
                                },
                                "playedGames": 1,
                                "form": "W",
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 3,
                                "goalsAgainst": 0,
                                "goalDifference": 3
                            },
                            {
                                "position": 2,
                                "team": {
                                    "id": 338,
                                    "name": "Leicester City FC",
                                    "crestUrl": "https://crests.football-data.org/338.svg"
                                },
                                "playedGames": 1,
                                "form": "W",
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 3,
                                "goalsAgainst": 0,
                                "goalDifference": 3
                            },
                            {
                                "position": 3,
                                "team": {
                                    "id": 61,
                                    "name": "Chelsea FC",
                                    "crestUrl": "https://crests.football-data.org/61.svg"
                                },
                                "playedGames": 1,
                                "form": "W",
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 3,
                                "goalsAgainst": 1,
                                "goalDifference": 2
                            },
                            {
                                "position": 4,
                                "team": {
                                    "id": 76,
                                    "name": "Wolverhampton Wanderers FC",
                                    "crestUrl": "https://crests.football-data.org/76.svg"
                                },
                                "playedGames": 1,
                                "form": "W",
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 2,
                                "goalsAgainst": 0,
                                "goalDifference": 2
                            },
                            {
                                "position": 5,
                                "team": {
                                    "id": 67,
                                    "name": "Newcastle United FC",
                                    "crestUrl": "https://crests.football-data.org/67.svg"
                                },
                                "playedGames": 1,
                                "form": "W",
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 2,
                                "goalsAgainst": 0,
                                "goalDifference": 2
                            },
                            {
                                "position": 6,
                                "team": {
                                    "id": 64,
                                    "name": "Liverpool FC",
                                    "crestUrl": "https://crests.football-data.org/64.svg"
                                },
                                "playedGames": 1,
                                "form": "W",
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 4,
                                "goalsAgainst": 3,
                                "goalDifference": 1
                            },
                            {
                                "position": 7,
                                "team": {
                                    "id": 62,
                                    "name": "Everton FC",
                                    "crestUrl": "https://crests.football-data.org/62.svg"
                                },
                                "playedGames": 1,
                                "form": "W",
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 1,
                                "goalsAgainst": 0,
                                "goalDifference": 1
                            },
                            {
                                "position": 8,
                                "team": {
                                    "id": 354,
                                    "name": "Crystal Palace FC",
                                    "crestUrl": "https://crests.football-data.org/354.svg"
                                },
                                "playedGames": 1,
                                "form": "W",
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 1,
                                "goalsAgainst": 0,
                                "goalDifference": 1
                            },
                            {
                                "position": 9,
                                "team": {
                                    "id": 58,
                                    "name": "Aston Villa FC",
                                    "crestUrl": "https://crests.football-data.org/58.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 10,
                                "team": {
                                    "id": 65,
                                    "name": "Manchester City FC",
                                    "crestUrl": "https://crests.football-data.org/65.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 11,
                                "team": {
                                    "id": 66,
                                    "name": "Manchester United FC",
                                    "crestUrl": "https://crests.football-data.org/66.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 12,
                                "team": {
                                    "id": 328,
                                    "name": "Burnley FC",
                                    "crestUrl": "https://crests.football-data.org/328.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 13,
                                "team": {
                                    "id": 341,
                                    "name": "Leeds United FC",
                                    "crestUrl": "https://crests.football-data.org/341.svg"
                                },
                                "playedGames": 1,
                                "form": "L",
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 3,
                                "goalsAgainst": 4,
                                "goalDifference": -1
                            },
                            {
                                "position": 14,
                                "team": {
                                    "id": 73,
                                    "name": "Tottenham Hotspur FC",
                                    "crestUrl": "https://crests.football-data.org/73.svg"
                                },
                                "playedGames": 1,
                                "form": "L",
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 1,
                                "goalDifference": -1
                            },
                            {
                                "position": 15,
                                "team": {
                                    "id": 340,
                                    "name": "Southampton FC",
                                    "crestUrl": "https://crests.football-data.org/340.svg"
                                },
                                "playedGames": 1,
                                "form": "L",
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 1,
                                "goalDifference": -1
                            },
                            {
                                "position": 16,
                                "team": {
                                    "id": 397,
                                    "name": "Brighton & Hove Albion FC",
                                    "crestUrl": "https://crests.football-data.org/397.svg"
                                },
                                "playedGames": 1,
                                "form": "L",
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 1,
                                "goalsAgainst": 3,
                                "goalDifference": -2
                            },
                            {
                                "position": 17,
                                "team": {
                                    "id": 356,
                                    "name": "Sheffield United FC",
                                    "crestUrl": "https://crests.football-data.org/356.svg"
                                },
                                "playedGames": 1,
                                "form": "L",
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 2,
                                "goalDifference": -2
                            },
                            {
                                "position": 18,
                                "team": {
                                    "id": 563,
                                    "name": "West Ham United FC",
                                    "crestUrl": "https://crests.football-data.org/563.svg"
                                },
                                "playedGames": 1,
                                "form": "L",
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 2,
                                "goalDifference": -2
                            },
                            {
                                "position": 19,
                                "team": {
                                    "id": 63,
                                    "name": "Fulham FC",
                                    "crestUrl": "https://crests.football-data.org/63.svg"
                                },
                                "playedGames": 1,
                                "form": "L",
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 3,
                                "goalDifference": -3
                            },
                            {
                                "position": 20,
                                "team": {
                                    "id": 74,
                                    "name": "West Bromwich Albion FC",
                                    "crestUrl": "https://crests.football-data.org/74.svg"
                                },
                                "playedGames": 1,
                                "form": "L",
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 3,
                                "goalDifference": -3
                            }
                        ]
                    },
                    {
                        "stage": "REGULAR_SEASON",
                        "type": "HOME",
                        "group": null,
                        "table": [
                            {
                                "position": 1,
                                "team": {
                                    "id": 64,
                                    "name": "Liverpool FC",
                                    "crestUrl": "https://crests.football-data.org/64.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 4,
                                "goalsAgainst": 3,
                                "goalDifference": 1
                            },
                            {
                                "position": 2,
                                "team": {
                                    "id": 354,
                                    "name": "Crystal Palace FC",
                                    "crestUrl": "https://crests.football-data.org/354.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 1,
                                "goalsAgainst": 0,
                                "goalDifference": 1
                            },
                            {
                                "position": 3,
                                "team": {
                                    "id": 76,
                                    "name": "Wolverhampton Wanderers FC",
                                    "crestUrl": "https://crests.football-data.org/76.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 4,
                                "team": {
                                    "id": 58,
                                    "name": "Aston Villa FC",
                                    "crestUrl": "https://crests.football-data.org/58.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 5,
                                "team": {
                                    "id": 65,
                                    "name": "Manchester City FC",
                                    "crestUrl": "https://crests.football-data.org/65.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 6,
                                "team": {
                                    "id": 67,
                                    "name": "Newcastle United FC",
                                    "crestUrl": "https://crests.football-data.org/67.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 7,
                                "team": {
                                    "id": 57,
                                    "name": "Arsenal FC",
                                    "crestUrl": "https://crests.football-data.org/57.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 8,
                                "team": {
                                    "id": 61,
                                    "name": "Chelsea FC",
                                    "crestUrl": "https://crests.football-data.org/61.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 9,
                                "team": {
                                    "id": 62,
                                    "name": "Everton FC",
                                    "crestUrl": "https://crests.football-data.org/62.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 10,
                                "team": {
                                    "id": 66,
                                    "name": "Manchester United FC",
                                    "crestUrl": "https://crests.football-data.org/66.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 11,
                                "team": {
                                    "id": 338,
                                    "name": "Leicester City FC",
                                    "crestUrl": "https://crests.football-data.org/338.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 12,
                                "team": {
                                    "id": 328,
                                    "name": "Burnley FC",
                                    "crestUrl": "https://crests.football-data.org/328.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 13,
                                "team": {
                                    "id": 341,
                                    "name": "Leeds United FC",
                                    "crestUrl": "https://crests.football-data.org/341.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 14,
                                "team": {
                                    "id": 340,
                                    "name": "Southampton FC",
                                    "crestUrl": "https://crests.football-data.org/340.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 15,
                                "team": {
                                    "id": 73,
                                    "name": "Tottenham Hotspur FC",
                                    "crestUrl": "https://crests.football-data.org/73.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 1,
                                "goalDifference": -1
                            },
                            {
                                "position": 16,
                                "team": {
                                    "id": 397,
                                    "name": "Brighton & Hove Albion FC",
                                    "crestUrl": "https://crests.football-data.org/397.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 1,
                                "goalsAgainst": 3,
                                "goalDifference": -2
                            },
                            {
                                "position": 17,
                                "team": {
                                    "id": 356,
                                    "name": "Sheffield United FC",
                                    "crestUrl": "https://crests.football-data.org/356.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 2,
                                "goalDifference": -2
                            },
                            {
                                "position": 18,
                                "team": {
                                    "id": 563,
                                    "name": "West Ham United FC",
                                    "crestUrl": "https://crests.football-data.org/563.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 2,
                                "goalDifference": -2
                            },
                            {
                                "position": 19,
                                "team": {
                                    "id": 63,
                                    "name": "Fulham FC",
                                    "crestUrl": "https://crests.football-data.org/63.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 3,
                                "goalDifference": -3
                            },
                            {
                                "position": 20,
                                "team": {
                                    "id": 74,
                                    "name": "West Bromwich Albion FC",
                                    "crestUrl": "https://crests.football-data.org/74.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 3,
                                "goalDifference": -3
                            }
                        ]
                    },
                    {
                        "stage": "REGULAR_SEASON",
                        "type": "AWAY",
                        "group": null,
                        "table": [
                            {
                                "position": 1,
                                "team": {
                                    "id": 57,
                                    "name": "Arsenal FC",
                                    "crestUrl": "https://crests.football-data.org/57.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 3,
                                "goalsAgainst": 0,
                                "goalDifference": 3
                            },
                            {
                                "position": 2,
                                "team": {
                                    "id": 338,
                                    "name": "Leicester City FC",
                                    "crestUrl": "https://crests.football-data.org/338.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 3,
                                "goalsAgainst": 0,
                                "goalDifference": 3
                            },
                            {
                                "position": 3,
                                "team": {
                                    "id": 61,
                                    "name": "Chelsea FC",
                                    "crestUrl": "https://crests.football-data.org/61.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 3,
                                "goalsAgainst": 1,
                                "goalDifference": 2
                            },
                            {
                                "position": 4,
                                "team": {
                                    "id": 76,
                                    "name": "Wolverhampton Wanderers FC",
                                    "crestUrl": "https://crests.football-data.org/76.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 2,
                                "goalsAgainst": 0,
                                "goalDifference": 2
                            },
                            {
                                "position": 5,
                                "team": {
                                    "id": 67,
                                    "name": "Newcastle United FC",
                                    "crestUrl": "https://crests.football-data.org/67.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 2,
                                "goalsAgainst": 0,
                                "goalDifference": 2
                            },
                            {
                                "position": 6,
                                "team": {
                                    "id": 62,
                                    "name": "Everton FC",
                                    "crestUrl": "https://crests.football-data.org/62.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 1,
                                "draw": 0,
                                "lost": 0,
                                "points": 3,
                                "goalsFor": 1,
                                "goalsAgainst": 0,
                                "goalDifference": 1
                            },
                            {
                                "position": 7,
                                "team": {
                                    "id": 63,
                                    "name": "Fulham FC",
                                    "crestUrl": "https://crests.football-data.org/63.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 8,
                                "team": {
                                    "id": 58,
                                    "name": "Aston Villa FC",
                                    "crestUrl": "https://crests.football-data.org/58.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 9,
                                "team": {
                                    "id": 64,
                                    "name": "Liverpool FC",
                                    "crestUrl": "https://crests.football-data.org/64.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 10,
                                "team": {
                                    "id": 65,
                                    "name": "Manchester City FC",
                                    "crestUrl": "https://crests.football-data.org/65.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 11,
                                "team": {
                                    "id": 73,
                                    "name": "Tottenham Hotspur FC",
                                    "crestUrl": "https://crests.football-data.org/73.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 12,
                                "team": {
                                    "id": 74,
                                    "name": "West Bromwich Albion FC",
                                    "crestUrl": "https://crests.football-data.org/74.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 13,
                                "team": {
                                    "id": 66,
                                    "name": "Manchester United FC",
                                    "crestUrl": "https://crests.football-data.org/66.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 14,
                                "team": {
                                    "id": 356,
                                    "name": "Sheffield United FC",
                                    "crestUrl": "https://crests.football-data.org/356.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 15,
                                "team": {
                                    "id": 328,
                                    "name": "Burnley FC",
                                    "crestUrl": "https://crests.football-data.org/328.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 16,
                                "team": {
                                    "id": 563,
                                    "name": "West Ham United FC",
                                    "crestUrl": "https://crests.football-data.org/563.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 17,
                                "team": {
                                    "id": 354,
                                    "name": "Crystal Palace FC",
                                    "crestUrl": "https://crests.football-data.org/354.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 18,
                                "team": {
                                    "id": 397,
                                    "name": "Brighton & Hove Albion FC",
                                    "crestUrl": "https://crests.football-data.org/397.svg"
                                },
                                "playedGames": 0,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 0,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 0,
                                "goalDifference": 0
                            },
                            {
                                "position": 19,
                                "team": {
                                    "id": 341,
                                    "name": "Leeds United FC",
                                    "crestUrl": "https://crests.football-data.org/341.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 3,
                                "goalsAgainst": 4,
                                "goalDifference": -1
                            },
                            {
                                "position": 20,
                                "team": {
                                    "id": 340,
                                    "name": "Southampton FC",
                                    "crestUrl": "https://crests.football-data.org/340.svg"
                                },
                                "playedGames": 1,
                                "form": null,
                                "won": 0,
                                "draw": 0,
                                "lost": 1,
                                "points": 0,
                                "goalsFor": 0,
                                "goalsAgainst": 1,
                                "goalDifference": -1
                            }
                        ]
                    }
                ]
            }
        }
    } else {

        const key = process.env.FOOTBALL_KEY || "dummykeygoingtofail";
        let body = {
            headers: {
                "X-Auth-Token": key,
                "content-type": "application/json"
            }
        };

        footballdata = await axios
            .get('https://api.football-data.org/v2/competitions/PL/standings', body)
            .catch((err) => {
                console.error(err);
                return {}
            });
    }

    return footballdata.data.standings.filter(item => item.type = 'TOTAL')[0].table.sort((a,b) => a.position - b.position);
};