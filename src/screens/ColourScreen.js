import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColourScreen = () => {
    const [colours, setColours] = useState([]);

    return (
        <View>
            <Button
                title="Add a Colour"
                onPress={() => {
                    setColours([...colours, randomRgb()]);
                }}>
            </Button>

            <FlatList
                keyExtractor={item => item}
                data={colours}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                    );
                }}
            ></FlatList>
        </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColourScreen;