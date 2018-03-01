import React, { Component } from 'react';
import { Map, TileLayer, Marker, Tooltip,Popup, Circle} from 'react-leaflet';
import axios from 'axios';

  const url = 'https://api.spacexdata.com/v2/launchpads';
  const leafURL = "https://api.mapbox.com/styles/v1/nicknyr/cje7mtk2y6gf92snsydobiahf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmlja255ciIsImEiOiJjajduNGptZWQxZml2MndvNjk4eGtwbDRkIn0.L0aWwfHlFJVGa-WOj7EHaA";

  class Mapbox extends Component {
    constructor(props){
      super(props);
      this.state = {
        latlng: {
        lat: 28.5618571,
        lng: -80.577366,
        },
        data: []
      }
    }

  componentWillMount() {
    axios.get(url).then(res => {
    this.setState({data: res.data})
    }).catch(err => {
      console.log('error')
    })
  }

  render() {
    const {data} = this.state;
    console.log(data);

    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={this.state.latlng}
          zoom={4}>
        <TileLayer
          url={leafURL}
          attribution="<attribution>" />

          {data.map((elem, i) => {
            return (
              <Marker
                key={i}
                position={{lat:elem.location.latitude, lng: elem.location.longitude}}>
              <Popup>
                <span>
                  {elem.full_name}<br />
                  {elem.status}<br />
                  {elem.details}<br />
                  {elem.vehicles_launched.map((elem, i) => {
                    return ( <p key={i}>{elem}</p>)
                  })}
                </span>

                </Popup>
                  <Circle
                    center={{lat:elem.location.latitude, lng: elem.location.longitude}}
                    fillColor="blue"
                    radius={10000}/>
                </Marker>
                )
              })}
            </Map>
          </div>
        );
      }
    }

    export default Mapbox;
