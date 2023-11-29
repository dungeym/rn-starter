import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

  return <View>
    <Text style={styles.text}>Hi there..</Text>
    <Button
      title='Go to Components screen'
      onPress={() => navigation.navigate('Components')}
    ></Button>
    <Button
      title='Go to List screen'
      onPress={() => navigation.navigate('List')}
    ></Button>
    <Button
      title='Go to Image screen'
      onPress={() => navigation.navigate('Image')}
    ></Button>
    <Button
      title='Go to Counter screen'
      onPress={() => navigation.navigate('Counter')}
    ></Button>
    <Button
      title='Go to Colour screen'
      onPress={() => navigation.navigate('Colour')}
    ></Button>
    <Button
      title='Go to Square screen'
      onPress={() => navigation.navigate('Square')}
    ></Button>
    <Button
      title='Go to Text screen'
      onPress={() => navigation.navigate('Text')}
    ></Button>
    <Button
      title='Go to Box screen'
      onPress={() => navigation.navigate('Box')}
    ></Button>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
