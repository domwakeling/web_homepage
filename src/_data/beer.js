const axios = require('axios');
require('dotenv').config();

module.exports = async function () {

    // in development, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return {
        "id": 132,
        "name": "5am Saint",
        "tagline": "Bittersweet Chaos. Malty. Fruity. Bite.",
        "first_brewed": "06/2009",
        "description": "Out of order and stability comes the rush of the pack. Berry and caramel riding alongside marmalade and chocolate. Spice and toast jostle with lychee and biscuit. The needle flicks to all points of the compass. It drives you towards the horizon, towards the vanishing point. And it keeps going...",
        "image_url": "https://images.punkapi.com/v2/132.png",
        "abv": 5,
        "ibu": 30,
        "target_fg": 1012,
        "target_og": 1050,
        "ebc": 60,
        "srm": 30.5,
        "ph": 4.4,
        "attenuation_level": 76,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 62,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 2.56,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Cheddar cheese melt on crisp rye toast",
            "Moroccan chicken tangine",
            "Cheesecake topped with kiwi"
        ],
        "brewers_tips": "Go easy on the crystal and dark crystal malt. Too much will skew the flavour profile away from lychees and citrus towards dried fruit.",
        "contributed_by": "Sam Mason <samjbmason>"
    }

    let beerdata = await axios
        .get('https://api.punkapi.com/v2/beers/random')
        .catch((err) => {
            console.error(err);
            return {}
        });

    return beerdata.data[0];
};