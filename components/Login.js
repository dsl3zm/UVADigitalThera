import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet,Image } from 'react-native';
import { Constants } from 'expo';

export default class Login extends Component {

    state = {
        email: '',
        passwprd: '',
    };
    onLogin() {
        const {email,password} = this.state;
        Alert.alert('Credentials',`email: ${email} + password: ${password}`);
    }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.fullLogo}>
                <Image
                style={styles.tinyLogo}
                source={require('../assets/uva_logo.png')}
                style={styles.logo}
                />
                <Text style={styles.titleText}>DigitalTherapeutics</Text>
            </View>
           
            <TextInput
                value={this.state.email}
                keyboardType = 'email-address'
                onChangeText={(email) => this.setState({ email })}
                placeholder='USERNAME'
                placeholderTextColor = 'white'
                style={styles.input}
            />
            <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'PASSWORD'}
                secureTextEntry={true}
                placeholderTextColor = 'white'
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={this.onLogin.bind(this)}
            >
            <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      color: 'white',
      backgroundColor: 'navy',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 15,
      },
    titleText:{
      fontFamily:"HelveticaNeue-Light",
      fontWeight: "200",
      color: 'white',
      fontSize: 30,
    },
    fullLogo:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
        paddingBottom: 80,
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'white',
      width: 300,
      height: 50,
      justifyContent:'center',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 25,
      marginTop: 70,
    },
    buttonText:{
      fontFamily:"HelveticaNeue-Light",
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 300,
      fontFamily:"HelveticaNeue-Light",
      fontSize: 20,
      height: 44,
      borderWidth: 2,
      borderColor:'transparent',
      borderBottomColor: 'white',
      marginVertical: 20,
      color: 'white'
    },
    
});
