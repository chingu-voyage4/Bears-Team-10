import L from 'leaflet';


const icon = new L.Icon({
  iconUrl: require('../../images/rocket.png'),
  iconRetinaUrl: require('../../images/rocket.png'),
  iconAnchor: null,
  //popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 20),
  className: 'leaflet-div-icon'
});

export { icon };
