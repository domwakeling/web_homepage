// since account is dormant, use data from last 20 ...

const data = [
    {
        "media_url": "./src/img/archer/archer_01.png",
        "heightClass": "height1"
    },
    {
        "media_url": "./src/img/archer/archer_02.png",
        "heightClass": "height1"
    },
    {
        "media_url": "./src/img/archer/archer_03.png"
    },
    {
        "media_url": "./src/img/archer/archer_04.png"
    },
    {
        "full_text": `
            <li>I can't remember when I was this happy</li>
            <li>You just had a baby</li>
            `,
        "media_url": "./src/img/archer/archer_05.png"
    },
    {
        "full_text": `
            <li>Archer, I know you think you're invincible</li>
            <li>Plus, now I have a laser backpack.</li>
            `,
        "media_url": "./src/img/archer/archer_06.png"
    },
    {
        "media_url": "./src/img/archer/archer_07.png"
    },
    {
        "full_text": `
            <li>Who's beard guy?</li>
            <li>That's Kenny Loggins!</li>
            <li>From Kenny Loggins Roaster's?</li>
            `,
        "heightClass": "height2",
        "media_url": "./src/img/archer/archer_08.png"
    },
    {
        "media_url": "./src/img/archer/archer_09.png"
    },
    {
        "full_text": `
            <li>Could you not find a punch bowl?</li>
            <li>It was too heavy</li>
            `,
        "heightClass" : "height2",
        "media_url": "./src/img/archer/archer_10.png"
    },
    {
        "full_text": `
            <li>I am pregnant</li>
            <li>How long are you going to keep using that as an excuse?</li>
            <li>Probably at least through childbirth</li>
            `,
        "media_url": "./src/img/archer/archer_11.png"
    },
    {
        "full_text": `
            <li>How much did that cost!?</li>
            <li>It's advertising</li>
            <li>For what!?</li>
            <li>Pontiac, I guess</li>
            `,
        "media_url": "./src/img/archer/archer_12.png"
    },
    {
        "media_url": "./src/img/archer/archer_13.png"
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