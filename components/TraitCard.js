import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DarkCard from "./DarkCard";

export default function TraitCard(props) {
    return (
    <DarkCard>
      <View style={styles.traitContainer}>
        <Text style={styles.title}>
          {"Influence: " + props.traits.influence}
        </Text>
        <Text style={styles.title}>{"Wealth: " + props.traits.wealth}</Text>
      </View>
      <View style={styles.traitContainer2}>
        <Text style={styles.title}>
          {"Corruption: " + props.traits.corruption}
        </Text>
        <Text style={styles.title}>{"Faith: " + props.traits.faith}</Text>
      </View>
    </DarkCard>
  );
}

const styles = StyleSheet.create({
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
