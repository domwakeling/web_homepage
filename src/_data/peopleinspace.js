const axios = require('axios');

module.exports = async function () {

    let spacedata = await axios
        .get('http://api.open-notify.org/astros.json')
        .catch((err) => {
            console.error(err);
            return []
        });
    
    const mappedData = spacedata.data.people.reduce((cum, item) => {
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
        })
    }

    return outputData;
};