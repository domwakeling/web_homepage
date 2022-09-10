const metBox = document.getElementById('kilos');
const impBox = document.getElementById('imperial');

const CONV = 2.20462;

const metToImp = () => {
    const kilos = metBox.value;
    console.log("Kilos:", kilos);
    const pounds = kilos * CONV;
    const stone = Math.floor(pounds / 14);
    const lbs = (pounds - 14 * stone).toFixed(1);
    impBox.value = `${stone}st ${lbs}lbs`;
}