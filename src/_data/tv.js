const data = [
    {
        "showName": "Bad Batch S2",
        "release": "04.01.23"
    },
    {
        "showName": "Warrior Nun S2",
        "release": "10.11.22"
    },
    {
        "showName": "Mythic Quest S2",
        "release": "11.11.22"
    },
    {
        "showName": "Leverage: Redemption S2",
        "release": "16.11.22"
    },
    {
        "showName": "Wednesday",
        "release": "23.11.22"
    },
    {
        "showName": "Slow Horses S2",
        "release": "02.12.22"
    },
    {
        "showName": "The Peripheral",
        "release": "21.10.22"
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