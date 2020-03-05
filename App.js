import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Map from './components/Map'
import NavBar from './components/NavBar'

import * as Font from 'expo-font'

function HomeMap({ navigation }) {
  return (
    <View style={{ }}>
      <NavBar title='HomeMap'/>
      <Text>HomeMap Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
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
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="HomeMap" component={HomeMap} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  componentDidMount(); {
    Font.loadAsync({
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
    });
  }
  return (  
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
