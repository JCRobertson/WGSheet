import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { Card } from "react-native-elements";

export default function OtherScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.titleName} >
        <Text style={styles.titleText}>Talents</Text>
      </View>
      <Card
        containerStyle={styles.Container}
        wrapperStyle={styles.talentContainerWrapper}
      ></Card>
      <View style={styles.titleName} >
        <Text style={styles.titleText}>Notes</Text>
      </View>
      <Card
        containerStyle={styles.Container}
        wrapperStyle={styles.talentContainerWrapper}
      ></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  Container: {
    backgroundColor: Colors.primary,
    borderColor: "black",
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    paddingBottom: 15,
  },
  title: {
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginTop: 15,
    fontSize: 20,
  },
});
