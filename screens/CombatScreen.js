import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import WeaponCard from "../components/WeaponCard";
import PsychicPowerCard from "../components/PsychicPowerCard";
import TitleText from "../components/TitleText";
import SurvivalCard from "../components/SurvivalCard";

export default function CombatScreen(props) {
  const uuid = require("uuid");
  let weapons = props.character.weapons.map((w) => ({
    id: uuid(),
    value: { w },
  }));
  let powers = props.character.psychicPowers;
  let powersDivider;
  if (powers) {
    powersDivider = (
      <TitleText viewStyle={styles.titleView} textStyle={styles.titleText}>
        Powers
      </TitleText>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <SurvivalCard traits={props.character.traits} />
        <TitleText viewStyle={styles.titleView} textStyle={styles.titleText}>
          Weapons
        </TitleText>
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
  titleView: {
    marginTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 30,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
