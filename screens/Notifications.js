import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
//import { Notifications } from 'expo';
import NavBar from './NavBar'
import PushNotification from '../components/NotificationStruct';
import Map from '../components/Map'


export default function Notifications(props){


    return(

    <View style={{ width:'100%',height:'100%' }}>
        <NavBar title='Notifications' navigation = {props.navigation }/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
            <PushNotification/>
       </View>
    </View>
    )
       
    
}
