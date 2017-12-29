const yargs= require('yargs');
const axios = require('axios');

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

var address = encodeURIComponent(argv.a);
var geoCodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

axios.get(geoCodeURL).then((response)=> {
if (response.data.status === "ZERO_RESULTS"){
    throw new Error('Address not found.');
}
console.log(response.data.results[0].formatted_address);
var lat =  response.data.results[0].geometry.location.lat;
var lng = response.data.results[0].geometry.location.lng;
var addressURL = `https://api.darksky.net/forecast/dfa222d975c5ad495edac16ad1840aa7/${lat},${lng}`;
return axios.get(addressURL);
}).then((response)=>{
temp = response.data.currently.temperature;
apparentTemp = response.data.currently.apparentTemperature;
console.log(`The temperature is ${temp}. It feels like ${apparentTemp}`);
})
.catch((e)=>{
    if(e.code==="ENOTFOUND"){
        console.log("Cannot connect to API servers.");
    } else {
        console.log(e.message);
    }
});

