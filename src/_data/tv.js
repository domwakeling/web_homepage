const data = [
    {
        "showName": "High Potential S4",
        "release" : "17.09.25"
    },
    {
        "showName": "OMITB S5",
        "release": "09.09.25"
    },
    {
        "showName": "Taskmaster S20",
        "release": "11.09.25"
    },
    {
        "showName": "Marvel Zombies",
        "release": "03.10.25"
    },
    {
        "showName": "Star Wars Visions S3",
        "release": "29.10.25"
    },
    {
        "showName": "Slow Horses S5",
        "release": "24.09.25"
    },
];

const today = new Date(); 

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

const diffDays = (d1, d2) => Math.ceil((d1 - d2) / oneDay);

const daysUntil = (dStr) => {
    const numbers = dStr.split(".").map(n => parseInt(n))
    const tDate = new Date(2000 + numbers[2], numbers[1] - 1, numbers[0])
    return diffDays(tDate, today)
}

const trueDate = (dStr) => {
    const numbers = dStr.split(".").map(n => parseInt(n))
    const tDate = new Date(2000 + numbers[2], numbers[1] - 1, numbers[0])
    return tDate.toISOString().slice(0, 10);
}

module.exports = () => {
    
    const ret = data
        .map(item => ({
            "showName": item.showName,
            "days": daysUntil(item.release),
            "release": trueDate(item.release)
        }))
        .filter(item => item.days >= 0)
        .sort((i1, i2) => i1.days - i2.days);

    return ret;
}