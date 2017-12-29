const yargs= require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
    .options({
     a : {
         string:true,
         describe: 'Adress to fetch weather for',
         alias:'address',
         demand:true
     }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv.a, (errorMessage, geoLocation) => {
    if(errorMessage) {
      console.log(errorMessage);
    }
    if(geoLocation) {
        console.log(geoLocation.Address);
        weather.getWeather(geoLocation.Latitude,geoLocation.Longitude, (errorMessage, realWeather) => {
            if(errorMessage){
                console.log(errorMessage);
            }
            else if (realWeather) {
                console.log(`The temperature right now is ${realWeather.temperature} degrees. Although it feels like ${realWeather.actTemp} degrees.`);
            }
        });

    }
});


