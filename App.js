import React from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  state = {
    location: {},
    errorMessage: ''
  }
  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if(status !== "granted") {
      console.log('PERMISSION NOT GRANTED!');
      
      this.setState({
        errorMessage: 'PERMISSION NOT GRANTED'
      })

    }
    
    const userLocation = await Location.getCurrentPositionAsync();
    this.setState({
      location
    })
  }
  render() {
    return (
      <View style={styles.container}>          

        <MapView style={styles.mapStyle} 
          initialRegion={{
            latitude: 38.0289396,
            longitude: -78.5210302,
            latitudeDelta: 0.0,
            longitudeDelta: 0.01,
          }} 
          showsUserLocation={true}
          >
          <MapView.Marker
            coordinate={{latitude: 38.0289396,
            longitude: -78.5210302}}
            title={"Runk Dining Hall"}
            description={"Good food"}
         />
          </MapView>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});