import MapView from 'react-native-maps';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const MapScreen = (props) => {
    const [coordinates, setCoordinates] = useState([39.9541, -75.1741]);
    const [latitude, setLatitude] = useState(39.9541);
    const [longitude, setLongitude] = useState(-75.1741);

    const getLatitudeHandler = (enteredLatitude) => {
        // if (enteredLatitude){
        //     Alert.alert(
        //         'Empty latitude',
        //         'Please enter a valid latitude',
        //         [{text: 'OK'}]
        //     )
        // }
        setLatitude(enteredLatitude);
    }

    const getLongitudeHandler = (enteredLongitude) => {
        setLongitude(enteredLongitude);
    }

    return (
        <React.Fragment>
            <View style={{ flex: .2, justifyContent: 'center', alignItems: 'left' }}>
                <TouchableOpacity onPress={props.navigation.openDrawer}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Map</Text>
            </View>
            <MapView
                style={styles.mapContainer}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true} />
            <View style={styles.latitudeContainer}>
                <TextInput placeholder="Enter latitude"/>
                <Button title="Set latitude" onPress={() => getLatitudeHandler(props)} />
            </View>
            <View style={styles.longitudeContainer}>
                <TextInput placeholder="Enter longitude"/>
                <Button title="Set longitude" onPress={() => getLongitudeHandler(props)} />
            </View>
            <View>
                <Button title="iOS Alert!" onPress={() => Alert.alert('iOS alert!')}/>
            </View>
        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: .8
    },
    latitudeContainer: {
        alignItems: "center",
        flexDirection: "column"
    },
    longitudeContainer: {
        alignItems: "center",
        flexDirection: "column"
    }
})

export default MapScreen;