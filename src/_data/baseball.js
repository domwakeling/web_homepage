const axios = require('axios');
require('dotenv').config();

const dummydata = {
    "standings_date": "2021-04-24T05:02:00Z",
    "standing": [
        {
            "rank": 1,
            "won": 11,
            "lost": 7,
            "streak": "W2",
            "ordinal_rank": "1st",
            "first_name": "Kansas City",
            "last_name": "Royals",
            "team_id": "kansas-city-royals",
            "games_back": 0,
            "last_five": "3-2",
            "conference": "AL",
            "division": "C",
        },
        {
            "rank": 2,
            "won": 10,
            "lost": 9,
            "streak": "W2",
            "ordinal_rank": "2nd",
            "first_name": "Chicago",
            "last_name": "White Sox",
            "team_id": "chicago-white-sox",
            "games_back": 1.5,
            "last_five": "4-1",
            "conference": "AL",
            "division": "C",
        },
        {
            "rank": 3,
            "won": 8,
            "lost": 10,
            "streak": "L3",
            "ordinal_rank": "3rd",
            "first_name": "Cleveland",
            "last_name": "Indians",
            "team_id": "cleveland-guardians",
            "games_back": 3,
            "last_five": "1-4",
            "conference": "AL",
            "division": "C",
        },
        {
            "rank": 4,
            "won": 7,
            "lost": 11,
            "streak": "W1",
            "ordinal_rank": "4th",
            "first_name": "Minnesota",
            "last_name": "Twins",
            "team_id": "minnesota-twins",
            "games_back": 4,
            "last_five": "1-4",
            "conference": "AL",
            "division": "C",
        },
        {
            "rank": 5,
            "won": 7,
            "lost": 13,
            "streak": "L2",
            "ordinal_rank": "5th",
            "first_name": "Detroit",
            "last_name": "Tigers",
            "team_id": "detroit-tigers",
            "games_back": 5,
            "last_five": "1-4",
            "conference": "AL",
            "division": "C",
        },
        {
            "rank": 1,
            "won": 13,
            "lost": 8,
            "streak": "W1",
            "ordinal_rank": "1st",
            "first_name": "Boston",
            "last_name": "Red Sox",
            "team_id": "boston-red-sox",
            "games_back": 0,
            "last_five": "3-2",
            "conference": "AL",
            "division": "E",
        },
        {
            "rank": 2,
            "won": 10,
            "lost": 10,
            "streak": "L2",
            "ordinal_rank": "2nd",
            "first_name": "Tampa Bay",
            "last_name": "Rays",
            "team_id": "tampa-bay-rays",
            "games_back": 2.5,
            "last_five": "3-2",
            "conference": "AL",
            "division": "E",
        },
        {
            "rank": 3,
            "won": 9,
            "lost": 10,
            "streak": "W2",
            "ordinal_rank": "3rd",
            "first_name": "Toronto",
            "last_name": "Blue Jays",
            "team_id": "toronto-blue-jays",
            "games_back": 3,
            "last_five": "2-3",
            "conference": "AL",
            "division": "E",
        },
        {
            "rank": 4,
            "won": 8,
            "lost": 11,
            "streak": "W2",
            "ordinal_rank": "4th",
            "first_name": "New York",
            "last_name": "Yankees",
            "team_id": "new-york-yankees",
            "games_back": 4,
            "last_five": "3-2",
            "conference": "AL",
            "division": "E",
        },
        {
            "rank": 4,
            "won": 8,
            "lost": 11,
            "streak": "L2",
            "ordinal_rank": "4th",
            "first_name": "Baltimore",
            "last_name": "Orioles",
            "team_id": "baltimore-orioles",
            "games_back": 4,
            "last_five": "2-3",
            "conference": "AL",
            "division": "E",
        },
        {
            "rank": 1,
            "won": 13,
            "lost": 7,
            "streak": "W12",
            "ordinal_rank": "1st",
            "first_name": "Oakland",
            "last_name": "Athletics",
            "team_id": "oakland-athletics",
            "games_back": 0,
            "last_five": "5-0",
            "conference": "AL",
            "division": "W",
        },
        {
            "rank": 2,
            "won": 12,
            "lost": 8,
            "streak": "L1",
            "ordinal_rank": "2nd",
            "first_name": "Seattle",
            "last_name": "Mariners",
            "team_id": "seattle-mariners",
            "games_back": 1,
            "last_five": "3-2",
            "conference": "AL",
            "division": "W",
        },
        {
            "rank": 3,
            "won": 9,
            "lost": 9,
            "streak": "L3",
            "ordinal_rank": "3rd",
            "first_name": "Los Angeles",
            "last_name": "Angels",
            "team_id": "los-angeles-angels",
            "games_back": 3,
            "last_five": "1-4",
            "conference": "AL",
            "division": "W",
        },
        {
            "rank": 4,
            "won": 9,
            "lost": 10,
            "streak": "W2",
            "ordinal_rank": "4th",
            "first_name": "Houston",
            "last_name": "Astros",
            "team_id": "houston-astros",
            "games_back": 3.5,
            "last_five": "2-3",
            "conference": "AL",
            "division": "W",
        },
        {
            "rank": 5,
            "won": 9,
            "lost": 11,
            "streak": "L1",
            "ordinal_rank": "5th",
            "first_name": "Texas",
            "last_name": "Rangers",
            "team_id": "texas-rangers",
            "games_back": 4,
            "last_five": "3-2",
            "conference": "AL",
            "division": "W",
        },
        {
            "rank": 1,
            "won": 11,
            "lost": 8,
            "streak": "L1",
            "ordinal_rank": "1st",
            "first_name": "Milwaukee",
            "last_name": "Brewers",
            "team_id": "milwaukee-brewers",
            "games_back": 0,
            "last_five": "3-2",
            "conference": "NL",
            "division": "C",
        },
        {
            "rank": 2,
            "won": 10,
            "lost": 9,
            "streak": "W4",
            "ordinal_rank": "2nd",
            "first_name": "Chicago",
            "last_name": "Cubs",
            "team_id": "chicago-cubs",
            "games_back": 1,
            "last_five": "4-1",
            "conference": "NL",
            "division": "C",
        },
        {
            "rank": 3,
            "won": 9,
            "lost": 10,
            "streak": "W1",
            "ordinal_rank": "3rd",
            "first_name": "St. Louis",
            "last_name": "Cardinals",
            "team_id": "st-louis-cardinals",
            "games_back": 2,
            "last_five": "2-3",
            "conference": "NL",
            "division": "C",
        },
        {
            "rank": 3,
            "won": 9,
            "lost": 10,
            "streak": "L5",
            "ordinal_rank": "3rd",
            "first_name": "Cincinnati",
            "last_name": "Reds",
            "team_id": "cincinnati-reds",
            "games_back": 2,
            "last_five": "0-5",
            "conference": "NL",
            "division": "C",
        },
        {
            "rank": 5,
            "won": 9,
            "lost": 11,
            "streak": "L1",
            "ordinal_rank": "5th",
            "first_name": "Pittsburgh",
            "last_name": "Pirates",
            "team_id": "pittsburgh-pirates",
            "games_back": 2.5,
            "last_five": "3-2",
            "conference": "NL",
            "division": "C",
        },
        {
            "rank": 1,
            "won": 8,
            "lost": 7,
            "streak": "W1",
            "ordinal_rank": "1st",
            "first_name": "New York",
            "last_name": "Mets",
            "team_id": "new-york-mets",
            "games_back": 0,
            "last_five": "2-3",
            "conference": "NL",
            "division": "E",
        },
        {
            "rank": 2,
            "won": 9,
            "lost": 10,
            "streak": "L1",
            "ordinal_rank": "2nd",
            "first_name": "Philadelphia",
            "last_name": "Phillies",
            "team_id": "philadelphia-phillies",
            "games_back": 1,
            "last_five": "2-3",
            "conference": "NL",
            "division": "E",
        },
        {
            "rank": 2,
            "won": 9,
            "lost": 10,
            "streak": "W2",
            "ordinal_rank": "2nd",
            "first_name": "Atlanta",
            "last_name": "Braves",
            "team_id": "atlanta-braves",
            "games_back": 1,
            "last_five": "3-2",
            "conference": "NL",
            "division": "E",
        },
        {
            "rank": 4,
            "won": 8,
            "lost": 11,
            "streak": "L2",
            "ordinal_rank": "4th",
            "first_name": "Miami",
            "last_name": "Marlins",
            "team_id": "miami-marlins",
            "games_back": 2,
            "last_five": "1-4",
            "conference": "NL",
            "division": "E",
        },
        {
            "rank": 5,
            "won": 7,
            "lost": 10,
            "streak": "L1",
            "ordinal_rank": "5th",
            "first_name": "Washington",
            "last_name": "Nationals",
            "team_id": "washington-nationals",
            "games_back": 2,
            "last_five": "2-3",
            "conference": "NL",
            "division": "E",
        },
        {
            "rank": 1,
            "won": 14,
            "lost": 6,
            "streak": "L2",
            "ordinal_rank": "1st",
            "first_name": "Los Angeles",
            "last_name": "Dodgers",
            "team_id": "los-angeles-dodgers",
            "games_back": 0,
            "last_five": "1-4",
            "conference": "NL",
            "division": "W",
        },
        {
            "rank": 2,
            "won": 13,
            "lost": 7,
            "streak": "W2",
            "ordinal_rank": "2nd",
            "first_name": "San Francisco",
            "last_name": "Giants",
            "team_id": "san-francisco-giants",
            "games_back": 1,
            "last_five": "4-1",
            "conference": "NL",
            "division": "W",
        },
        {
            "rank": 3,
            "won": 12,
            "lost": 10,
            "streak": "W2",
            "ordinal_rank": "3rd",
            "first_name": "San Diego",
            "last_name": "Padres",
            "team_id": "san-diego-padres",
            "games_back": 3,
            "last_five": "2-3",
            "conference": "NL",
            "division": "W",
        },
        {
            "rank": 4,
            "won": 9,
            "lost": 11,
            "streak": "L1",
            "ordinal_rank": "4th",
            "first_name": "Arizona",
            "last_name": "Diamondbacks",
            "team_id": "arizona-diamondbacks",
            "games_back": 5,
            "last_five": "4-1",
            "conference": "NL",
            "division": "W",
        },
        {
            "rank": 5,
            "won": 7,
            "lost": 12,
            "streak": "W3",
            "ordinal_rank": "5th",
            "first_name": "Colorado",
            "last_name": "Rockies",
            "team_id": "colorado-rockies",
            "games_back": 6.5,
            "last_five": "4-1",
            "conference": "NL",
            "division": "W",
        }
    ]
}

