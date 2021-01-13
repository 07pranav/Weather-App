const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3bbe67fd170511b23af0a1f349dd1158&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                "It is currently " + body.current.temperature + " degrees fahrenheit out. It feels like " + body.current.feelslike +
                ". The humidity is " + body.current.humidity + "%."
            )
        }
    })
}











// before destructuring
//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, "It is currently " + response.body.current.temperature + " out. It feels like " + response.body.current.feelslike)
//         }
//     })
// }


// coding without callback functoin
// const url = 'http://api.weatherstack.com/current?access_key=3bbe67fd170511b23af0a1f349dd1158&query=37.8267,122.4233'

// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log("It is currently " + response.body.current.temperature + " out. It feels like " + response.body.current.feelslike)
//     }
// })
module.exports = forecast