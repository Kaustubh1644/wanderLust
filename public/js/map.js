 mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    style:"mapbox://styles/mapbox/streets-v12", //style url
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
 });


 const marker = new mapboxgl.Marker( {color: "red"})
 .setLngLat(listing.geometry.coordinates) //Listing.geometry.cordinates
 .setPopup(new mapboxgl.Popup({offset: 25 })
 .setHTML(`<h4>${listing.tittle}</h4><p>Exact Location will be provided after booking</P>`))
 .addTo(map);