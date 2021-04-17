const axios = require('axios');

module.exports = async function () {

    let d = new Date();

    let todaydata = await axios
        .get(`http://history.muffinlabs.com/date/${d.getMonth() + 1}/${d.getDate()}`)
        .then(res => res.data)
        .then(data => {
            const tempdata = {}
            tempdata.date = data.date;
            if (data.data.Events.length > 0) {
                tempdata.event = data.data.Events[Math.floor(Math.random() * data.data.Events.length)]
            } else {
                tempdata.event = null
            }
            if (data.data.Births.length > 0) {
                tempdata.birth = data.data.Births[Math.floor(Math.random() * data.data.Births.length)]
            } else {
                tempdata.birth = null
            }
            if (data.data.Deaths.length > 0) {
                tempdata.death = data.data.Deaths[Math.floor(Math.random() * data.data.Deaths.length)]
            } else {
                tempdata.death = null
            }
            return tempdata;
        })
        .catch((err) => {
            console.error(err);
            return {};
        });

    return todaydata;

};
