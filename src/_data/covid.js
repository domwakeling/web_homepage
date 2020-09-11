const axios = require('axios');

module.exports = async function () {
    // generate string for yesterday's date
    let yday = new Date()
    yday.setDate(yday.getDate() - 1)
    const dateString = `${yday.getFullYear()}-${("0" + (yday.getMonth() + 1)).slice(-2)}-${("0" + yday.getDate()).slice(-2)}`

    // get the raw data (will be in coviddata.data.data)
    let coviddata = await axios
        .get(`https://covid-api.com/api/reports?date=${dateString}`)
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

    let returnData = Object.keys(filteredList).sort().map(country => ({
        region: {
            name: country
        },
        confirmed_diff: filteredList[country].cases,
        deaths_diff: filteredList[country].deaths,
    }));
    
    return returnData;
};