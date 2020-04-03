import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import { Constants } from 'expo';
import NavBar from './NavBar'

export default function Test(props){
//   state = {
//     switchValue: true,
//   };

//   _handleToggleSwitch = () =>
//     this.setState(state => ({
//       switchValue: !state.switchValue,
//     }));

    return (
    <View>
        <NavBar title='Notifications' navigation = {props.navigation }/>
        <View style={styles.container}>
            <Text> Test things here </Text>

        {/* <Switch
          onValueChange={this._handleToggleSwitch}
          value={this.state.switchValue}
          trackColor={{true: "blue", false: null}}
        /> */}

        </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
