import React from "react";
import {View} from "native-base";
import MapView from "react-native-maps";
import styles  from "./MapContainerStyles.js";

const MapContainer = ({region}) =>{
console.log('region is', region);
console.log('style is',styles);
console.log('provider',MapView.PROVIDER_GOOGLE);
  return (
    <View style ={styles.container}>
      <MapView provider = {MapView.PROVIDER_GOOGLE} style = {styles.map} region = {region}>
      <MapView.Marker
      coordinate ={region}
      pinColor = "blue"
      />
    </MapView>
    </View>
  )
}

export default MapContainer;
