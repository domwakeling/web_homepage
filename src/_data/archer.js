// since account is dormant, use data from last 20 ...

const data = [
    {
        "media_url": "http://pbs.twimg.com/tweet_video_thumb/DLEjFqkWkAAFNRM.jpg",
        "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/DLEjFqkWkAAFNRM.jpg",
    },
    {
        "media_url": "http://pbs.twimg.com/media/CxGMKNdUUAASf8y.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CxGMKNdUUAASf8y.jpg",
        "heightClass": "height1"
    },
    {
        "full_text": `
            <li>Don't you think it's a little premature to be celebrating?</li>
            <li>Who's celebrating?</li>
            `,
        "media_url": "http://pbs.twimg.com/media/CwhV65sVIAAVRkr.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CwhV65sVIAAVRkr.jpg",
        "heightClass": "height2"
    },
    {
        "media_url": "http://pbs.twimg.com/media/CtPu3UFUsAA3kzj.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CtPu3UFUsAA3kzj.jpg",
        "heightClass": "height1"
    },
    {
        "media_url": "http://pbs.twimg.com/media/CtKa6QDUsAAPS-K.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CtKa6QDUsAAPS-K.jpg",
    },
    {
        "media_url": "http://pbs.twimg.com/media/Cq5WtjlUMAAzYBQ.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cq5WtjlUMAAzYBQ.jpg",
    },
    {
        "media_url": "http://pbs.twimg.com/media/Cq0CUQ4UEAA59jv.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cq0CUQ4UEAA59jv.jpg",
    },
    {
        "full_text": `
            <li>You're my smoochie boochie</li>
            <li>No, you're my smoochie boochie</li>
            `,
        "media_url": "http://pbs.twimg.com/media/CquyqMEUIAAcjbC.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CquyqMEUIAAcjbC.jpg",
    },
    {
        "full_text": `
            <li>I can't remember when I was this happy</li>
            <li>You just had a baby</li>
            `,
        "media_url": "http://pbs.twimg.com/media/CqpspWrVUAEi5te.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CqpspWrVUAEi5te.jpg",        
    },
    {
        "full_text": `
            <li>Archer, I know you think you're invincible</li>
            <li>Plus, now I have a laser backpack.</li>
            `,
        "media_url": "http://pbs.twimg.com/media/CqksuCfUsAAaanO.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CqksuCfUsAAaanO.jpg",            
    },
    {
        "full_text": "<li>Pam, if you want to scuff them that badly just throw them down the......ugh.</li>",
        "media_url": "http://pbs.twimg.com/media/Cp8P_zrVUAAAfu2.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cp8P_zrVUAAAfu2.jpg",        
    },
    {
        "media_url": "http://pbs.twimg.com/media/Cp2x2mxUkAAn90U.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cp2x2mxUkAAn90U.jpg",
    },
    {
        "full_text": `
            <li>Who's beard guy?</li>
            <li>That's Kenny Loggins!</li>
            <li>From Kenny Loggins Roaster's?</li>
            `,
        "heightClass": "height2",
        "media_url": "http://pbs.twimg.com/media/CpxYZaKVIAAFkvX.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CpxYZaKVIAAFkvX.jpg",
    },
    {
        "media_url": "http://pbs.twimg.com/media/CpsOJYeUsAAzCUY.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CpsOJYeUsAAzCUY.jpg",
    },
    {
        "full_text": `
            <li>Could you not find a punch bowl?</li>
            <li>It was too heavy</li>
            `,
        "heightClass" : "height2",
        "media_url": "http://pbs.twimg.com/media/Cph1_3wUsAAoz7d.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cph1_3wUsAAoz7d.jpg",
    },
    {
        "full_text": `
            <li>I am pregnant</li>
            <li>How long are you going to keep using that as an excuse?</li>
            <li>Probably at least through childbirth</li>
            `,
        "media_url": "http://pbs.twimg.com/media/Cpdmfz1UIAElJcC.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cpdmfz1UIAElJcC.jpg",       
    },
    {
        "full_text": `
            <li>How much did that cost!?</li>
            <li>It's advertising</li>
            <li>For what!?</li>
            <li>Pontiac, I guess</li>
            `,
        "media_url": "http://pbs.twimg.com/media/CpYQCWXUsAA1w-t.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CpYQCWXUsAA1w-t.jpg",
    },
    {
        "media_url": "http://pbs.twimg.com/media/CpSWr-JUAAEAghH.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CpSWr-JUAAEAghH.jpg",
    }
];

module.exports = () => {
    const ret = data[Math.floor(Math.random() * data.length)];
    const keys = Object.keys(ret);
    if (keys.indexOf("heightClass") < 0) {
        ret.heightClass = keys.indexOf('full_text') >= 0 ? "height3" : "height2";
    }
    return ret;
}