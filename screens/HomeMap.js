import React from 'react';
import { StyleSheet,View, Button } from 'react-native';
import NavBar from './NavBar'
import Map from '../components/Map'


export default function HomeMap(props){
   //Works just like a regular fucntion ex: 
   //console.log(props)


    return(
        <View style={{ width:'100%',height:'100%' }}>
        <NavBar title='Map' navigation = {props.navigation }/>
        <Map/>
        <Button style={{position:'absolute', }} title="Open drawer" onPress={() => props.navigation.openDrawer()} />
        <Button title="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
    </View>
    )
       
    
}