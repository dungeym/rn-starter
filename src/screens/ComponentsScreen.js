import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myname = "Marky-Mark";
    return (
        <View>
            <Text style={styles.headerStyle}>Getting started with React Native</Text>
            <Text style={styles.textStyle}>My name is {myname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;