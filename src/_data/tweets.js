const Twitter = require('twitter');
require('dotenv').config()
const fs = require('fs');
const axios = require('axios');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let params = {
    user_id: 364488011,
    count: 10,
    tweet_mode: "extended",
    exclude_replies: true,
    include_rts: false
}

module.exports = async function () {

    const download_image = async (url, image_path) =>
        axios({
            url,
            responseType: 'stream',
        })
        .then(response => new Promise((resolve, reject) => {
            response.data
                .pipe(fs.createWriteStream(image_path))
                .on('finish', () => resolve())
                .on('error', e => reject(e));
            }),
        )
        .catch(err => { console.log(err) });

    (async () => {
        await download_image('https://unavatar.now.sh/twitter/realtimewwii', './src/images/ww2.png')
    })();

    return client.get('statuses/user_timeline', params)
        .catch((err) => {
            console.error(err);
        });
}