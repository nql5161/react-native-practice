import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const TouchableIcon = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={props.navigation.openDrawer}>
            <Image source={require('../assets/icons8-menu-50.png')}/>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
        </View>
      );
  }

  const styles = StyleSheet.create({
      
  })