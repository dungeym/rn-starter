import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColourCounter = ({ colour, onIncrease, onDecrease }) => {

    return <View>
        <Text>{colour}</Text>
        <Button title={`Increase ${colour}`} onPress={() => onIncrease()}></Button>
        <Button title={`Decrease ${colour}`} onPress={() => onDecrease()}></Button>
    </View>
};

const styles = StyleSheet.create({});

export default ColourCounter;