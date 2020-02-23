// example to grab a piacture
//console.log("about to fetch");

// catchBike().catch(error => {
//     console.log("err")
//     console.error(error);
// });
// async function catchBike () {
//     const response = await fetch("ribbleaero1.jpg");
//     const blob = await response.blob();
//     document.getElementById("bike").src = URL.createObjectURL(blob);
// }

// example to grab a CSV and graph it
///////////////////////////////////

// const xLabels = [];
// const yLabels = [];

// chartIt();


// async function chartIt() { 
//    data =  await getData();

// const ctx = document.getElementById('chart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: data.xs,
//         datasets: [{
//             fill: false,
//             label: 'Combined Land-Surface Air and Sea-Surface Water Temperature C',
//             data: data.ys,
//             backgroundColor: 
//                 'rgba(255, 159, 64, 0.2)',
            
//             borderColor:             
//                 'rgba(255, 159, 255, 1)',
            
//             borderWidth: 1
//         }]
//     },
//     // options: {
//     //     scales: {
//     //         yAxes: [{
//     //             ticks: {
//     //                 beginAtZero: true
//     //             }
//     //         }]
//     //     }
//     // }
// });
// }

// async function getData () {
//     const xs = [];
//     const ys = [];
//     const response = await fetch("/data/ZonAnn.Ts+dSST.csv");
//     const data  = await response.text();
//     //console.log(data);
//     const table = data.split(/\n/).slice(1);
//     //console.log (rows);
//     table.forEach(row => {
//         const col = row.split(",");
//        // console.log (row);
//         const year = col[0];
//         xs.push(year);
//         temp = col[1] ;
//         ys.push(parseFloat(temp)+14);
//         //console.log(year,temp);
//     })
//     return {xs,ys};
// }

// example to grab a CSV and graph it
///////////////////////////////////

// example to grab data from an aPI
///////////////////////////////////
const issURL = "https://api.wheretheiss.at/v1/satellites/25544";
function setup() {

//   const  p1 = createElement('p',"Test header");
//   p1.html(lat);
//   p1.parent(Title);
}
var mymap;
var marker;
getISS();

setInterval(getISS,3000);

async function getISS() {
const response = await fetch(issURL);
const data = await response.json();
//console.log(data);
const lat = data.latitude;
const lng = data.longitude;
//console.log(lat,lng);
const latP = document.getElementById("latP");
latP.innerText = "Latitude = " + lat;
const lngP = document.getElementById("lngP");
lngP.innerText = "Longitude = " + lng;


if (!mymap) {
mymap = L.map('mapISS').setView([lat, lng], 4);
marker = L.marker([0,0]).addTo(mymap);
}
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL, {attribution});
tiles.addTo(mymap);

marker.setLatLng([lat,lng]);
//console.log(lat,lng);
}

