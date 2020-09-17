const Twitter = require('twitter');
const axios = require('axios');
require('dotenv').config()

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = async function (
    params,
    dummy={tweets: [], imgurl: "nourl", screen_name: "NoName"},
    override = false
) {
    // in development and not overriding, send back a static object
    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT' && !override) return dummy;

    const tweets = await client
        .get('statuses/user_timeline', params)
        .catch((err) => {
            console.error(err);
            return {};
        });

    const screen_name = tweets[0].user.screen_name;
    const imgurl = await axios
        .get(`https://unavatar.now.sh/twitter/${screen_name}?json`)
        .catch((err) => {
            console.error(err);
            return {
                tweets,
                screen_name
            };
        })

    return {
        tweets,
        imgurl: imgurl.data.url,
        screen_name
    };
}