var axios = require('axios');

const Timezone_URL = 'http://api.worldweatheronline.com/premium/v1/tz.ashx?key=a568820f733d4520bd243109170411&&format=json';

// a568820f733d4520bd243109170411
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${Timezone_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else{
//        console.log(res.data.main.time_zone);
        return res.data.data.time_zone[0].localtime;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
