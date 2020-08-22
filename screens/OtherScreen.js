import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DarkCard from "../components/DarkCard";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import TraitCard from "../components/TraitCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MyContext } from "../components/MyContext";

export default function OtherScreen(props) {
  let context = React.useContext(MyContext);
  let traits = context.characters[0].traits;
  let info = props.character.info;
  let talents = props.character.talents;
  return (
    <View style={styles.screen}>
      <TraitCard traits={traits} />
      <TouchableOpacity>
        <DarkCard>
          <TitleText>Talents</TitleText>
          <Text style={styles.detailText}>
            {context.characters[0].talents[0].name}
          </Text>
        </DarkCard>
      </TouchableOpacity>
      <DarkCard>
        <TitleText>Notes</TitleText>
        <Text style={styles.detailText}>
          {context.characters[0].info.notes}
        </Text>
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
