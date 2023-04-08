const axios = require('axios');
const { html } = require('js-beautify');
require('dotenv').config();

const DUMMY_DATA = {
    user_name: "WW2 Tweets",
    user_img: "https://mastodon.muage.org/system/accounts/avatars/000/008/169/original/d765bf4e42fe87d8.jpg",
    toots: [
        {
            id: '110160091788593430',
            created_at: '2023-04-07T23:20:03.707Z',
            content: '<p>5 Japanese warships &amp; 100 kamikaze planes have been destroyed in futile &quot;Ten-Go&quot; strike on the American vessels off Okinawa, without sinking a single US ship. Imperial Japanese Navy is effectively no more.</p>',
            text: '5 Japanese warships &amp; 100 kamikaze planes have been destroyed in futile &quot;Ten-Go&quot; strike on the American vessels off Okinawa, without sinking a single US ship. Imperial Japanese Navy is effectively no more.',
            media: 'https://mastodon.muage.org/system/media_attachments/files/110/160/091/786/387/368/original/6a5f7ae66a767fae.png'
        },
        {
            id: '110160091709799694',
            created_at: '2023-04-07T23:20:02.510Z',
            content: '<p>Fires reach Japanese battleship Yamato&#39;s ammo magazines. Explosion sends a mushroom cloud 20,000 ft into air, downing nearby US planes. 3000+ crew are dead.</p>',
            text: 'Fires reach Japanese battleship Yamato&#39;s ammo magazines. Explosion sends a mushroom cloud 20,000 ft into air, downing nearby US planes. 3000+ crew are dead.',
            media: 'https://mastodon.muage.org/system/media_attachments/files/110/160/091/707/520/487/original/ca074c0a616d16f8.png'
        },
        {
            id: '110159934431515767',
            created_at: '2023-04-07T22:40:02.634Z',
            content: '<p>Battleship Yamato is burning &amp; listing from US torpedoes. In desperate bid to stop ship from capsizing, captain floods starboard engine rooms, drowning 100s of crew.</p>',
            text: 'Battleship Yamato is burning &amp; listing from US torpedoes. In desperate bid to stop ship from capsizing, captain floods starboard engine rooms, drowning 100s of crew.',
            media: 'https://mastodon.muage.org/system/media_attachments/files/110/159/934/428/835/371/original/e59dbcd70ef10185.png'
        },
        {
            id: '110159855914859206',
            created_at: '2023-04-07T22:20:04.560Z',
            content: '<p>US warships east of Okinawa launch almost 400 planes to bomb &amp; torpedo Japanese Ten-Go ships, unopposed by enemy aircraft. Battleship Yamato &amp; her escorting Japanese warships suffering terrible damage; US planes circle beyond antiaircraft range, then dive to bomb.</p>',
            text: 'US warships east of Okinawa launch almost 400 planes to bomb &amp; torpedo Japanese Ten-Go ships, unopposed by enemy aircraft. Battleship Yamato &amp; her escorting Japanese warships suffering terrible damage; US planes circle beyond antiaircraft range, then dive to bomb.',
            media: 'https://mastodon.muage.org/system/media_attachments/files/110/159/855/827/410/609/original/5d63f23502ed6cb9.png'
        },
        {
            id: '110159855722478320',
            created_at: '2023-04-07T22:20:01.629Z',
            content: '<p>Told of Japanese kamikaze attacks, Emperor Hirohito asked: &quot;What are the Navy doing to assist in defending Okinawa? Have we no more ships?&quot; Partly from fear of embarrassing Emperor, 10 precious Japanese warships heading for Okinawa on suicidal mission into teeth of US air attacks</p>',
            text: 'Told of Japanese kamikaze attacks, Emperor Hirohito asked: &quot;What are the Navy doing to assist in defending Okinawa? Have we no more ships?&quot; Partly from fear of embarrassing Emperor, 10 precious Japanese warships heading for Okinawa on suicidal mission into teeth of US air attacks',
            media: ''
        },
        {
            id: '110159777393819320',
            created_at: '2023-04-07T22:00:06.424Z',
            content: '<p>If any Japanese naval crew remain alive after Operation Ten-Go, they are ordered to abandon wrecked vessel &amp; fight Americans on Okinawa on foot.</p>',
            text: 'If any Japanese naval crew remain alive after Operation Ten-Go, they are ordered to abandon wrecked vessel &amp; fight Americans on Okinawa on foot.',
            media: ''
        },
        {
            id: '110159777300318375',
            created_at: '2023-04-07T22:00:05.002Z',
            content: '<p>If they reach Okinawa without being sunk by US planes, Japanese warships in Operation Ten-Go have been ordered to run aground &amp; fire at Americans from the shore until destroyed.</p>',
            text: 'If they reach Okinawa without being sunk by US planes, Japanese warships in Operation Ten-Go have been ordered to run aground &amp; fire at Americans from the shore until destroyed.',
            media: 'https://mastodon.muage.org/system/media_attachments/files/110/159/777/216/272/500/original/df90835f9b117e23.png'
        },
        {
            id: '110159698563946163',
            created_at: '2023-04-07T21:40:03.581Z',
            content: '<p>In Operation Ten-Go (&quot;Heaven One&quot;) remnants of Imperial Japanese Navy are sailing to Okinawa. Last 10 surviving major Japanese warships, including Yamato, the heaviest battleship in the world, are trying to attack US Navy without air support in a near-suicidal mission.</p>',
            text: 'In Operation Ten-Go (&quot;Heaven One&quot;) remnants of Imperial Japanese Navy are sailing to Okinawa. Last 10 surviving major Japanese warships, including Yamato, the heaviest battleship in the world, are trying to attack US Navy without air support in a near-suicidal mission.',
            media: 'https://mastodon.muage.org/system/media_attachments/files/110/159/698/559/732/060/original/0a62f87a16c99cb4.png'
        },
        {
            id: '110154036244344403',
            created_at: '2023-04-06T21:40:03.440Z',
            content: '<p>In ever-increasing desperation after surprise invasion of Okinawa, Japanese Navy are sending waves of kamikaze attacks at Allied forces. Eight destroyers have been hit by suicide planes today alone, four sunk or crippled including USS Leutze (pictured):</p>',
            text: 'In ever-increasing desperation after surprise invasion of Okinawa, Japanese Navy are sending waves of kamikaze attacks at Allied forces. Eight destroyers have been hit by suicide planes today alone, four sunk or crippled including USS Leutze (pictured):',
            media: 'https://mastodon.muage.org/system/media_attachments/files/110/154/036/241/883/525/original/6e3c02fafe43ac53.png'
        },
        {
            id: '110153879012624221',
            created_at: '2023-04-06T21:00:04.275Z',
            content: '<p>American landings on Okinawa have cut the island in two, but Japanese defenders have begun a fierce counter-attack, striking landing zones from north &amp; south.</p>',
            text: 'American landings on Okinawa have cut the island in two, but Japanese defenders have begun a fierce counter-attack, striking landing zones from north &amp; south.',
            media: 'https://mastodon.muage.org/system/media_attachments/files/110/153/878/960/855/853/original/8ef8526cde807826.png'
        }
    ]
}

module.exports = async function () {

    let htmldata = []

    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') {
        htmldata = DUMMY_DATA
    } else {
        htmldata = await axios
            .get('https://mastodon.muage.org/api/v1/accounts/8169/statuses')
            .then(res => res.data)
            .then(data => {
                const toots = data
                    .filter(item => item.visibility == 'public' && item.account.id == '8169')
                    .filter((_, idx) => idx < 10)
                    .map(item => {
                        const tmp = {}
                        tmp.id = item.id;
                        tmp.created_at = item.created_at;
                        tmp.content = item.content;
                        tmp.text = item.content.replace(/<\/*\w+>/g, "");
                        tmp.media = item.media_attachments.length > 0 ? item.media_attachments[0].url : '';
                        return tmp
                    })
                return {
                    user_name: data[0].account.display_name,
                    user_img: data[0].account.avatar,
                    toots
                };
            })
            .catch((err) => {
                console.error(err);
                return [];
            });
    }

    return htmldata;    
};
