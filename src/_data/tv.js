const data = [
    {
        "showName": "Welcome to Wrexham S3",
        "release": "03.05.24"
    },{
        "showName": "Star Wars: The Acolyte",
        "release": "05.06.24"
    },
    {
        "showName": "Orphan Black: Echoes",
        "release": "16.05.24"
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