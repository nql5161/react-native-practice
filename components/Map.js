import MapView from 'react-native-maps';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const MapScreen = (props) => {
    const [latitude, setLatitude] = useState(39.9541);
    const [longitude, setLongitude] = useState(-75.1741);

    const getLatitudeHandler = (enteredLatitude) => {
        setLatitude(enteredLatitude);
    }

    const getLongitudeHandler = (enteredLongitude) => {
        setLongitude(enteredLongitude);
    }

    return (
        <React.Fragment>
            <MapView
                style={styles.mapContainer}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true} />
            <View style={styles.inputContainer}>
                <View style={styles.latitudeContainer}>
                    <TextInput placeholder="Enter latitude" onChangeText={getLatitudeHandler} />
                </View>
                <View style={styles.longitudeContainer}>
                    <TextInput placeholder="Enter longitude" onChangeText={getLongitudeHandler} />
                </View>
            </View>
            <View>
                <Button title="iOS Alert!" onPress={() => Alert.alert('iOS alert!')} />
            </View>
        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1
    },
    latitudeContainer: {
        alignItems: "center",
        flexDirection: "column"
    },
    longitudeContainer: {
        alignItems: "center",
        flexDirection: "column"
    },
    inputContainer: {
        flex: .5,
        paddingTop: 10,
        paddingBottom: 10
    },
    image: {
        aspectRatio: .5,
        resizeMode: 'contain'
    },
})

export default MapScreen;