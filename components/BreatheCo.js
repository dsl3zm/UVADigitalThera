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
    console.log("hello");
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
    this.playbackInstance.setIsLoopingAsync(true);
//  Play the Music
    this.playbackInstance.playAsync();
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
    console.log('tooggle pressplaypause');
    console.log(this.playbackInstance);
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync();
      } else {
        this.playbackInstance.playAsync();
      }
    }
  };

  _onStopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.stopAsync();
    }
  };
  

    playSound = async () => {

        await Expo.Audio.setIsEnabledAsync(true);
        const sound = new Audio.Sound();
        await sound.loadAsync(require('../assets/music1.mp3'));
        await sound.playAsync();
        console.log("success");
        sound.playAsync();
        sound.replayAsync();
        
      };
      render() {
        return(
        <TouchableOpacity>
          <Ionicons 
            name="md-play" 
            size={60} 
            color="white" 
            style={styles.button}
            onPress={this._loadNewPlaybackInstance}
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