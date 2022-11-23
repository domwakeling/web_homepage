const data = [
    {
        "showName": "Bad Batch S2",
        "release": "04.01.23"
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
        "showName": "Archer S13",
        "release": "01.12.22"
    },
    {
        "showName": "Guardians Xmas Special",
        "release": '25.11.22'
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