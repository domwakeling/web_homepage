const axios = require('axios');
require('dotenv').config()

module.exports = async function () {

    if (process.env.LOCAL_DEVELOPMENT == 'DEVELOPMENT') return {
        date: 'September 10',
        event: {
            year: '1977',
            text: 'Hamida Djandoubi, convicted of torture and murder, is the last person to be executed by guillotine in France.',
            html: '1977 - <a href="https://wikipedia.org/wiki/Hamida_Djandoubi" title="Hamida Djandoubi">Hamida Djandoubi</a>, convicted of torture and murder, is the last person to be executed by guillotine in France.',
            no_year_html: '<a href="https://wikipedia.org/wiki/Hamida_Djandoubi" title="Hamida Djandoubi">Hamida Djandoubi</a>, convicted of torture and murder, is the last person to be executed by guillotine in France.',
            links: []
        },
        birth: {
            year: '1887',
            text: 'Giovanni Gronchi, Italian soldier and politician, 3rd President of the Italian Republic (d. 1978)',
            html: '1887 - <a href="https://wikipedia.org/wiki/Giovanni_Gronchi" title="Giovanni Gronchi">Giovanni Gronchi</a>, Italian soldier and politician, 3rd <a href="https://wikipedia.org/wiki/President_of_the_Italian_Republic" class="mw-redirect" title="President of the Italian Republic">President of the Italian Republic</a> (d. 1978)',
            no_year_html: '<a href="https://wikipedia.org/wiki/Giovanni_Gronchi" title="Giovanni Gronchi">Giovanni Gronchi</a>, Italian soldier and politician, 3rd <a href="https://wikipedia.org/wiki/President_of_the_Italian_Republic" class="mw-redirect" title="President of the Italian Republic">President of the Italian Republic</a> (d. 1978)',
            links: []
        },
        death: {
            year: '1985',
            text: 'Ernst Öpik, Estonian astronomer and astrophysicist (b. 1893)',
            html: '1985 - <a href="https://wikipedia.org/wiki/Ernst_%C3%96pik" title="Ernst Öpik">Ernst Öpik</a>, Estonian astronomer and astrophysicist (b. 1893)',
            no_year_html: '<a href="https://wikipedia.org/wiki/Ernst_%C3%96pik" title="Ernst Öpik">Ernst Öpik</a>, Estonian astronomer and astrophysicist (b. 1893)',
            links: []
        }
    }

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
