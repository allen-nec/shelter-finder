import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import colors from "../constants/colors";
//import { CheckBox } from 'react-native-elements'



const FindLocation = ({ navigation }) => {
  var icon1 = require("../assets/map1.png");
  var icon2 = require("../assets/map2.png");
  var icon3 = require("../assets/map3.png");
  var map = require("../assets/mapwithpin.png");

      onclick = () => {
        console.log('On click works')
    };

  return (
    <View style={styles.screen}>
      <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>あなたの近くの避難所の表示</Text>
      <Text style={{ fontSize: 20, marginBottom: 30 }}> 住所：神奈川県川崎市中原区</Text>

      <View style={styles.locationTitleBar}>
        <Image source={icon1} style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 8 }} />
        <Text>満室になりました</Text>
        <Image source={icon2} style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 8, marginLeft: 30 }} />
        <Text>満室になりそうです</Text>
        <Image source={icon3} style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 8, marginLeft: 30 }} />
        <Text>空があります</Text>
      </View>

      <View style={{flex:1, flexDirection: 'column'}}>
          <Image  source={map} style={{ width: 600, height: 500, resizeMode: 'contain', marginRight: 8 }} />
      </View>

      <View style={{flex: 2, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() =>  console.log("log")} style={{ height: 40, width: 100, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginRight: 2 }}>
          <Text style={{ color: colors.white }}>避難所</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{ height: 40, width: 100, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', opacity: 0.2}}>
          <Text style={{ color: colors.white }}>ハザードマップ</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 2,
    backgroundColor: colors.white,

  },
  locationTitleBar: {
    flex: 1,
    width: 600,
    maxHeight: 50,
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderStartWidth: 3,
    borderTopWidth: 3,
    borderEndWidth: 3,
    borderBottomWidth: 3,
  },
});

export default FindLocation;