const axios = require('axios');
require('dotenv').config()

module.exports = async function () {

    // in development, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return {
        dateString: '11 September',
        data: [
            { country: 'France', cases: 9647, deaths: 82 },
            { country: 'US', cases: 47192, deaths: 1213 },
            { country: 'United Kingdom', cases: 3544, deaths: 6 }
        ]
    };

    // generate query-string for yesterday's date
    let yday = new Date()
    yday.setDate(yday.getDate() - 1)
    const dateNum = `${yday.getFullYear()}-${("0" + (yday.getMonth() + 1)).slice(-2)}-${("0" + yday.getDate()).slice(-2)}`

    // generate text string for yesterday's date
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const dateString = `${yday.getDate()} ${months[yday.getMonth()]}`

    // get the raw data (will be in coviddata.data.data)
    let coviddata = await axios
        .get(`https://covid-api.com/api/reports?date=${dateNum}`)
        .catch((err) => {
            console.error(err);
            return [];
        });
    
    // filter to the countries we want
    const countriesWeWant = ["US", "United Kingdom", "France"]
    coviddata = coviddata.data.data.filter(i => countriesWeWant.indexOf(i.region.name) >= 0);

    // generate return data
    let filteredList = {}
    for (country of countriesWeWant) {
        filteredList[country] = {cases: 0, deaths: 0}
    }
    for (region of coviddata) {
        filteredList[region.region.name].cases += region.confirmed_diff;
        filteredList[region.region.name].deaths += region.deaths_diff;
    }

    let returnData = {
        dateString,
        data: Object.keys(filteredList).sort().map(country => ({
            country,
            cases: filteredList[country].cases,
            deaths: filteredList[country].deaths,
        }))
    };
    
    return returnData;
};