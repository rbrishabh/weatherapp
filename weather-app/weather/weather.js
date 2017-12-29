const request = require('request');


var getWeather = (lat,lng,callback) => {
    request({
        url: `https://api.darksky.net/forecast/dfa222d975c5ad495edac16ad1840aa7/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200)
    {
        callback(undefined, {
            temperature : body.currently.temperature,
            actTemp     : body.currently.apparentTemperature
        });
    }
else {
        callback('Cannot fetch weather.');

    }
});

}

module.exports = {
    getWeather
};
