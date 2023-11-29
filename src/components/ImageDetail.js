import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({imageSource, title, score}) => {
    return <View>
        <Image source={imageSource}></Image>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>Image Score - {score}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;