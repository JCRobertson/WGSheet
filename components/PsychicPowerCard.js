import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Table, Row } from "react-native-table-component";
import TitleText from "./TitleText";
import DarkCard from "./DarkCard";

export default function PsychicPowerCard(props) {
  let power = props.power;
  const header1 = ["DN", "Activation", "Duration", "Range",];
  const row1 = [power.dn, power.activation, power.duration, power.range,];
  const header2 = [ "Target", "Effect"];
  const row2 = [power.target, power.effect];
  return (
    <TouchableOpacity key={props.myKey}>
      <DarkCard>
      <TitleText>{power.name}</TitleText>
        <Table style={styles.table}>
          <Row
            adjustsFontSizeToFit  
            numberOfLines={1}
            data={header1}
            textStyle={styles.headerText}
            style={styles.header}
          />
          <Row
            adjustsFontSizeToFit
            numberOfLines={1}
            data={row1}
            textStyle={styles.rowText}
            style={styles.row}
          />
        </Table>
        <Table style={styles.table}>
          <Row
            data={header2}
            textStyle={styles.headerText}
            style={styles.header}
          />
          <Row data={row2} textStyle={styles.rowText} style={styles.row} />
        </Table>
      </DarkCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  table: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  header: {
    backgroundColor: Colors.secondary,
    alignItems: "center",
  },
  row: {},
  rowText: {
    color: "white",
    margin: 10,
    textAlign: "center",
  },
});
