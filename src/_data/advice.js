const EleventyFetch = require("@11ty/eleventy-fetch");
// import EleventyFetch from '@11ty/eleventy-fetch';

module.exports = async function () {
// export default async function () {

    const dummy_data = {
        "slip": {
            "id": 99,
            "advice": "Learn from your mistakes."
        }
    }

    try {

        const response = await EleventyFetch('https://api.adviceslip.com/advice', {
            duration: "3h",
            type: "json"
        });
        
        return response.slip;

    } catch (error) {
        console.log("Error when fetching from Advice Slip:", error.message);
        return dummy_data.slip;
    }
}