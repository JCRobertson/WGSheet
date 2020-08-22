import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import AttributeCard from "../components/AttributeCard";
import SkillListItem from "../components/SkillListItem";
import DarkCard from "../components/DarkCard";
import { MyContext } from '../components/MyContext'

export default function StatScreen() {
  const context = useContext(MyContext)
  let character = context.characters[context.selectedCharacter]
  let attributes = character.attributes;
  let skills = character.skills;
  return (
    <View style={styles.screen}>
      <ScrollView>
        <DarkCard wrapperStyle={styles.attributesWrapper}>
          <AttributeCard title="Strength" text={attributes.strength} />
          <AttributeCard title="Toughness" text={attributes.toughness} />
          <AttributeCard title="Agility" text={attributes.agility} />
          <AttributeCard title="Initiative" text={attributes.initiative} />
          <AttributeCard title="Willpower" text={attributes.willpower} />
          <AttributeCard title="Intellect" text={attributes.intellect} />
          <AttributeCard title="Fellowship" text={attributes.fellowship} />
        </DarkCard>
        <DarkCard>
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
        </DarkCard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  attributesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
