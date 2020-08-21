import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/Colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{...props.style, ...styles.button}}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.foreground,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: 'center'
  },
});

export default MainButton;
