const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {

    try {
        const spaceData = await EleventyFetch('http://api.open-notify.org/astros.json', {
            duration: "3h",
            type: "json"
        });
        
        const mappedData = spaceData.people.reduce((cum, item) => {
            if (item.craft in cum) {
                cum[item.craft].push(item.name)
            } else {
                cum[item.craft] = [item.name]
            }
            return cum
        }, {});
        
        const outputData = [];
        for (craft of Object.keys(mappedData)) {
            outputData.push({
                craft,
                people: mappedData[craft].join(", "),
                peopleCount: mappedData[craft].length
            });
        }
        
        return outputData;

    } catch {
        return [];
    }
};