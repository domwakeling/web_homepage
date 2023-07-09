const sass = require('sass');
const CleanCSS = require("clean-css");

 const convertSASS =  (value) => {
    return sass.compileString(value).css.toString()
};

 const stringify = (value) => {
    return JSON.stringify(value);
};

// turn comma-separated form list into string
const formstring = (value) => {
    return value ? value.split(",").join("") : null;
};

// take a Unix timestamp and return the weekday
const weekdayfromutc = (utc) => {
    const date = new Date(utc * 1000)
    return `${["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"][date.getDay()]}day`
};

// take a decimal and return nearest whole number
const rounddecimal = (n) => {
    const minmax = [Math.floor(n), Math.ceil(n)];
    if (Math.abs(minmax[0] * 1.0 - n) < Math.abs(minmax[1] * 1.0 - n)) {
        return minmax[0]
    } else {
        return minmax[1]
    }
};

const datefromtoot = (item) => {
    let t = item.created_at.match(/^\d{4}-(\d{2})-(\d{2})T(\d{2}:\d{2})/)
    // let t = item.created_at.match(/^(\w{3}) (\w{3}) (\d*) (\d*:\d*)/)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec']
    return `${t[2]} ${months[parseInt(t[1]) - 1]} ${t[3]}`.toUpperCase();
};

// minimise css
const cssmin=  (code) => {
    return new CleanCSS({}).minify(code).styles;
};

// uppercase text
const upper=  (text) => {
    return text.toUpperCase();
};

module.exports = {
    convertSASS,
    cssmin,
    datefromtoot,
    formstring,
    rounddecimal,
    stringify,
    upper,
    weekdayfromutc
}