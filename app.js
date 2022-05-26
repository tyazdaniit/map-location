navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  mapboxgl.accessToken =
    "pk.eyJ1IjoidHlhemRhbmkiLCJhIjoiY2wzbjM4eHlnMDB3cjNjbHg1eWZiaDM1NiJ9.k1qEq4RjwmTerGPnKlVvMQ";
  var map = new mapboxgl.Map({
    container: "map",
    center: [lng, lat],
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 13,
  });
}
