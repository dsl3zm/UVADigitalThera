import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';


const NavBar = props => (

        <View style={styles.container}> 
            <View style={styles.bar}>

                <View styles={{}}>
                    <Ionicons name={'ios-pricetag'} size={25} color={'white'}  />
                </View>

                <View>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                
                <View>

                </View>
                    
            </View>
        </View>

)

export default NavBar;
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'orange',
        color: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/7.5,
        top: 0,
        display: 'flex',
        flexDirection:'row',
    },
    bar:{
        position:'absolute', 
        bottom:10,
        display: 'flex',
        flexDirection:'row',
        width:"100%"
    },
    title:{
        color:'white',
        fontSize: 30,
        fontFamily:"open-sans-light"

    }
  
  });