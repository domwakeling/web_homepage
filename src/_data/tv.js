const data = [
    {
        "showName": "Moon Knight",
        "release": "30.03.22"
    },
    {
        "showName": "Russian Doll (S2)",
        "release": "20.04.22"
    },
    {
        "showName": "Obi-Wan Kenobi",
        "release": "25.05.22"
    },
    {
        "showName": "Umbrella Academy (S3)",
        "release": "22.06.22"
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