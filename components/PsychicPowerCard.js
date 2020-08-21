import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import Colors from "../constants/Colors";
import { Table, Row } from "react-native-table-component";

export default function PsychicPowerCard(props) {
  let power = props.power;
  const header1 = ["DN", "Activation", "Duration", "Range",];
  const row1 = [power.dn, power.activation, power.duration, power.range,];
  const header2 = [ "Target", "Effect"];
  const row2 = [power.target, power.effect];
  return (
    <TouchableOpacity>
      <View style={styles.powerName} key={props.key}>
        <Text style={styles.powerNameText}>{power.name}</Text>
      </View>
      <Card containerStyle={styles.card}>
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
  powerName: {
    justifyContent: "center",
  },
  powerNameText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginTop: 15,
    fontSize: 20,
  },
});
