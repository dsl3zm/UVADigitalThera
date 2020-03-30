import React from 'react';
import { StyleSheet, Text, View, Dimensions,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Map from './Map'
import Test from './Test'
import Login from './Login'

const HomeMap = ({ navigation }) => (

    <View style={{ width:'100%',height:'100%' }}>
      <NavBar title='HomeMap'/>
      <Map/>
      <Button style={{position:'absolute', }} title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
);



const NavBar = (props) => (
  <View style={styles.container}> 
      <View style={styles.bar}>
          <Ionicons name="ios-menu" color="white" size={50}  onPress={() => navigation.openDrawer()}/>
          <Text style={styles.title}>{props.title}</Text>
          {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
      </View>
  </View>
)

const Notifications = () => (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>

);

const CustomDrawerContent = (props) => (

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>

);

const Drawer = createDrawerNavigator();

const MyDrawer = () => (

    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="HomeMap" component={HomeMap} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Test" component={Test} />
      <Drawer.Screen name="Login" component={Login}/>
    </Drawer.Navigator>
  
)



const Navigation = props =>(
    <NavigationContainer>
        <MyDrawer />
    </NavigationContainer>

)


export default Navigation;
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