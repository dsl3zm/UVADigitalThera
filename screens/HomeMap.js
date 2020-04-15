import React from 'react';
import { StyleSheet,View, Button } from 'react-native';
import NavBar from './NavBar'
import Map from '../components/Map'


export default function HomeMap(props){
   //Works just like a regular fucntion ex: 
   //console.log(props)


    return(
        <View style={{ width:'100%',height:'120%' }}>
        <NavBar title='Map' navigation = {props.navigation }/>
        <Map/>
    </View>
    )
       
    
}

//<Button style={{position:'absolute', }} title="Open drawer" onPress={() => props.navigation.openDrawer()} />
//<Button title="oggle drawer" onPress={() => props.navigation.toggleDrawer()} />