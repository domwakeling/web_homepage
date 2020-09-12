const axios = require('axios');
require('dotenv').config()

module.exports = async function () {

    // in development, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return {
        "response": "success",
        "id": "319",
        "name": "Hawkwoman III",
        "powerstats": {
            "intelligence": "null",
            "strength": "92",
            "speed": "null",
            "durability": "null",
            "power": "null",
            "combat": "null"
        },
        "biography": {
            "full-name": "Shayera Thal",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "place-of-birth": "-",
            "first-appearance": "-",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Female",
            "race": "null",
            "height": [
                "5'7",
                "170 cm"
            ],
            "weight": [
                "145 lb",
                "65 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Red"
        },
        "work": {
            "occupation": "Police Officer",
            "base": "Detroit; Thanagar"
        },
        "connections": {
            "group-affiliation": "-",
            "relatives": "-"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1130.jpg"
        }
    }

    // generate random number
    const maxnum = 731;
    const id = Math.floor( Math.random() * maxnum) + 1;
    
    const key = process.env.SUPERHERO_KEY;
    
    let superherodata = await axios
        .get(`https://superheroapi.com/api/${key}/${id}`)
        .catch((err) => {
            console.error(err);
            return {}
        });
        
    return superherodata.data;
};