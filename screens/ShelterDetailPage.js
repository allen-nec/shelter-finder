import React from "react";
import { View, Text, Button, StyleSheet, ScrollView,  TextInput, TouchableOpacity, CheckBox} from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";


const ShelterDetailPage = ({ navigation }) => {
    return (
        <View style={styles.screen}>
          <ScrollView>
        
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
  });

  export default ShelterDetailPage;