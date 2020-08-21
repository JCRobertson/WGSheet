import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import Colors from "../constants/Colors";

export default function DarkCard(props) {
  return (
    <Card
      containerStyle={{ ...styles.container, ...props.containerStyle }}
      wrapperStyle={{ ...styles.containerWrapper, ...props.wrapperStyle }}
    >
      {props.children}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
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
  containerWrapper: {
    justifyContent: "space-around",
  },
});
