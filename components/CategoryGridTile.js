import React from "react";
import {
  Button,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import colors from "../constants/colors";

const CategoryGridTile = (props) => {
  //Set icons according to the title
  if (props.title == "現在地の近くから探す") {
    var icon = require("../assets/Reminder.png");
  } else {
    var icon = require("../assets/splash.png");
  }
  //var icon = require("../assets/Reminder.png");
  return (
    <View>
      <View style={styles.gridItem}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => props.nav.navigate(props.title)}
        >
          <View style={{ ...styles.container }}>
            <Image source={icon} style={{ width: 150, height: 150 }} />
          </View>

        </TouchableOpacity>
      </View>
      <Text style={styles.parent} numberOfLines={2}>{props.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
  },
  imageSize: {
    height: 150,
  },
  gridItem: {
    margin: 10,
    height: 150,
    width: 150,
    shadowOpacity: 0.26,
    borderRadius: 10,
    backgroundColor: colors.accent,
    overflow: "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "center", //grid item letters
    alignItems: "center",
  },
  title: {
    color: colors.icon,
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTile;
