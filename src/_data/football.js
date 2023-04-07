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
                                position: 1,
                                team: {
                                    id: 61,
                                    name: 'Chelsea FC',
                                    crest: 'https://crests.football-data.org/61.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 8,
                                draw: 1,
                                lost: 1,
                                points: 25,
                                goalsFor: 26,
                                goalsAgainst: 3,
                                goalDifference: 23
                            },
                            {
                                position: 2,
                                team: {
                                    id: 64,
                                    name: 'Liverpool FC',
                                    crest: 'https://crests.football-data.org/64.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 6,
                                draw: 4,
                                lost: 0,
                                points: 22,
                                goalsFor: 29,
                                goalsAgainst: 8,
                                goalDifference: 21
                            },
                            {
                                position: 3,
                                team: {
                                    id: 65,
                                    name: 'Manchester City FC',
                                    crest: 'https://crests.football-data.org/65.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 6,
                                draw: 2,
                                lost: 2,
                                points: 20,
                                goalsFor: 20,
                                goalsAgainst: 6,
                                goalDifference: 14
                            },
                            {
                                position: 4,
                                team: {
                                    id: 563,
                                    name: 'West Ham United FC',
                                    crest: 'https://crests.football-data.org/563.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 6,
                                draw: 2,
                                lost: 2,
                                points: 20,
                                goalsFor: 20,
                                goalsAgainst: 11,
                                goalDifference: 9
                            },
                            {
                                position: 5,
                                team: {
                                    id: 66,
                                    name: 'Manchester United FC',
                                    crest: 'https://crests.football-data.org/66.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 5,
                                draw: 2,
                                lost: 3,
                                points: 17,
                                goalsFor: 19,
                                goalsAgainst: 15,
                                goalDifference: 4
                            },
                            {
                                position: 6,
                                team: {
                                    id: 57,
                                    name: 'Arsenal FC',
                                    crest: 'https://crests.football-data.org/57.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 5,
                                draw: 2,
                                lost: 3,
                                points: 17,
                                goalsFor: 12,
                                goalsAgainst: 13,
                                goalDifference: -1
                            },
                            {
                                position: 7,
                                team: {
                                    id: 76,
                                    name: 'Wolverhampton Wanderers FC',
                                    crest: 'https://crests.football-data.org/76.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 5,
                                draw: 1,
                                lost: 4,
                                points: 16,
                                goalsFor: 11,
                                goalsAgainst: 10,
                                goalDifference: 1
                            },
                            {
                                position: 8,
                                team: {
                                    id: 397,
                                    name: 'Brighton & Hove Albion FC',
                                    crest: 'https://crests.football-data.org/397.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 4,
                                draw: 4,
                                lost: 2,
                                points: 16,
                                goalsFor: 11,
                                goalsAgainst: 11,
                                goalDifference: 0
                            },
                            {
                                position: 9,
                                team: {
                                    id: 73,
                                    name: 'Tottenham Hotspur FC',
                                    crest: 'https://crests.football-data.org/73.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 5,
                                draw: 0,
                                lost: 5,
                                points: 15,
                                goalsFor: 9,
                                goalsAgainst: 16,
                                goalDifference: -7
                            },
                            {
                                position: 10,
                                team: {
                                    id: 62,
                                    name: 'Everton FC',
                                    crest: 'https://crests.football-data.org/62.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 4,
                                draw: 2,
                                lost: 4,
                                points: 14,
                                goalsFor: 16,
                                goalsAgainst: 16,
                                goalDifference: 0
                            },
                            {
                                position: 11,
                                team: {
                                    id: 338,
                                    name: 'Leicester City FC',
                                    crest: 'https://crests.football-data.org/338.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 4,
                                draw: 2,
                                lost: 4,
                                points: 14,
                                goalsFor: 15,
                                goalsAgainst: 17,
                                goalDifference: -2
                            },
                            {
                                position: 12,
                                team: {
                                    id: 340,
                                    name: 'Southampton FC',
                                    crest: 'https://crests.football-data.org/340.svg'
                                },
                                playedGames: 11,
                                form: null,
                                won: 3,
                                draw: 5,
                                lost: 3,
                                points: 14,
                                goalsFor: 10,
                                goalsAgainst: 12,
                                goalDifference: -2
                            },
                            {
                                position: 13,
                                team: {
                                    id: 402,
                                    name: 'Brentford FC',
                                    crest: 'https://crests.football-data.org/402.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 3,
                                draw: 3,
                                lost: 4,
                                points: 12,
                                goalsFor: 12,
                                goalsAgainst: 12,
                                goalDifference: 0
                            },
                            {
                                position: 14,
                                team: {
                                    id: 354,
                                    name: 'Crystal Palace FC',
                                    crest: 'https://crests.football-data.org/354.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 2,
                                draw: 6,
                                lost: 2,
                                points: 12,
                                goalsFor: 13,
                                goalsAgainst: 14,
                                goalDifference: -1
                            },
                            {
                                position: 15,
                                team: {
                                    id: 58,
                                    name: 'Aston Villa FC',
                                    crest: 'https://crests.football-data.org/58.svg'
                                },
                                playedGames: 11,
                                form: null,
                                won: 3,
                                draw: 1,
                                lost: 7,
                                points: 10,
                                goalsFor: 14,
                                goalsAgainst: 20,
                                goalDifference: -6
                            },
                            {
                                position: 16,
                                team: {
                                    id: 346,
                                    name: 'Watford FC',
                                    crest: 'https://crests.football-data.org/346.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 3,
                                draw: 1,
                                lost: 6,
                                points: 10,
                                goalsFor: 12,
                                goalsAgainst: 18,
                                goalDifference: -6
                            },
                            {
                                position: 17,
                                team: {
                                    id: 341,
                                    name: 'Leeds United FC',
                                    crest: 'https://crests.football-data.org/341.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 2,
                                draw: 4,
                                lost: 4,
                                points: 10,
                                goalsFor: 10,
                                goalsAgainst: 17,
                                goalDifference: -7
                            },
                            {
                                position: 18,
                                team: {
                                    id: 328,
                                    name: 'Burnley FC',
                                    crest: 'https://crests.football-data.org/328.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 1,
                                draw: 4,
                                lost: 5,
                                points: 7,
                                goalsFor: 10,
                                goalsAgainst: 16,
                                goalDifference: -6
                            },
                            {
                                position: 19,
                                team: {
                                    id: 67,
                                    name: 'Newcastle United FC',
                                    crest: 'https://crests.football-data.org/67.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 0,
                                draw: 4,
                                lost: 6,
                                points: 4,
                                goalsFor: 11,
                                goalsAgainst: 23,
                                goalDifference: -12
                            },
                            {
                                position: 20,
                                team: {
                                    id: 68,
                                    name: 'Norwich City FC',
                                    crest: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Norwich_City.svg'
                                },
                                playedGames: 10,
                                form: null,
                                won: 0,
                                draw: 2,
                                lost: 8,
                                points: 2,
                                goalsFor: 3,
                                goalsAgainst: 25,
                                goalDifference: -22
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
                                    "crest": "https://crests.football-data.org/64.svg"
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
                                    "crest": "https://crests.football-data.org/354.svg"
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
                                    "crest": "https://crests.football-data.org/76.svg"
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
                                    "crest": "https://crests.football-data.org/58.svg"
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
                                    "crest": "https://crests.football-data.org/65.svg"
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
                                    "crest": "https://crests.football-data.org/67.svg"
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
                                    "crest": "https://crests.football-data.org/57.svg"
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
                                    "crest": "https://crests.football-data.org/61.svg"
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
                                    "crest": "https://crests.football-data.org/62.svg"
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
                                    "crest": "https://crests.football-data.org/66.svg"
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
                                    "crest": "https://crests.football-data.org/338.svg"
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
                                    "crest": "https://crests.football-data.org/328.svg"
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
                                    "crest": "https://crests.football-data.org/341.svg"
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
                                    "crest": "https://crests.football-data.org/340.svg"
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
                                    "crest": "https://crests.football-data.org/73.svg"
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
                                    "crest": "https://crests.football-data.org/397.svg"
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
                                    "crest": "https://crests.football-data.org/356.svg"
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
                                    "crest": "https://crests.football-data.org/563.svg"
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
                                    "crest": "https://crests.football-data.org/63.svg"
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
                                    "crest": "https://crests.football-data.org/74.svg"
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
                                    "crest": "https://crests.football-data.org/57.svg"
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
                                    "crest": "https://crests.football-data.org/338.svg"
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
                                    "crest": "https://crests.football-data.org/61.svg"
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
                                    "crest": "https://crests.football-data.org/76.svg"
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
                                    "crest": "https://crests.football-data.org/67.svg"
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
                                    "crest": "https://crests.football-data.org/62.svg"
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
                                    "crest": "https://crests.football-data.org/63.svg"
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
                                    "crest": "https://crests.football-data.org/58.svg"
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
                                    "crest": "https://crests.football-data.org/64.svg"
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
                                    "crest": "https://crests.football-data.org/65.svg"
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
                                    "crest": "https://crests.football-data.org/73.svg"
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
                                    "crest": "https://crests.football-data.org/74.svg"
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
                                    "crest": "https://crests.football-data.org/66.svg"
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
                                    "crest": "https://crests.football-data.org/356.svg"
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
                                    "crest": "https://crests.football-data.org/328.svg"
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
                                    "crest": "https://crests.football-data.org/563.svg"
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
                                    "crest": "https://crests.football-data.org/354.svg"
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
                                    "crest": "https://crests.football-data.org/397.svg"
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
                                    "crest": "https://crests.football-data.org/341.svg"
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
                                    "crest": "https://crests.football-data.org/340.svg"
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
            .get('https://api.football-data.org/v4/competitions/PL/standings', body)
            .catch((err) => {
                console.error(err);
                return {}
            });
    }

    console.log(footballdata.data.standings.filter(item => item.type = 'TOTAL')[0].table[0]);

    return footballdata.data.standings.filter(item => item.type = 'TOTAL')[0].table.sort((a,b) => a.position - b.position);
};