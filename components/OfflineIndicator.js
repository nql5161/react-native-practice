import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

const OfflineIndicator = () => {

    const netInfo = useNetInfo();

    const isConnected = netInfo.isConnected;
    // const listenForChange = NetInfo.addEventListener(status => {
    //     setIsConnected(status.isConnected);
    // })

    const connectedText = netInfo.isConnected ? "You are online" : "You are offline";

    return (
        <React.Fragment>
            <View style={ isConnected ? '' : styles.offlineContainer}>
                <Text style={ isConnected ? '' : styles.offlineText}>
                    {isConnected ? '' : connectedText}
                </Text>
            </View>
        </React.Fragment>

    )


}

const styles = StyleSheet.create({
    offlineContainer: {
      backgroundColor: '#b52424',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: "100%",
      position: 'absolute',
      top: 30
    },
    offlineText: { 
      color: '#fff'
    }
  });

export default OfflineIndicator;