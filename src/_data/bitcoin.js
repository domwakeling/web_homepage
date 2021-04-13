const axios = require('axios');

module.exports = async function () {
    
    const bitData = await axios.
        get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.data)
        .then(data => {
            const temp = {};
            temp.time = data.time;
            temp.bpi = [];
            for (let item of Object.keys(data.bpi)) {
                const tempRate = data.bpi[item];
                tempRate.rate = tempRate.rate.match(/^[\d,]+\.\d{2}/)
                temp.bpi.push(tempRate)
            }
            return temp;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
    return bitData;
}
