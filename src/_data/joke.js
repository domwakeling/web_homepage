const EleventyFetch = require("@11ty/eleventy-fetch"); 
require('dotenv').config();

module.exports = async function () {

    const dummy_data = {
        "id": 26,
        "type": "programming",
        "setup": "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
        "delivery": "the rest of them will write Perl"
    }

    try {
        const joke_data = await EleventyFetch('https://v2.jokeapi.dev/joke/Programming?type=twopart', {
            duration: "3h",
            type: "json"
        });
        
        return joke_data;
        
    } catch {
        return dummy_data;
    }
};