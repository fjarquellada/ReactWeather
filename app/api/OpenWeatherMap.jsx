var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=1d16278e131ff479af03abbc249baeb2&units=imperial';

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log("requestUrl: ",requestUrl);
        //var requestUrl = OPEN_WEATHER_MAP_URL;
        return axios.get(requestUrl).then(function(res){
            console.log(res);
            if(res.statusText!=="OK"){
                throw new Error(res.data.message);
            }else{

                return res.data.list[0].main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}