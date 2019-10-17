import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default HomeScreen = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={props.navigation.openDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
        </View>
      );
}