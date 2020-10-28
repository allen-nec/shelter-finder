import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableOpacity, Picker } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";


const SearchResultScreen = ({ navigation }) => {

  const [selectedValue, setSelectedValue] = useState("指定なし");

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>検索結果一覧</Text>
        <Text style={{ fontSize: 20, marginTop: 30 }}>現在の選択されている検索条件</Text>

        <View style={styles.tableRow}>
          <Text style={{ fontSize: 15, height: 40, width: 100, marginRight: 8, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' }}>避難所</Text>
          <Text style={{ fontSize: 15, height: 40, marginRight: 8, alignItems: 'center', justifyContent: 'left', }}>学校・公営施設、ホテル、民営施設、福祉避難所</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={{ fontSize: 15, height: 40, width: 100, marginRight: 8, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' }}>距離</Text>
          <Text style={{ fontSize: 15, height: 40, marginRight: 8, alignItems: 'center', justifyContent: 'left', }}>300m以内、300m以上500m未満、500m以上1km未満</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={{ fontSize: 15, height: 40, width: 100, marginRight: 8, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' }}>条件</Text>
          <Text style={{ fontSize: 15, height: 40, marginRight: 8, alignItems: 'center', justifyContent: 'left', }}>選択なし</Text>
        </View>

        <View style={styles.searchFliterBar}>
          <Text >1~10件/12件</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 30, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
            <Picker.Item label="指定なし" value="指定なし" />
            {/* <Picker.Item label="JavaScript" value="js" />  */}
          </Picker>
        </View>

        <TouchableOpacity style={styles.searchItem}>
          <Text >xx中学校</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text >川崎市立xx小学校</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text >川崎市立yyy中学校</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text >xxxホテル</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text >xx大学 xx寮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text >xｘ福祉施設</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text >県立yyy高等学校</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text >xxx防災センター</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text >ホテルxxx xx</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchItem}>
          <Text>yyy小学校</Text>
        </TouchableOpacity>

        <View style={styles.searchFliterBar}>
          <Text>1ページ目(2ページ中）</Text>
          <TouchableOpacity style={styles.buttonNextStyle}>
            <Text style={{ color: colors.black }}>次へ</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    flex: 1,
    backgroundColor: colors.backgrnd,
  },
  tableRow: {
    flex: 2,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderColor: colors.primary,
    borderStartWidth: 1,
    borderTopWidth: 1,
    borderEndWidth: 1,
    borderBottomWidth: 1,
  },
  searchFliterBar: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: colors.accent,
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "space-between",
    alignSelf: 'stretch',
    marginVertical: 10
  },
  searchItem: {
    flex: 1,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'left',
    justifyContent: 'left',
    borderColor: colors.primary,
    borderStartWidth: 1,
    borderTopWidth: 1,
    borderEndWidth: 1,
    borderBottomWidth: 1,
  },
  buttonNextStyle: {
    height: 30, width: 80, backgroundColor: colors.nextButton, alignItems: 'center', justifyContent: 'center', flext: 33,
  },
});

export default SearchResultScreen;