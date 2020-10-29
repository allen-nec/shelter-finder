import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Colors from "../constants/colors";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";
import CategoryGridTile from "../components/CategoryGridTile";

const HomeScreen = ({ navigation }) => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        nav={navigation}
        desc={itemData.item.desc}
        icon={itemData.item.icon}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={{ padding: 10 }}>
        {/* <Button
          title="Reminder"
          onPress={() => navigation.navigate("Reminder")}
        /> */}

        <Text style={styles.subtitle}>避難所を探す</Text>

        <SafeAreaView style={styles.container}>
          <FlatList
            scrollEnabled={true}
            numColumns={3}
            data={DATA1}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>

        <Text style={styles.subtitle}>災害情報を見る</Text>

        <SafeAreaView style={styles.container}>
          <FlatList
            scrollEnabled={true}
            numColumns={3}
            data={DATA2}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>

      </View>
      
      <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.thirdtitle}>避難所を登録される方はこちら</Text>
        </TouchableOpacity>
    </View>
  );
};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.primary,
    width: "100%",
    height: 90,
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  subtitle: {
    flex: 1,
    color: Colors.black,
    fontSize: 20,
    marginBottom: 10,
    marginTop: 30,
    fontWeight: 'bold',
  },
  thirdtitle: {
    padding: 10,
    flex: 1,
    color: Colors.white,
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    height: 25,
    width: 400,
    textAlign:'center',
    backgroundColor: colors.register
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  ImageIconStyle: { height: 50, width: 50 },
  btn:
  {
    backgroundColor: colors.accent,
    height: 100,
    width: 100,
    borderRadius: 5
  },
});

const DATA1 = [
  {
    id: "1",
    title: "FindLocation",
    desc: "現在地の近くから探す",
    icon: "../assets/Reminder.png",
  },
  {
    id: "2",
    title: "",
    desc: "市町村区から探す",
  },
  {
    id: "3",
    title: "FilterSearchScreen",
    desc: "条件から探す",
  },
];

const DATA2 = [
  {
    id: "1",
    title: "SearchResultScreen",
    desc: "ハザードマップを見る",
    icon: "../assets/Reminder.png",
  },
  {
    id: "2",
    title: "ShelterDetailPage",
    desc: "安否確認をする",
  },
];


export default HomeScreen;
