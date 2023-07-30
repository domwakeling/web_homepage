const data = [
    {
        "showName": "Only Murders S3",
        "release": "08.08.23"
    },
    {
        "showName": "Ahsoka",
        "release": "23.08.23"
    },
    {
        "showName": "Justified City Primeval",
        "release": "06.09.23"
    },
    {
        "showName": "Lower Decks S4",
        "release": "08.09.23"
    },
    {
        "showName": "Welcome to Wrexham S2",
        "release": "13.09.23"
    },
    {
        "showName": "The Continental",
        "release": "22.09.23"
    },
    {
        "showName": "Lupin S3",
        "release": "05.10.23"
    },
    {
        "showName": "Loki S2",
        "release" : "06.10.23"
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