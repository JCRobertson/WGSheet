import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import { Card, ListItem } from "react-native-elements";
import AttributeCard from "../components/AttributeCard";
import SkillListItem from "../components/SkillListItem";

export default function StatScreen(props) {
  let attributes = props.character.attributes;
  let skills = props.character.skills;
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Card
          containerStyle={styles.attributes}
          wrapperStyle={styles.attributesWrapper}
        >
          <AttributeCard title="Strength" text={attributes.strength} />
          <AttributeCard title="Toughness" text={attributes.toughness} />
          <AttributeCard title="Agility" text={attributes.agility} />
          <AttributeCard title="Initiative" text={attributes.initiative} />
          <AttributeCard title="Willpower" text={attributes.willpower} />
          <AttributeCard title="Intellect" text={attributes.intellect} />
          <AttributeCard title="Fellowship" text={attributes.fellowship} />
        </Card>
        <Card containerStyle={styles.attributes}>
          <SkillListItem title="Athletics" skillNumber={skills.athletics} keyNumber="0" />
          <SkillListItem title="Awareness" skillNumber={skills.awareness} keyNumber="1" />
          <SkillListItem title="Ballistic Skill" skillNumber={skills.ballisticSkill} keyNumber="2" />
          <SkillListItem title="Cunning" skillNumber={skills.cunning} keyNumber="3" />
          <SkillListItem title="Deception" skillNumber={skills.deception} keyNumber="4" />
          <SkillListItem title="Insight" skillNumber={skills.insight} keyNumber="5" />
          <SkillListItem title="Intimidation" skillNumber={skills.intimidation} keyNumber="6" />
          <SkillListItem title="Investigation" skillNumber={skills.investigation} keyNumber="7" />
          <SkillListItem title="Leadership" skillNumber={skills.leadership} keyNumber="8" />
          <SkillListItem title="Medicae" skillNumber={skills.medicae} keyNumber="9" />
          <SkillListItem title="Persuasion" skillNumber={skills.persuasion} keyNumber="10" />
          <SkillListItem title="Pilot" skillNumber={skills.pilot} keyNumber="11" />
          <SkillListItem title="Psychic Mastery" skillNumber={skills.psychicMastery} keyNumber="12" />
          <SkillListItem title="Scholar" skillNumber={skills.scholar} keyNumber="13" />
          <SkillListItem title="Stealth" skillNumber={skills.stealth} keyNumber="14" />
          <SkillListItem title="Survival" skillNumber={skills.survival} keyNumber="15" />
          <SkillListItem title="Tech Use" skillNumber={skills.techUse} keyNumber="16" />
          <SkillListItem title="Weapon Skill" skillNumber={skills.weaponSkill} keyNumber="17" />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  attributes: {
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
  attributesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
