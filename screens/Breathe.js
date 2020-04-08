import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text, Image } from 'react-native';
import { Constants } from 'expo';
import NavBar from './NavBar'

export default function Breathe(props){

  return(
    <View style={{ width:'100%',height:'100%' }}>
        <NavBar title='Breathing' navigation = {props.navigation }/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{uri: 'https://media.giphy.com/media/krP2NRkLqnKEg/giphy.gif'}} style={styles.gif} />
        </View>
    </View>
    )
       
    
}

const styles = StyleSheet.create({

  gif:{
    width: '80%',
    height: '60%',

  }





});