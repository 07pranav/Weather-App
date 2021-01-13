const request = require('request');
// coding using callback function
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJhbmF2MDciLCJhIjoiY2tqbWpzdDZiMGl5MzJxdGZ4d3Nxdmo2ciJ9.2oUcgsFpN7p2Ae61t8YHXA'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

// coding without callback function
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Philadelphia.json?access_token=pk.eyJ1IjoicHJhbmF2MDciLCJhIjoiY2tqbWpzdDZiMGl5MzJxdGZ4d3Nxdmo2ciJ9.2oUcgsFpN7p2Ae61t8YHXA'
// request({ url: geocodeURL, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to Location service')
//     } else if (response.body.features === undefined) {
//         console.log('Unable to connect to geocoding service')
//     } else {
//         const latitude = response.body.features[2].center[1]
//         const longitude = response.body.features[2].center[0]
//             // here features and center is an array and we want to grab information at particular
//             // position in the index.
//         console.log('Latitude is ' + latitude)
//         console.log('Longitude is ' + longitude)
//     }
// })


module.exports = geocode