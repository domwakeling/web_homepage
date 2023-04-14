const metBox = document.getElementById('kilos');
const impBox = document.getElementById('imperial');

const CONV = 2.20462;

const metToImp = () => {
    const kilos = metBox.value;
    console.log("Kilos:", kilos);
    const pounds = kilos * CONV;
    const stone = Math.floor(pounds / 14);
    const lbs = (Math.floor((pounds - 14 * stone) * 10) * 0.1).toFixed(1);
    impBox.value = `${stone}st ${lbs}lbs`;
}
