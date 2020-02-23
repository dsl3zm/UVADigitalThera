import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Map = () => (
          <View style={styles.container}>
            <MapView style={styles.mapStyle} 
              initialRegion={{
                latitude: 38.0289396,
                longitude: -78.5210302,
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
              }} 
              >
              <MapView.Marker
                coordinate={{latitude: 38.0289396,
                longitude: -78.5210302}}
                title={"Runk Dining Hall"}
                description={"good food"}
             />
              </MapView>
            
          </View>
)
export default Map;

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
  