//console.log("hello I am index dot js");
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZW1jYWxsIiwiYSI6ImNqb2c5Z2c2ajAweWIzcXF0YW1rZzh0ZmoifQ.z1xBi5a_7winSv5VNu_YVA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
