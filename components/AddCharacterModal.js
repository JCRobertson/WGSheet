import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { BlurView } from "expo-blur";

export default function AddCharacterModal(props) {
  return (
    <BlurView intensity={80} style={styles.screen}>
      <Text>In Modal</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
