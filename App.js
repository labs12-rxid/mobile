import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
};

const AppDrawerNavigator = createDrawerNavigator({
  Home: Home,
  About: About
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(AppDrawerNavigator);
