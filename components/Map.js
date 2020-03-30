import React from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as Permissions from 'expo-permissions';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Map extends React.Component {

  state = {
    location: {},
    errorMessage: '',
    F1: {
      latitude: 38.0289396,
      longitude: -78.5210302
    },
    F2: {
      latitude: 38.035797,
      longitude: -78.506712
    },
    F3: {
      latitude: 38.034795,
      longitude: -78.515122
    },
    F4: {
      latitude: 38.035689,
      longitude: -78.510586
    },
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
      location,
    })
    const temp = await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
    });
  }


  render() {
    return (
      <View style={styles.container}>          

        <MapView style={styles.mapStyle} 
          initialRegion={{
            latitude: 38.0289396,
            longitude: -78.5210302,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }} 
          showsUserLocation={true}
          >
          <MapView.Circle
                key = { (38.0289396 + -78.5210302).toString() }
                center = { this.state.F1 }
                radius = { 20 }
                strokeWidth = { 1 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' }                
           />
           <MapView.Circle
                key = { (38.035797 + -78.506712).toString() }
                center = { this.state.F2 }
                radius = { 20 }
                strokeWidth = { 1 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' }                
           />
           <MapView.Circle
                key = { (38.0289396 + -78.5210302).toString() }
                center = { this.state.F3 }
                radius = { 20 }
                strokeWidth = { 1 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' }                
            />
           <MapView.Circle
                key = { (38.0289396 + -78.5210302).toString() }
                center = { this.state.F4 }
                radius = { 20 }
                strokeWidth = { 1 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' }                
            />
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

TaskManager.defineTask("geofencing", ({ data: { eventType, region }, error }) => {
      if (error) {
        // check `error.message` for more details.
        return;
      }
      console.log('geofencing')
      if (eventType === Location.GeofencingEventType.Enter) {
        alert("enter in region!")
        console.log("You've entered region:", region);
      } else if (eventType === Location.GeofencingEventType.Exit) {
        console.log("You've left region:", region);
      }
    });
  


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
  