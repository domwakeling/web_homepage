const EleventyFetch = require("@11ty/eleventy-fetch"); 
require('dotenv').config()

module.exports = async function () {

    try {
        let url = "https://api.openweathermap.org/data/2.5/onecall";
        url = url + `?lat=${process.env.GEO_LAT}&lon=${process.env.GEO_LON}`;
        url = url + `&exclude=current,minutely,hourly&units=metric&appid=${process.env.OPEN_WEATHER_KEY}`;

        const weather_data = await EleventyFetch(url, {
            duration: "3h",
            type: "json"
        });

        return weather_data;

    } catch {
        return {}
    }
}
