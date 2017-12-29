const request = require("request");


var geoCodeAddress = (addressa) => {
    return new Promise ((resolve,reject)=>{
        var address = encodeURIComponent(addressa);

        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject("Unable to connect to Google server.");
            } else if(body.status === "ZERO_RESULTS")
        {
            reject("Unable to locate that address.");

        }
    else
        {  resolve(body.results[0].geometry.location);

        }
    });

    });




};

geoCodeAddress('110018').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage)=>{
    console.log(errorMessage);
})