const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {

    try {

        const data = await EleventyFetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
            duration: "3h",
            type: "json"
        });
        
        const bitData = {};
        bitData.time = data.time;
        bitData.bpi = [];
        for (let item of Object.keys(data.bpi)) {

            const tempRate = data.bpi[item];
            tempRate.rate = tempRate.rate.match(/^[\d,]+\.\d{2}/)
            bitData.bpi.push(tempRate)
        }
        return bitData;

    } catch (error) {
        console.log("Error when fetching from CoinDesk:",  error.message);
        return {
            "time": {
                "updated": "Jun 11, 2023 23:03:00 UTC",
                "updatedISO": "2023-06-11T23:03:00+00:00",
                "updateduk": "Jun 12, 2023 at 00:03 BST"
            },
            "bpi": {
                "USD": {
                    "code": "USD",
                    "symbol": "&#36;",
                    "rate": "25,886.40",
                    "description": "United States Dollar",
                    "rate_float": 25886.4094
                },
                "GBP": {
                    "code": "GBP",
                    "symbol": "&pound;",
                    "rate": "21,630.47",
                    "description": "British Pound Sterling",
                    "rate_float": 21630.4766
                },
                "EUR": {
                    "code": "EUR",
                    "symbol": "&euro;",
                    "rate": "25,217.14",
                    "description": "Euro",
                    "rate_float": 25217.1422
                }
            }
        }
    }
}
