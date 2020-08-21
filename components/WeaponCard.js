import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import Colors from "../constants/Colors";
import { Table, Row } from "react-native-table-component";

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
    <View style={styles.weaponName} key={props.key}>
    <Text style={styles.weaponNameText}>{props.weapon.name}</Text>
  </View>
    <Card containerStyle={styles.card}>
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
    </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
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
  weaponName: {
    justifyContent: "center",
  },
  weaponNameText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginTop: 15,
    fontSize: 20,
  },
});
