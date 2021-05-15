module.exports = () => {

    const today = new Date();
    const month = today.getMonth() + 1;

    let baseball = false;
    if (month >= 4 || month <= 10) baseball = true;

    let football = false;
    if (month >= 8 || month <= 5) football = true;

    let f1 = false;
    if (month >= 3) f1 = true;    

    return {
        baseball,
        football,
        f1
    }
}