const data = [
    {
        "showName": "Clarkson's Farm S4",
        "release" : "23.05.25"
    },
    {
        "showName": "FUBAR S2",
        "release": "12.06.25"
    },
    {
        "showName": "Ironheart",
        "release": "25.06.25"
    },
    {
        "showName": "Sandman S2",
        "release": "03.07.25"
    },
    {
        "showName": "Strange New Worlds S3",
        "release": "17.07.25"
    },
    {
        "showName": "Wednesday S2",
        "release": "06.08.25"
    },
    {
        "showName": "Marvel Zombies",
        "release": "03.10.25"
    },
    {
        "showName": "Star Wars Visions S3",
        "release": "29.10.25"
    }
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