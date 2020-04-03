import React from 'react';
import { Text, View, Dimensions,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Login from './Login'
import HomeMap from '../screens/HomeMap' 
import Notifications from '../screens/Notifications'
import Test from '../screens/Test'
import HowItWorks from '../screens/HowItWorks'




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
      <Drawer.Screen name = "HowItWorks" component={HowItWorks}/>
    </Drawer.Navigator>
  
)

const Navigation = props =>(
    <NavigationContainer>
        <MyDrawer />
    </NavigationContainer>

)


export default Navigation;
