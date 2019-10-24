import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import OfflineIndicator from './OfflineIndicator';

export default HomeScreen = ({ navigation }) => {
    return (
        <React.Fragment>
            <OfflineIndicator />
            <View style={styles.container}>
                <Button
                    title="Map"
                    onPress={() => navigation.navigate('Map')}
                />
                <Button
                    title="Camera"
                    onPress={() => navigation.navigate('Camera')}
                />
                <Button
                    title="Calendar"
                    onPress={() => navigation.navigate('Calendar')}
                />
                <Button
                    title="Offline"
                    onPress={() => navigation.navigate('Offline')}
                />
                <Button
                    title="Save"
                    onPress={() => navigation.navigate('Save')}
                />
            </View>
        </React.Fragment>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 35
    }
})