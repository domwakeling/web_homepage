const data = [
    {
        "showName": "Strike S6",
        "release": "16.12.24"
    },
    {
        "showName": "What If...? S3",
        "release" : "22.12.24"
    },
    {
        "showName": "Severance S2",
        "release": "17.01.25"
    },
    {
        "showName": "Night Agent S2",
        "release": "23.01.25"
    },
    {
        "showName": "Star Trek: Section 31",
        "release": "24.01.25"
    },
    {
        "showName": "The Recruit S2",
        "release": "30.01.25"
    },
    {
        "showName": "Reacher S3",
        "release": "20.02.25"
    },
    {
        "showName": "Daredevil: Born Again",
        "release": "05.03.25"
    },
    {
        "showName": "Andor S2",
        "release" : "22.04.25"
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