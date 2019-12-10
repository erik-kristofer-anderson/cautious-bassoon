function zip_code_to_fastest_speed() {

}







// window.fetch()







// debugger;
// myData = fetch("https://opendata.fcc.gov/resource/ehbi-rr4z.json?blockcode=291833105021102&consumer=1")
// debugger;
// // myData.then(
// //     result => alert(result),
// // );
// // debugger;
//
//
// myRequest = myData


// // // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
// fetch("https://opendata.fcc.gov/resource/ehbi-rr4z.json?blockcode=291833105021102&consumer=1")
//     .then(response => response.json())
//     .then(data => {
//         debugger;
//
//     });



// Replace ./data.json with your JSON feed
fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        console.log(data)
    })
    .catch(err => {
        // Do something for an error here
    })





//// https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/
// Replace ./data.json with your JSON feed
let myDataConst = 'foo';
let zipcode = "60660"
let public_key = "pk.eyJ1IjoiZXJpa2thbmRlcnNvbiIsImEiOiJjazMxdnNqcmMwZGgzM2JzNXF5ZnM3MHhlIn0.RhbHx-zoZopJ_Xwx9iDbog"
let request_string = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + zipcode + ".json?access_token=" + public_key
// Replace ./data.json with your JSON feed
debugger;
out = fetch(request_string)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        console.log(data);
        // localStorage.setItem()
        myDataConst = data
        debugger;
        // doStuff(data);

    })
  .catch(err => {
    // Do something for an error here
  });
debugger;
// asdf = asdfasdf;
debugger;

console.log(myDataConst);



function doStuff(data) {
    console.log(data)
    debugger;
    let lat = data['features'][0]['center'][0]
    let long = data['features'][0]['center'][1]
    coordinates = [lat, long]


}



//// adapted from my python
function get_coordinates(zipcode) {
    let public_key = "pk.eyJ1IjoiZXJpa2thbmRlcnNvbiIsImEiOiJjazMxdnNqcmMwZGgzM2JzNXF5ZnM3MHhlIn0.RhbHx-zoZopJ_Xwx9iDbog"
    let request_string = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + zipcode + ".json?access_token=" + public_key
    fetch(request_string)
        .then(response =>response.json())
        .then(data => {
            debugger;

            let coordinates = ['a', 'b']
            debugger;
        })
        .then(coordinates => {
            alert(coordinates)
        });
};


// debugger;
// asdf = get_coordinates("60660");
// debugger;
// // alert(asdf)
// debugger;
// response = myData
// // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
// response.json().then(data => {
//     alert('hi')
//     debugger
// });

// myData.then(
//     response => (store(response))
// );
//
// function store(response) {
//     let x = response.json();
//     debugger
//     localStorage.setItem("key", JSON.stringify(x));
//     debugger;
// }


