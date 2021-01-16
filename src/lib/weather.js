const axios = require('axios');
require('dotenv').config()

module.exports = async function (
    dummy = { daily: [] },
    override = false
) {
    // in development and not overriding, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT' && !override) return dummy;

    let url = "https://api.openweathermap.org/data/2.5/onecall";
    url = url + `?lat=${process.env.GEO_LAT}&lon=${process.env.GEO_LON}`;
    url = url + `&exclude=current,minutely,hourly&units=metric&appid=${process.env.OPEN_WEATHER_KEY}`;

    let weatherdata = await axios
        .get(url)
        .catch((err) => {
            console.error(err);
            return {}
        });

    return weatherdata.data;
}