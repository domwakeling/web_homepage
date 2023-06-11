const EleventyFetch = require("@11ty/eleventy-fetch"); 
require('dotenv').config();

module.exports = async function () {

    try {
        const key = process.env.FOOTBALL_KEY || "dummyKeyGoingToFail";
        let body = {
            headers: {
                "X-Auth-Token": key,
                "content-type": "application/json"
            }
        };
        
        const football_data = await EleventyFetch('https://api.football-data.org/v4/competitions/PL/standings', {
            fetchOptions: {
                headers: {
                    'X-Auth-Token': key
                }
            },
            duration: "3h",
            type: "json"
        });

        return football_data
                .standings
                .filter(item => item.type = 'TOTAL')[0]
                .table
                .sort((a,b) => a.position - b.position);
    } catch (error) {
        console.error(error.message);
        return {}
    }
};