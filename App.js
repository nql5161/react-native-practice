import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity, Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Map from './components/Map';
// import HomeScreen from './views/HomeScreen';
import MapScreen from './components/Map';
const HomeScreen = (props) => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
      </View>
    );
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  }
});

export default App = createAppContainer(DrawerNavigator);
