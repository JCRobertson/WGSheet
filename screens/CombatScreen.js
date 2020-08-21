import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import { Card, Divider } from "react-native-elements";
import WeaponCard from "../components/WeaponCard";
import MainButton from "../components/MainButton";
import PsychicPowerCard from "../components/PsychicPowerCard";

export default function CombatScreen(props) {
  const uuid = require("uuid");
  let weapons = props.character.weapons.map((w) => ({
    id: uuid(),
    value: { w },
  }));
  let powers = props.character.psychicPowers;
  let powersDivider;
  if (powers) {
    powersDivider = <Divider style={styles.divider}/>;
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Card
          containerStyle={styles.healthContainer}
          wrapperStyle={styles.healthContainerWrapper}
        >
          <MainButton title={"Wounds: " + props.character.traits.wounds} />
          <MainButton title={"Shock: " + props.character.traits.shock} />
        </Card>
        {weapons.map((w) => (
          <WeaponCard weapon={w.value.w} myKey={w.id} />
        ))}
        {powersDivider}
        {powers.map((p) => (
           <PsychicPowerCard power={p} />
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
  button: {
    color: Colors.foreground,
  },
  divider: {
      marginTop: 30,
      marginBottom: 5,
      backgroundColor: 'black',
      height: 1,
      shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
    width: '100%'
  }
});
