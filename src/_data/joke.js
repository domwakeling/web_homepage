const axios = require('axios');
require('dotenv').config();

module.exports = async function () {

    // in development, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return {
        "id": 26,
        "type": "programming",
        "setup": "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
        "punchline": "the rest of them will write Perl"
    }

    let jokedata = await axios
        .get('https://official-joke-api.appspot.com/jokes/programming/random')
        .catch((err) => {
            console.error(err);
            return {}
        });

    return jokedata.data[0];
};