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
        return null;
    }
}
