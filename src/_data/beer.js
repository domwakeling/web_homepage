const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {

    const dummy_data = {
        "id": 6,
        "name": "Electric India",
        "tagline": "Vibrant Hoppy Saison.",
        "first_brewed": "05/2013",
        "description": "Re-brewed as a spring seasonal, this beer - which appeared originally as an Equity Punk shareholder creation - retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
        "image_url": "https://images.punkapi.com/v2/6.png",
        "food_pairing": [
            "Mussels with a garlic and herb sauce",
            "Crab melt sandwich",
            "Shortbread cookies"
        ],
        "brewers_tips": "Source some really good heather honey to get the right spicy esters in the beer.",
        "contributed_by": "Sam Mason <samjbmason>"
    }

    try {

        const beer_data = await EleventyFetch('https://api.punkapi.com/v2/beers/random', {
            duration: "3h",
            type: "json"
        });
        return beer_data[0];


    } catch {
        return dummy_data;

    }
};