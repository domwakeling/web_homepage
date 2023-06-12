const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config()

module.exports = async function () {

    try {
        const d = new Date();
        const url = `http://history.muffinlabs.com/date/${d.getMonth() + 1}/${d.getDate()}`;
        
        const data = await EleventyFetch(url, {
            duration: '3h',
            type: 'json'
        });
        
        const result = {}
        result.date = data.date;
        // today's event
        if (data.data.Events.length > 0) {
            result.event = data.data.Events[Math.floor(Math.random() * data.data.Events.length)]
        } else {
            result.event = null
        }
        // today's birth
        if (data.data.Births.length > 0) {
            result.birth = data.data.Births[Math.floor(Math.random() * data.data.Births.length)]
        } else {
            result.birth = null
        }
        // today's death
        if (data.data.Deaths.length > 0) {
            result.death = data.data.Deaths[Math.floor(Math.random() * data.data.Deaths.length)]
        } else {
            result.death = null
        }
        return result;
        
    } catch {
        return {}
    }
};
