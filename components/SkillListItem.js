import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { ListItem } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SkillListItem(props) {
  return (
    <TouchableOpacity>
      <ListItem
        key={props.keyNumber}
        title={props.title}
        rightTitle={props.skillNumber.toString()}
        containerStyle={styles.listItem}
        titleStyle={styles.title}
        rightTitleStyle={styles.title}
        bottomDivider
      />
    </TouchableOpacity>
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
