const Twitter = require('twitter');
require('dotenv').config()

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let params = {
    user_id: 364488011,
    count: 20,
    tweet_mode: "extended",
    exclude_replies: true,
    include_rts: false
}

module.exports = async function () {
    return client.get('statuses/user_timeline', params)
        .catch((err) => {
            console.error(err);
        });
}