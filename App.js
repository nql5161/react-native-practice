import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './components/HomeScreen';
import MapScreen from './components/Map';
import CameraScreen from './components/CameraScreen';
import CalendarScroll from './components/Calendar';
import OfflineIndicator from './components/OfflineIndicator';
import AsyncExample from './components/ReadFromFile';

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    Camera: CameraScreen,
    Calendar: CalendarScroll,
    Offline: OfflineIndicator,
    Save: AsyncExample
  },
  {
    initialRouteName: 'Home',
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);



// const styles = StyleSheet.create({
//   screen: {
//     padding: 50,
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//   },
//   image: {
//     aspectRatio: .5,
//     resizeMode: 'contain'
//   },
//   drawer: {
//     shadowColor: '#000000',
//     shadowOpacity: 0.8,
//     shadowRadius: 3
//   }
// });

export default App = createAppContainer(StackNavigator);
