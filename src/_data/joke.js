const axios = require('axios');
require('dotenv').config();

module.exports = async function () {

    const dummydata = {
        "id": 26,
        "type": "programming",
        "setup": "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
        "punchline": "the rest of them will write Perl"
    }

    // in development, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return dummydata;

    let jokedata = await axios
        .get('https://joke.deno.dev/type/programming')
        .catch((err) => {
            console.error(err);
            return {}
        });
    
    console.log(jokedata)

    if (jokedata.data) {
        return jokedata.data[Math.floor(Math.random() * jokedata.data.length)];
    } else {
        return dummydata;
    }
};