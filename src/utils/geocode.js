const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hlZW5hbGF6YW0iLCJhIjoiY2tiN2x5NmN3MDcwaDJwdWlrdTM4eDk4YSJ9.SVfJzggruDKBHQwPph8lVg&limit=1'

    request ({url, json:true}, (error, {body}) =>{
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0){
            callback ('Unable to find location. Try again', undefined)
        } else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode