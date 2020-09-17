// since account is dormant, use data from last 20 ...

const data = [
    {
        "media_url": "http://pbs.twimg.com/tweet_video_thumb/DLEjFqkWkAAFNRM.jpg",
        "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/DLEjFqkWkAAFNRM.jpg",
    },
    {
        "media_url": "http://pbs.twimg.com/media/CxGMKNdUUAASf8y.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CxGMKNdUUAASf8y.jpg",
    },
    {
        "full_text": `
            <p>- Don't you think it's a little premature to be celebrating?</p>
            <p>- Who's celebrating?</p>
            `,
        "media_url": "http://pbs.twimg.com/media/CwhV65sVIAAVRkr.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CwhV65sVIAAVRkr.jpg",
    },
    {
        "media_url": "http://pbs.twimg.com/media/CtPu3UFUsAA3kzj.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CtPu3UFUsAA3kzj.jpg",
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
            <p>- You're my smoochie boochie</p>
            <p>- No, you're my smoochie boochie</p>
            `,
        "media_url": "http://pbs.twimg.com/media/CquyqMEUIAAcjbC.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CquyqMEUIAAcjbC.jpg",
    },
    {
        "full_text": `
            <p>- I can't remember when I was this happy</p>
            <p>- You just had a baby</p>
            `,
        "media_url": "http://pbs.twimg.com/media/CqpspWrVUAEi5te.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CqpspWrVUAEi5te.jpg",        
    },
    {
        "full_text": `
            <p>- Archer, I know you think you're invincible</p>
            <p>- Plus, now I have a laser backpack.</p>
            `,
        "media_url": "http://pbs.twimg.com/media/CqksuCfUsAAaanO.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CqksuCfUsAAaanO.jpg",            
    },
    {
        "full_text": "<p>Pam, if you want to scuff them that badly just throw them down the......ugh.<p>",
        "media_url": "http://pbs.twimg.com/media/Cp8P_zrVUAAAfu2.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cp8P_zrVUAAAfu2.jpg",        
    },
    {
        "media_url": "http://pbs.twimg.com/media/Cp2x2mxUkAAn90U.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cp2x2mxUkAAn90U.jpg",
    },
    {
        "full_text": `
            <p>- Who's beard guy?</p>
            <p>- That's Kenny Loggins!</p>
            <p>- From Kenny Loggins Roaster's?<p>
            `,
        "media_url": "http://pbs.twimg.com/media/CpxYZaKVIAAFkvX.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CpxYZaKVIAAFkvX.jpg",
    },
    {
        "media_url": "http://pbs.twimg.com/media/CpsOJYeUsAAzCUY.jpg",
        "media_url_https": "https://pbs.twimg.com/media/CpsOJYeUsAAzCUY.jpg",
    },
    {
        "full_text": `
            <p>- Could you not find a punch bowl?</p>
            <p>- It was too heavy</p>
            `,
        "media_url": "http://pbs.twimg.com/media/Cph1_3wUsAAoz7d.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cph1_3wUsAAoz7d.jpg",
    },
    {
        "full_text": `
            <p>- I am pregnant</p>
            <p>- How long are you going to keep using that as an excuse?</p>
            <p>- Probably until childbirth</p>
            `,
        "media_url": "http://pbs.twimg.com/media/Cpdmfz1UIAElJcC.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cpdmfz1UIAElJcC.jpg",       
    },
    {
        "full_text": `
            <p>- How much did that cost!?</p>
            <p>- It's advertising</p>
            <p>-For what!?</p>
            <p>- Pontiac, I guess</p>
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
    return data[Math.floor(Math.random() * data.length)];
}