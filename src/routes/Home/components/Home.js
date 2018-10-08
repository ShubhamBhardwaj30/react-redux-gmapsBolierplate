import React from "react";
import {View, Text} from "react-native";
import MapContainer from "./MapContainer/Index"
import {Container} from "native-base";
class Home extends React.Component{
componentDidMount(){
  this.props.setName();

}
  render()
  {
    const region = {
              latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121
      }
        return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <MapContainer region={region}/>
        </View>
      );
  }
}
export default Home;
