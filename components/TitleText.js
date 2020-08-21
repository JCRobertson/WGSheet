import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TitleText(props) {
  return (
    <View style={{ ...styles.titleView, ...props.viewStyle }}>
      <Text style={{ ...styles.titleText, ...props.textStyle }}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 20,
  },
});
