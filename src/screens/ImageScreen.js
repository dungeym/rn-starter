import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail
            title='Forest'
            imageSource={require('../../assets/forest.jpg')}
            score='9'>
        </ImageDetail>
        <ImageDetail
            title='Beach'
            imageSource={require('../../assets/beach.jpg')}
            score='10'>
        </ImageDetail>
        <ImageDetail
            title='Mountain'
            imageSource={require('../../assets/mountain.jpg')}
            score='11'>
        </ImageDetail>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default ImageScreen;