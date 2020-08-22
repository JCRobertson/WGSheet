import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import DarkCard from "../components/DarkCard";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import TraitCard from "../components/TraitCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MyContext } from "../components/MyContext";

export default function OtherScreen() {
  const context = useContext(MyContext);
  let character = context.characters[context.selectedCharacter];
  let traits = character.traits;
  let info = character.info;
  let talents = character.talents;
  return (
    <View style={styles.screen}>
      <TraitCard traits={traits} />
      <TouchableOpacity>
        <DarkCard>
          <TitleText>Talents</TitleText>
          <Text style={styles.detailText}>{talents[0].name}</Text>
        </DarkCard>
      </TouchableOpacity>
      <DarkCard>
        <TitleText>Notes</TitleText>
        <Text style={styles.detailText}>{info.notes}</Text>
      </DarkCard>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  detailText: {
    color: "white",
    margin: 15,
    fontSize: 15,
  },
});
