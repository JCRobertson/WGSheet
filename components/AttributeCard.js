import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import Colors from "../constants/Colors";

export default function AttributeCard(props) {
  return (
    <Card
      title={props.title}
      containerStyle={styles.attribute}
      titleStyle={styles.titleStyle}
    >
      <Text style={styles.numberText}>{props.text}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  attribute: {
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
    width: 107,
    marginHorizontal: 5,
    marginVertical: 10
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14
  },
  numberText: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },  
});
