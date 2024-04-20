module.exports = (() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    return month >= 3 ? true : false;
})();