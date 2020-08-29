import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import TitleText from "./TitleText";
import { ScrollView } from "react-native-gesture-handler";

export default function AddCharacterModal(props) {
  const [character, setCharacter] = useState({})
    return (
    <BlurView intensity={80} style={styles.screen}>
      <BlurView intensity={80} tint="dark" style={styles.contentContainer}>
        <ScrollView>
          <TitleText>Add Character</TitleText>
        </ScrollView>
      </BlurView>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    height: "30%",
    width: "80%",
    borderRadius: 20,
    padding: 10,
  },
});
