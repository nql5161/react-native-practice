import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MapScreen from './components/Map';
import CameraScreen from './components/CameraScreen';
import CalendarScroll from './components/Calendar';
const HomeScreen = (props) => {
  return (
    <React.Fragment>
      <View style={styles.screen}>
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Image source={require('./assets/icons8-menu-50.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <Text>Hi Canada!</Text>
      </View>
    </React.Fragment>
  );
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    Camera: CameraScreen,
    Calendar: CalendarScroll
    // EditImage: EditImageDemo,
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
    padding: 50,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    aspectRatio: .5,
    resizeMode: 'contain'
  },
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  }
});

export default App = createAppContainer(DrawerNavigator);
