const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8d8288cc91bbf71fddc21b6db0213dd8&query='+latitude+','+longitude+'&units=f'

    request ({url, json:true}, (error, {body}) =>{
        if(error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error){
            callback ('Unable to find location', undefined)
        } else {
            callback(undefined,
                            'At ' + body.location.localtime + ', it is '
                            +body.current.weather_descriptions[0] + '. The temperature is '+ body.current.temperature
                            + ' degF and it feels like ' + body.current.feelslike +' degF. ' +
                            'The humidity is '  + body.current.humidity +'.')
        }
    })
}

module.exports = forecast