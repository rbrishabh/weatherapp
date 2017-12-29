const request = require('request');

var geocodeAddress = (addressa, callback) =>
{
    var address = encodeURIComponent(addressa);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback("Unable to connect to Google server.");
        } else if(body.status === "ZERO_RESULTS")
    {
        callback("Unable to locate that address.");

    }
else
    {  callback( undefined, {
       Address:  body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
    });

    }
});

};
module.exports = {
    geocodeAddress
};