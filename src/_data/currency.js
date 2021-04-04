const axios = require('axios');
require('dotenv').config()

module.exports = async function () {

    // in development, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return [{
        flag: 'https://www.countryflags.io/gb/flat/64.png',
        alt: 'UK flag',
        symbol: '&pound;',
        rate: '1.00'
    },
    {
        flag: 'https://www.countryflags.io/eu/flat/64.png',
        symbol: '&euro;',
        alt: 'European flag',
        rate: '1.12'
    },
    {
        flag: 'https://www.countryflags.io/us/flat/64.png',
        alt: 'US flag',
        symbol: '$',
        rate: '1.36'
    }];

    // get the current data
    const key = process.env.EXCHANGE_RATE_KEY;
    console.log(key)
    let ratedata = await axios
        .get(`http://api.exchangeratesapi.io/v1/latest?symbols=GBP,EUR,USD&access_key=${key}`)
        .then(res => res.data.rates)
        .catch((err) => {
            console.error(err);
            return {};
        });

    // generate return data
    let returnData = [{
        flag: 'https://www.countryflags.io/gb/flat/64.png',
        alt: 'UK flag',
        symbol: '&pound;',
        rate: '1.00'
    }, {
        flag: 'https://www.countryflags.io/eu/flat/64.png',
        alt: 'European flag',
        symbol: '&euro;',
        rate: ratedata.EUR && ratedata.GBP ? (ratedata.EUR / ratedata.GBP).toFixed(2) : "N/A"
    }, {
        flag: 'https://www.countryflags.io/us/flat/64.png',
        alt: 'US flag',
        symbol: '$',
        rate: ratedata.USD && ratedata.GBP ? (ratedata.USD / ratedata.GBP).toFixed(2) : "N/A"
    }]

    return returnData;
};