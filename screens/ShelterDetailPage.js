import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";
//import PieChart from 'react-native-pie-chart';
//import Pie from 'react-native-pie'


const ShelterDetailPage = ({ navigation }) => {
  var petto = require("../assets/inu.png");
  var shikiri = require("../assets/shikiri.png");
  var mofu = require("../assets/mofu.png");
  var follow = require("../assets/follow.png");
  var shelter = require("../assets/shelter-in-place.png");

  const chart_wh = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.titleBar}>
          <Text style={{ fontSize: 20, }}>川崎市立xx小学校</Text>
          <TouchableOpacity style={styles.buttonFollowStyle}>
            <Image source={follow} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10 }} />
            <Text style={{ color: colors.primary, fontSize: 15 }}>フォローする</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableRow}>
          <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left' }}>所在地： </Text>
          <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left', }}>川崎市中原区下小田中xx-x-x</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left' }}>代表電話： </Text>
          <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left', }}>044-xxx-xxxx</Text>
        </View>

        <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left', marginTop: 20, }}>10月2日 15:00</Text>
        <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left' }}>現在の収容状況</Text>

        <Text style={{ fontSize: 15, width: 150, alignItems: 'center', justifyContent: 'left', marginTop: 16, marginBottom: 20, }}>現在、150世帯中７0世帯が滞在しており、空きがあります</Text>

        <View style={styles.tableOptionsRow}>
          <Image source={petto} style={{ width: 50, height: 50, resizeMode: 'contain', marginRight: 16 }} />
          <View style={{ flex: 1, flexDirection: "column", marginLeft: 20, }}>
            <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left', }}>ペットの同伴可能</Text>
            <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left', }}>※別棟に避難いただきます</Text>
          </View>
        </View>
        <View style={styles.tableOptionsRow}>
          <Image source={shikiri} style={{ width: 50, height: 50, resizeMode: 'contain', marginRight: 16 }} />
          <View style={{ flex: 1, flexDirection: "column", marginLeft: 20, }}>
            <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left', }}>仕切りあり</Text>
            <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left', }}>※数に限りがありますが、段ボールの仕切りがあります</Text>
          </View>
        </View>
        <View style={styles.tableOptionsRow}>
          <Image source={mofu} style={{ width: 50, height: 50, resizeMode: 'contain', marginRight: 16 }} />
          <View style={{ flex: 1, flexDirection: "column", marginLeft: 20, }}>
            <Text style={{ fontSize: 15, alignItems: 'center', justifyContent: 'left', }}>毛布あり</Text>
          </View>
        </View>

        <Text style={{ fontSize: 18, fontWeight: "bold" }}>避難所からのお知らせ</Text>
        <Text style={{ fontSize: 18}}>37.5度以上の熱のある方、咳など風邪の症状がある方は受付の係員にお知らせください食料品、水、その他必需品などは各自ご用意ください</Text>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20,  marginBottom: 20 }}>近くの空のある避難所</Text>
        <View style={styles.detailViewBar}>
          <Text style={{ fontSize: 18, }}>xx中学校</Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: colors.white, fontSize: 15 }}>詳細を見る</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailViewBar}>
          <Text style={{ fontSize: 18, }}>川崎市立xx小学校</Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: colors.white, fontSize: 15 }}>詳細を見る</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20,  marginBottom: 20 }}>近くの空きのある施設</Text>
        <View style={styles.detailViewBar}>
          <Text style={{ fontSize: 18, }}>xxxホテル</Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: colors.white, fontSize: 15 }}>詳細を見る</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailViewBar}>
          <Text style={{ fontSize: 18, }}>ホテルxxx xx</Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: colors.white, fontSize: 15 }}>詳細を見る</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailViewBar}>
          <Text style={{ fontSize: 18, }}>xx大学 xx寮</Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: colors.white, fontSize: 15 }}>詳細を見る</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailViewBar}>
          <Text style={{ fontSize: 18, }}>xｘ福祉施設</Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: colors.white, fontSize: 15 }}>詳細を見る</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10}}>避難所の様子</Text>
        <Image source={shelter} style={{ width: 500, height: 500, }} />




      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  searchbar: {
    flex: 2, padding: 10, flexDirection: 'row', backgroundColor: colors.accent, alignSelf: 'stretch', marginVertical: 10
  },
  checkboxbar: {
    flex: 1, padding: 10, flexDirection: 'row', backgroundColor: colors.accent, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'left', marginVertical: 10
  },
  tableOptionsRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: "center",
  },
  titleBar: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-between",
    alignSelf: 'stretch',
    marginVertical: 10
  },
  tableRow: {
    flex: 2,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  buttonFollowStyle: {
    height: 30, 
    width: 120, 
    flexDirection: 'row',
    backgroundColor: colors.white, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flext: 33,
    borderRadius: 5,
    borderColor: colors.primary,
    borderStartWidth: 3,
    borderTopWidth: 3,
    borderEndWidth: 3,
    borderBottomWidth: 3,
  },
  buttonStyle: { 
    height: 25, 
    width: 100, 
    backgroundColor: colors.primary, 
    alignItems: 'center', 
    justifyContent: 'center' 
   },
   detailViewBar: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: "space-between",
    alignSelf: 'stretch',
    marginVertical: 10
  },
});

export default ShelterDetailPage;