const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {

    try {
        let found = false;
        let newCat = null;
        
        while (!found) {
            let data = await EleventyFetch('https://api.thecatapi.com/v1/images/search', {
                duration: "3h",
                type: "json"
            });
            newCat = data[0];
            
            if (newCat && ( (newCat.height * 1.2) < newCat.width)) found = true;
        }
        
        return newCat;

    } catch {
        return null;
    }
}
