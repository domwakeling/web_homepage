


const today =  new Date();
const month = today.getMonth() + 1;

let showBaseball = false;
if(month >= 4 && month <= 10) showBaseball = true;

let showFootball = false;
if (month >= 8 || month <= 5) showFootball = true;

let showF1 = false;
if (month >= 3) showF1 = true;

module.exports = {
    showBaseball,
    showFootball,
    showF1
};