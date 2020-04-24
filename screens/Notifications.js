import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
//import { Notifications } from 'expo';
import NavBar from './NavBar'
import Timer from '../components/Timer'
import PushNotification from '../components/NotificationStruct';
import Map from '../components/Map'


export default function Notifications(props){


    return(

    <View style={{ flex: 2, width:'100%', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'auto' }}>
        <NavBar title='Notifications' navigation = {props.navigation }/>
        <View style={{ flex: 2, height:'50%', justifyContent: 'flex-end', alignSelf: 'auto', alignContent: 'flex-end'}}> 
            <PushNotification/>
       </View>
    </View>
    )
       
    
}
