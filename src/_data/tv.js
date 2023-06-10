const data = [
    {
        "showName": "Secret Invasion",
        "release": "21.06.23"
    },
    {
        "showName": "The Blacklist S10",
        "release": "25.06.23"
    },
    {
        "showName": "The Witcher S3",
        "release": "29.06.23"
    },
    {
        "showName": "Good Omens S2",
        "release": "28.07.23"
    },
    {
        "showName": "Ahsoka",
        "release": "23.08.23"
    },
    {
        "shoaName": "Lupin S3",
        "release": "05.10.23"
    },
    {
        "shoaName": "Loki S2",
        "release" : "06.10.23"
    }
];

const today = new Date(); 

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

const diffDays = (d1, d2) => Math.ceil((d1 - d2) / oneDay);

const daysUntil = (dStr) => {
    const nums = dStr.split(".").map(n => parseInt(n))
    const tDate = new Date(2000 + nums[2], nums[1] - 1, nums[0])
    return diffDays(tDate, today)
}

module.exports = () => {
    
    const ret = data
        .map(item => ({
            "showName": item.showName,
            "days": daysUntil(item.release)
        }))
        .filter(item => item.days >= 0)
        .sort((i1, i2) => i1.days - i2.days);

    return ret;
}