import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text, Image} from 'react-native';
import NavBar from './NavBar'
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

export default function Breathe(props){

const soundObject = new Audio.Sound();
playSound = async () => {
  await soundObject.loadAsync(require('../assets/music1.mp3'));
  soundObject.playAsync();
}
// try {
//   await soundObject.loadAsync(require('./assets/music1.mp3'));
//   await soundObject.playAsync();
//   // Your sound is playing!
// } catch (error) {
//   // An error occurred!
// }

  return(
    
    <View style={{ width:'100%',height:'100%' }}>
        <NavBar title='Breathing' navigation = {props.navigation }/>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity>
            <Ionicons name="md-play" size={60} color="black" style={styles.button} />
          </TouchableOpacity>
          <Image source={{uri: 'https://media.giphy.com/media/krP2NRkLqnKEg/giphy.gif'}} style={styles.gif} />
        </View>

      <CountDown
        until={120}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#A2C8C8'}}
        digitTxtStyle={{color: '#FFF'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Min', s: 'Sec'}}
      />
    </View>
    )
       
    
}

const styles = StyleSheet.create({

  gif:{
    width: '80%',
    height: '60%',
  },
  button: {
    paddingBottom: 60

  }






});