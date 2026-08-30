const data = [
    {
        "showName": "VisionQuest",
        "release": "14.10.26"
    },
    {
        "showName": "OMITB S6",
        "release": "03.09.26"
    },
    {
        "showName": "Neagley",
        "release": "16.09.26"
    },
    {
        "showName": "Lupin S4",
        "release": "23.10.26"
    },
    {
        "showName": "Slow Horses S5",
        "release": "16.09.26"
    },
    {
        "showName": "Bad Monkey S2",
        "release": "02.12.26"
    },
    {
        "showName": "Neuromancer",
        "release": "22.01.27"
    },
    {
        "showName": "Ahsoka S2",
        "release": "20.01.27"
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