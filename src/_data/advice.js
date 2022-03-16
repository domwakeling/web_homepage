const axios = require('axios');

const dummydata = {
    "slip": {
        "id": 99,
        "advice": "Learn from your mistakes."
    }
}

module.exports = async function () {

    livedata = await axios
        .get('https://api.adviceslip.com/advice')
        .then(res => res.data)
        .catch((err) => {
            return dummydata;
        });
    
    return livedata.slip;
}