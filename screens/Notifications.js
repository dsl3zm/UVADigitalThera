import React from 'react';
import { StyleSheet,View, Button, Text } from 'react-native';
import NavBar from './NavBar'
import Map from '../components/Map'


export default function Notifications(props){


    return(
    <View style={{ width:'100%',height:'100%' }}>
        <NavBar title='Notifications' navigation = {props.navigation }/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    </View>
    )
       
    
}
