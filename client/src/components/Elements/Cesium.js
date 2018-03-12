import React from "react";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "cesium-react";


export default class CesiumMap extends React.PureComponent {

  render() {
    return (
      <Viewer full>
        <Entity
          name="tokyo"
          position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
          point={{ pixelSize: 10 }}>
          test
        </Entity>
      </Viewer>
    );
  }

}
