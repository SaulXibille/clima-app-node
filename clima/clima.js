const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e06e3a095a6e77a1727bb5d43482a092&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}