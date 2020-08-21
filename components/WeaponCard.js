import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import Colors from "../constants/Colors";
import { Table, Row } from "react-native-table-component";
import TitleText from "./TitleText";
import DarkCard from "./DarkCard";

export default function WeaponCard(props) {
  const header1 = ["Damage", "ED", "AP", "Salvo"];
  const row1 = [
    props.weapon.damage,
    props.weapon.ed,
    props.weapon.ap,
    props.weapon.salvo,
  ];
  const header2 = ["Short", "Medium", "Long"];
  const row2 = [
    props.weapon.rangeShort,
    props.weapon.rangeMedium,
    props.weapon.rangeLong,
  ];
  return (
    <TouchableOpacity>
      <DarkCard>
        <TitleText>{props.weapon.name}</TitleText>
        <Table style={styles.table}>
          <Row
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
            data={["Range"]}
            textStyle={styles.headerText}
            style={styles.header}
          />
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
