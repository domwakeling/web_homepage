const EleventyFetch = require("@11ty/eleventy-fetch"); 
require('dotenv').config();

module.exports = async function () {

    try {

        const data = await EleventyFetch('https://mastodon.muage.org/api/v1/accounts/8169/statuses', {
            duration: '3h',
            type: "json"
        });

        const toots = data
            .filter(item => item.visibility == 'public' && item.account.id == '8169')
            .filter((_, idx) => idx < 7)
            .map(item => {
                const tmp = {}
                tmp.id = item.id;
                tmp.created_at = item.created_at;
                tmp.content = item.content;
                tmp.text = item.content.replace(/<\/*\w+>/g, "");
                tmp.media = item.media_attachments.length > 0 ? item.media_attachments[0].url : '';
                return tmp
            });

        return {
            user_name: data[0].account.display_name,
            user_img: data[0].account.avatar,
            toots
        };

    } catch {
        return [];
    }
};
