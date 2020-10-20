import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import TitleText from "./TitleText";
import Colors from "../constants/colors";

var icon = require("../assets/splash.png");

const Header = (props) => {
  return (
    <View style={styles.header}>
      {/* <TitleText>{props.title}</TitleText> */}
      <Image source={icon} style={{ width: 100, height: 1000 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
