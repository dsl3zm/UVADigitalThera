import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text, Image, ImageBackground, ScrollView} from 'react-native';
import NavBar from './NavBar'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
import Background from '../assets/calm_water.jpg';
import { Audio } from 'expo-av';
import BreatheCo from '../components/BreatheCo';

export default function Breathe(props){

// try {
//   await soundObject.loadAsync(require('./assets/music1.mp3'));
//   await soundObject.playAsync();
//   // Your sound is playing!
// } catch (error) {
//   // An error occurred!
// }

  return(
    
    <View style={{ width:'100%',height:'100%' }}>
      <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
        <NavBar title='Breathing' navigation = {props.navigation }/>


          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <BreatheCo></BreatheCo>
            <Image source={{uri: 'https://media.giphy.com/media/krP2NRkLqnKEg/giphy.gif'}} style={styles.gif} />
          </View>

        <CountDown
          until={120}
          size={20}
          onFinish={() => alert('Breathing Complete, Good Job!')}
          digitStyle={{backgroundColor: '#A2C8C8'}}
          digitTxtStyle={{color: '#FFF'}}
          timeLabelStyle = {{color: '#FFF'}}
          timeToShow={['M', 'S']}
          timeLabels={{m: 'Min', s: 'Sec'}}
          />

      </ImageBackground>
    </View>
    )
       
    
}

const styles = StyleSheet.create({


  gif:{
    width: '80%',
    height: '60%',
    borderRadius: 16,

  },
  button: {
    paddingBottom: 40
  }

});