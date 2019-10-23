import React, { Component, useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'

const AsyncExample = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);



    //get name that was entered
    useEffect(() => {
        const fetchName = async () => {
            result = await AsyncStorage.getItem('name');
            setName(result);
        }
        fetchName()
    }, []
    )

    //save name to local storage (persists)
    useEffect(() => {
        const saveName = async (value) => {
            AsyncStorage.setItem('name', value);
            setName(value);
        }
        saveName(name)
    }, [name])
    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter name" autoCapitalize='none'
                onChangeText={setName} />
            <Text>
                {name}
            </Text>
        </View>
    )
}
export default AsyncExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        width: 100,
        height: 25,
        borderWidth: 1,
        backgroundColor: '#7685ed'
    }
})