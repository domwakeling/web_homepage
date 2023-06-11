const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config()

module.exports = async function () {

    const generate_data = (data) => {
        let returnData = [
            {
                flag: {
                    src: "https://flagcdn.com/64x48/gb.png",
                    srcset: "https://flagcdn.com/128x96/gb.png 2x, https://flagcdn.com/192x144/gb.png 3x"
                },
                alt: 'UK flag',
                symbol: '&pound;',
                rate: '1.00'
            }, {
                flag: {
                    src: "https://flagcdn.com/64x48/eu.png",
                    srcset: "https://flagcdn.com/128x96/eu.png 2x, https://flagcdn.com/192x144/eu.png 3x"
                },
                alt: 'European flag',
                symbol: '&euro;',
                rate: data.EUR && data.GBP ? (data.EUR / data.GBP).toFixed(2) : "N/A"
            }, {
                flag: {
                    src: "https://flagcdn.com/64x48/us.png",
                    srcset: "https://flagcdn.com/128x96/us.png 2x, https://flagcdn.com/192x144/us.png 3x"
                },
                alt: 'US flag',
                symbol: '$',
                rate: data.USD && data.GBP ? (data.USD / data.GBP).toFixed(2) : "N/A"
            }
        ];
        return returnData;
    }

    const dummy_data = {
        rates: { GBP: 0.855623, EUR: 1, USD: 1.07509 }
    }

    // get the current data, generate info; fall back to dummy
    const key = process.env.EXCHANGE_RATE_KEY;
    try {
        const rate_data = await EleventyFetch(`http://api.exchangeratesapi.io/v1/latest?symbols=GBP,EUR,USD&access_key=${key}`, {
            duration: "3h",
            type: "json"
        });

        return generate_data(rate_data.rates);

    } catch {
        return generate_data(dummy_data.rates);
    }
};