const clubs = {
    "kansas-city-royals": {
        url: '/img/baseball/kc.png',
        short: "KC"
    },
    "chicago-white-sox": {
        url: '/img/baseball/cws.png',
        short: "CWS"
    },
    "cleveland-guardians": {
        url: '/img/baseball/cle.png',
        short: "CLE"
    },
    "minnesota-twins": {
        url: '/img/baseball/min.png',
        short: "MIN"
    },
    "detroit-tigers": {
        url: '/img/baseball/det.png',
        short: "DET"
    },
    "boston-red-sox": {
        url: '/img/baseball/bos.png',
        short: "BOS"
    },
    "tampa-bay-rays": {
        url: '/img/baseball/tb.png',
        short: "TB"
    },
    "toronto-blue-jays": {
        url: '/img/baseball/tor.png',
        short: "TOR"
    },
    "new-york-yankees": {
        url: '/img/baseball/nyy.png',
        short: "NYY"
    },
    "baltimore-orioles": {
        url: '/img/baseball/bal.png',
        short: "BAL"
    },
    "oakland-athletics": {
        url: '/img/baseball/oak.png',
        short: "OAK"
    },
    "seattle-mariners": {
        url: '/img/baseball/sea.png',
        short: "SEA"
    },
    "los-angeles-angels": {
        url: '/img/baseball/laa.png',
        short: "LAA"
    },
    "houston-astros": {
        url: '/img/baseball/hou.png',
        short: "HOU"
    },
    "texas-rangers": {
        url: '/img/baseball/tex.png',
        short: "TEX"
    },
    "milwaukee-brewers": {
        url: '/img/baseball/mil.png',
        short: "MIL"
    },
    "chicago-cubs": {
        url: '/img/baseball/chc.png',
        short: "CHC"
    },
    "st-louis-cardinals": {
        url: '/img/baseball/stl.png',
        short: "STL"
    },
    "cincinnati-reds": {
        url: '/img/baseball/cin.png',
        short: "CIN"
    },
    "pittsburgh-pirates": {
        url: '/img/baseball/pit.png',
        short: "PIT"
    },
    "new-york-mets": {
        url: '/img/baseball/nym.png',
        short: "NYM"
    },
    "philadelphia-phillies": {
        url: '/img/baseball/php.png',
        short: "PHP"
    },
    "atlanta-braves": {
        url: '/img/baseball/atl.png',
        short: "ATL"
    },
    "miami-marlins": {
        url: '/img/baseball/mia.png',
        short: "MIA"
    },
    "washington-nationals": {
        url: '/img/baseball/wsh.png',
        short: "WSH"
    },
    "los-angeles-dodgers": {
        url: '/img/baseball/lad.png',
        short: "LAD"
    },
    "san-francisco-giants": {
        url: '/img/baseball/sf.png',
        short: "SF"
    },
    "san-diego-padres": {
        url: '/img/baseball/sd.png',
        short: "SD"
    },
    "arizona-diamondbacks": {
        url: '/img/baseball/ari.png',
        short: "ARI"
    },
    "colorado-rockies": {
        url: '/img/baseball/col.png',
        short: "COL"
    },
}
module.exports = async function () {
    
    // TODO - look next year at the postseason information
    // https://erikberg.com/mlb/postseason.json
    
    let livedata = {};

    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        livedata = dummydata
    } else {
        const opts = {
            headers: {
                'User-Agent': `MyHomepage/1.0 (${process.env.CONTACT_EMAIL})` }
        }
        livedata = await axios
            .get('https://erikberg.com/mlb/standings.json', opts)
            .then(res => res.data)
            .catch((err) => {
                console.error(err.response.data);
                return {standing: []};
            });
    }

    const confVal = (conf) => conf == "AL" ? 0 : 100;
    const divVal = (div) => div == "E" ? 0 : (div == "C" ? 10 : 20);
    const percentVal = (item) => {
        if (item.won == 0) return ".000"
        if (item.lost == 0) return "1.00"
        return `.${Math.ceil(1000 * item.won / (item.won + item.lost))}`
    }

    const retdata = livedata.
        standing.
        map(item => ({
            team_id: item.team_id,
            won: item.won,
            lost: item.lost,
            streak: item.streak,
            rank: item.rank,
            gb: item.games_back,
            order: confVal(item.conference) + divVal(item.division) + item.rank,
            imgUrl: clubs[item.team_id].url,
            short: clubs[item.team_id].short,
            pct: percentVal(item)
        })).
        sort((a,b) => a.order - b.order);

    return retdata;
}