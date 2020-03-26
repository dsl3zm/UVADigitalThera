import React, { Component } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { Constants } from 'expo';

export default class Test extends Component {
  state = {
    switchValue: true,
  };

  _handleToggleSwitch = () =>
    this.setState(state => ({
      switchValue: !state.switchValue,
    }));

  render() {
    return (
      <View style={styles.container}>

        <Switch
          onValueChange={this._handleToggleSwitch}
          value={this.state.switchValue}
          trackColor={{true: "blue", false: null}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
