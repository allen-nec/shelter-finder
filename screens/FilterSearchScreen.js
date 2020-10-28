import React from "react";
import { View, Text, Button, StyleSheet, ScrollView,  TextInput, TouchableOpacity, CheckBox} from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";


const FilterSearchScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
          <ScrollView>
          <View style={styles.searchbar}>
               <TextInput
                style={{height: 40, width: 300, backgroundColor: colors.white, borderColor: colors.black, marginRight: 20}}
                placeholder="条件を入力"/>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{color: colors.white}}>検索</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.checkboxbar}>
               <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text>すべての避難所</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end"}}>
               <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text >学校・公営施設</Text>
               <CheckBox style={{marginRight: 8, marginLeft: 70,}}></CheckBox>
               <Text>ホテル</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end"}}>
                <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text>民営施設</Text>
               <CheckBox style={{marginRight: 8, marginLeft: 70,}}></CheckBox>
               <Text>福祉避難所</Text>
            </View>


            <View style={styles.checkboxbar}>
               <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text>現在地からの距離をすべて選択</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end"}}>
               <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text >300m以内</Text>
               <CheckBox style={{marginRight: 8, marginLeft: 70,}}></CheckBox>
               <Text>300m以上500m未満</Text>
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
             <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end", marginTop: 5}}>
                <CheckBox style={{marginRight: 8}}></CheckBox>
                <Text>500m以上1km未満</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end", marginTop: 5}}>
                <CheckBox style={{marginRight: 8,}}></CheckBox>
                <Text>1km以上</Text>
               </View>
            </View>


            <View style={styles.checkboxbar}>
               <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text>すべての条件</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end"}}>
               <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text >ペット可能</Text>
               <CheckBox style={{marginRight: 8, marginLeft: 70,}}></CheckBox>
               <Text>仕切りあり</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end"}}>
                <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text>食事あり</Text>
               <CheckBox style={{marginRight: 8, marginLeft: 70,}}></CheckBox>
               <Text>毛布貸し出しあり</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end"}}>
                <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text>個室あり</Text>
               <CheckBox style={{marginRight: 8, marginLeft: 70,}}></CheckBox>
               <Text>要介護者・障害者に配慮した設備有</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end"}}>
                <CheckBox style={{marginRight: 8}}></CheckBox>
               <Text>授乳スペースあり</Text>
               <CheckBox style={{marginRight: 8, marginLeft: 70,}}></CheckBox>
               <Text>マットレスあり</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', margin: 5, flexWrap: "wrap",alignContent: "flex-end", marginTop: 5}}>
                <CheckBox style={{marginRight: 8,}}></CheckBox>
                <Text>充電ケーブルあり</Text>
              </View>
            
            <TouchableOpacity style={{ height: 40, width: 100, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                    <Text style={{color: colors.white}}>検索</Text>
            </TouchableOpacity>

          </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      margin: 20,
      flex: 1,
      backgroundColor: colors.backgrnd,
      justifyContent: "center",
    },
    searchbar: {
      flex: 2, padding: 10, flexDirection: 'row', backgroundColor: colors.accent, alignSelf: 'stretch',marginVertical: 10
    },
    checkboxbar: {
      flex: 1, padding: 10,  flexDirection: 'row', backgroundColor: colors.accent, alignSelf: 'stretch',alignItems: 'center',justifyContent: 'left', marginVertical: 10
    },
    buttonStyle: { 
       height: 40, width: 100, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' 
      },
  });

  export default FilterSearchScreen;