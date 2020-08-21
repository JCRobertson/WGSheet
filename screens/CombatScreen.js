import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import { Card, Button } from "react-native-elements";
import WeaponCard from "../components/WeaponCard";

export default function CombatScreen(props) {
  const uuid = require("uuid");
  let weapons = props.character.weapons.map((w) => ({
    id: uuid(),
    value: { w },
  }));

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Card
          containerStyle={styles.healthContainer}
          wrapperStyle={styles.healthContainerWrapper}
        >
          <Button title={"Wounds: " + props.character.traits.wounds} />
          <Button title={"Shock: " + props.character.traits.shock} />
        </Card>
        {weapons.map((w) => (
          <WeaponCard weapon={w.value.w} myKey={w.id} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  healthContainer: {
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
  healthContainerWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
});
