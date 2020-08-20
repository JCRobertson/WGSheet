import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { ListItem } from "react-native-elements";

export default function SkillListItem(props) {
  return (
    <ListItem
      key={props.keyNumber}
      title={props.title}
      rightTitle={props.skillNumber}
      containerStyle={styles.listItem}
      titleStyle={styles.title}
      rightTitleStyle={styles.title}
      bottomDivider
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
});
