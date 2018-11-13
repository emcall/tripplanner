
const mapboxgl = require('mapbox-gl');
const  markers  = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZW1jYWxsIiwiYSI6ImNqb2c5Z2c2ajAweWIzcXF0YW1rZzh0ZmoifQ.z1xBi5a_7winSv5VNu_YVA';


  // function buildMarker (coords, type){
  //   console.log('makin a marker');
  //   const markerDomEl = document.createElement('div');
  //   markerDomEl.style.width = '32px';
  //   markerDomEl.style.height = '39px';
  //   markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  //   new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
  // }

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

 document.getElementById('activity').addEventListener('click', function(){
  markers(map, [-74.009, 40.705], 'activity');
 });


// const ourElement = document.createElement('p')
// ourElement.innerHTML = 'i am some words';

// new mapboxgl.Marker(ourElement).setLngLat([-74.009151, 40.705086]).addTo(map);

module.exports = 'hello';
