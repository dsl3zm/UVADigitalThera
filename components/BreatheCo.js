import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text, Image, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

export default class BreatheCo extends React.Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.playbackInstance = null;
    this.state = {
      // 	playbackInstanceName: LOADING_STRING,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: true,
      button: "md-play",
    };
  }
  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });

    this._loadNewPlaybackInstance(true);
  }



  async _loadNewPlaybackInstance(playing) {
    //console.log("hello");
    if (this.playbackInstance != null) {
        await this.playbackInstance.unloadAsync();
        this.playbackInstance.setOnPlaybackStatusUpdate(null);
        this.playbackInstance = null;
     }
     const source = require('../assets/music1.mp3');
     const initialStatus = {
//        Play by default
          shouldPlay: true,
//        Control the speed
          rate: 1.0, 
//        Correct the pitch
          shouldCorrectPitch: true,
//        Control the Volume
          volume: 1.0,
//        mute the Audio
          isMuted: false
     };
     const { sound } = await Audio.Sound.createAsync(
         source,
         initialStatus
    );
//  Save the response of sound in playbackInstance
    this.playbackInstance = sound;
//  Make the loop of Audio
    this.playbackInstance.setIsLoopingAsync(false);
//  Play the Music
    if(true) {
        console.log("secret");
        this.playbackInstance.pauseAsync();
    }
    else {
        this.playbackInstance.pauseAsync();
    }
}
  _onPlaybackStatusUpdate = status => {
    console.log(status);
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        volume: status.volume,
      });
      if (status.didJustFinish) {
        // this._advanceIndex(true);
        // this._updatePlaybackInstanceForIndex(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  async _updatePlaybackInstanceForIndex(playing) {
    // this._updateScreenForLoading(true);

    this._loadNewPlaybackInstance(playing, this.props.playingTrack.previewURL);
  }
  _onPlayPausePressed = () => {
    //console.log(this.state.isPlaying);
    //console.log(this.playbackInstance);
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync();
        this.state.isPlaying = false
        this.state.button = "md-play"
      } else {
        this.playbackInstance.playAsync();
        this.state.isPlaying = true
        this.state.button = "md-pause"
        console.log(this.state.button)
      }
    }
  };

  _onStopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.stopAsync();
    }
  };
  

      render() {
            return(
                <TouchableOpacity>
        
                  <Ionicons 
                    name = { this.state.button }
                    size = {60} 
                    color = "white" 
                    style = {styles.button}
                    onPress = {this._onPlayPausePressed}
                  />
                </TouchableOpacity>
            )

        }
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