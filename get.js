
$.ajax({
    url: "https://opendata.fcc.gov/resource/ehbi-rr4z.json",
    type: "GET",
    data: {
        "$limit" : 100,
        // "$$app_token" : "YOURAPPTOKENHERE"
    }
}).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
});


