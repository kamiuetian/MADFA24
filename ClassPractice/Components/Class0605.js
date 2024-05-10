import React, { useEffect, useState } from "react";

function Class0605(props) {
  let [region, setRegion] = useState({});
  useEffect(() => {
    setRegion({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, []);
  return <>
  <MapView initialRegion={region}>
    <Marker coordinates={}>
        <callout><Text></Text></callout>
    </Marker>
  </MapView>
  </>;
}

export default Class0605;
