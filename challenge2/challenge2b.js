

//======= https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data =====//
//     fetch(url) // Call the fetch function passing the url of the API as a parameter
//         .then(function() {
//             // Your code for handling the data you get from the API
//         })
//         .catch(function() {
//             // This is where you run code if the server returns any errors
//         });
//========================================================================================//


// first, get coordinates

let zipcode = "600660";
let public_key = "pk.eyJ1IjoiZXJpa2thbmRlcnNvbiIsImEiOiJjazMxdnNqcmMwZGgzM2JzNXF5ZnM3MHhlIn0.RhbHx-zoZopJ_Xwx9iDbog";
let request_string = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + zipcode + ".json?access_token=" + public_key;

fetch(request_string)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        let lat = data['features'][0]['center'][0];
        let long = data['features'][0]['center'][1];
        let coordinates = [lat, long];
        get_blockcode(coordinates);
    });


function get_blockcode(coordinates) {
    let lat = coordinates[0];
    let long = coordinates[1];
    request_string = "https://geo.fcc.gov/api/census/block/find?longitude=" + lat + "&latitude=" + long + "&format=json&showall=false";
    fetch(request_string)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let blockcode = data['Block']['FIPS'];
            // debugger;
            get_fastest(blockcode)
        });
}

function get_fastest(blockcode) {
    request_string = "https://opendata.fcc.gov/resource/ehbi-rr4z.json?blockcode=" + blockcode + "&consumer=1";
    fetch(request_string)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let fastest = 0;
            for (let i = 0; i < data.length; i++) {
                let x = (parseFloat(data[i]['maxaddown']));
                if  (x > fastest) {
                    fastest = x
                }
            }
            debugger
        });
}
