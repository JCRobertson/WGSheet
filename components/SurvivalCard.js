import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "./MainButton";
import Colors from "../constants/Colors";
import DarkCard from "./DarkCard";

export default function SurvivalCard(props) {
  return (
    <DarkCard wrapperStyle={styles.cardWrapper}>
      <View style={styles.buttonContainer}>
        <MainButton
          title={"Wounds: " + props.traits.wounds}
          style={styles.button}
        />
        <MainButton
          title={"Shock: " + props.traits.shock}
          style={styles.button}
        />
      </View>
      <View style={styles.traitContainer}>
        <Text style={styles.title}>{"Defense: " + props.traits.defense}</Text>
        <Text style={styles.title}>
          {"Resilience: " + props.traits.resilience}
        </Text>
      </View>
      <View style={styles.traitContainer2}>
        <Text style={styles.title}>
          {"Conviction: " + props.traits.conviction}
        </Text>
        <Text style={styles.title}>{"Resolve: " + props.traits.resolve}</Text>
      </View>
    </DarkCard>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    paddingTop: 10
  },
  button: {
    color: Colors.foreground,
    width: 150,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  traitContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  traitContainer2: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    width: 150,
  },
});
