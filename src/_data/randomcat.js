// NOTE: because the cat feed may reject the image and search for another, it CANNOT use EleventyFetch
const axios = require('axios');

module.exports = async function () {

    let found = false;
    let newCat = null;

    while (!found) {
        newCat = await axios.
            get('https://api.thecatapi.com/v1/images/search')
            .then(res => res.data[0])
            .catch((err) => {
                console.log("Error when fetching Random Cat:", err.message)
                return null;
            });
        
        if (newCat && ( (newCat.height * 1.2) < newCat.width)) found = true;
    }
    
    return newCat;
}
