import React from 'react';
import { StyleSheet,View, Button, Dimensions, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function NavBar(props){
   //Works just like a regular fucntion ex: 
   console.log(props)

   return(<View style={styles.container}> 
       <View style={styles.bar}>
           <Ionicons name="ios-menu" color="white" size={50}  onPress={() => props.navigation.openDrawer()}/>
           <Text style={styles.title}>{props.title}</Text>
           {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
       </View>
   </View>)
     
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'orange',
        color: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/7.5,
        top: 0,
        display: 'flex',
        flexDirection:'row',
        zIndex: 99999,
    },
    bar:{
        position:'absolute', 
        bottom:10,
        display: 'flex',
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        width:"100%"
    },
    title:{
        color:'white',
        fontSize: 30,


    }
  
  });