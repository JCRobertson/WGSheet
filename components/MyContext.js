import React, { useState } from "react";
import { set } from "react-native-reanimated";

export const MyContext = React.createContext();

export const CharacterProvider = (props) => {
  const [characters, setCharacters] = useState([
    {
      id: "0",
      info: {
        name: "James",
        tier: 1,
        rank: 1,
        species: "human",
        faction: "admech",
        archetype: "skitarii",
        xpTotal: 100,
        currentXp: 0,
        keywords: "imperium",
        objectives: "objectives",
        background: "background",
        description: "description",
        injuries: "injuries",
        mutations: "mutations",
        notes: "notes",
      },
      attributes: {
        strength: 1,
        toughness: 2,
        agility: 3,
        initiative: 4,
        willpower: 5,
        intellect: 6,
        fellowship: 7,
      },
      skills: {
        athletics: 1,
        awareness: 2,
        ballisticSkill: 3,
        cunning: 4,
        deception: 5,
        insight: 6,
        intimidation: 7,
        investigation: 8,
        leadership: 9,
        medicae: 10,
        persuasion: 11,
        pilot: 12,
        psychicMastery: 13,
        scholar: 14,
        stealth: 15,
        survival: 16,
        techUse: 17,
        weaponSkill: 18,
      },
      traits: {
        wounds: 1,
        shock: 2,
        defense: 3,
        resilience: 4,
        conviction: 5,
        resolve: 6,
        influence: 7,
        wealth: 8,
        corruption: 9,
        faith: 10,
      },
      armor: [
        {
          name: "Rosarius",
          ar: 5,
          traits: "traits",
        },
      ],
      weapons: [
        {
          name: "Chainsword",
          damage: 1,
          ed: 2,
          ap: 3,
          salvo: 0,
          rangeShort: 0,
          rangeMedium: 0,
          rangeLong: 0,
          traits: "traits",
        },
        {
          name: "Laspistol",
          damage: 1,
          ed: 2,
          ap: 3,
          salvo: 4,
          rangeShort: 10,
          rangeMedium: 20,
          rangeLong: 30,
          traits: "traits",
        },
      ],
      psychicPowers: [
        {
          name: "Smite",
          dn: "3",
          activation: "activation",
          duration: "duration",
          range: "range",
          target: "target",
          effect: "effect",
        },
      ],
      talents: [
        {
          name: "fast",
          cost: 20,
          descrtption: "description",
        },
      ],
    },
    {
      id: "1",
      info: {
        name: "Ralk",
        tier: 1,
        rank: 1,
        species: "eldar",
        faction: "aeladri",
        archetype: "ranger",
        xpTotal: 100,
        currentXp: 0,
        keywords: "imperium",
        objectives: "objectives",
        background: "background",
        description: "description",
        injuries: "injuries",
        mutations: "mutations",
        notes: "notes",
      },
      attributes: {
        strength: 1,
        toughness: 2,
        agility: 3,
        initiative: 4,
        willpower: 5,
        intellect: 6,
        fellowship: 7,
      },
      skills: {
        athletics: 1,
        awareness: 2,
        ballisticSkill: 3,
        cunning: 4,
        deception: 5,
        insight: 6,
        intimidation: 7,
        investigation: 8,
        leadership: 9,
        medicae: 10,
        persuasion: 11,
        pilot: 12,
        psychicMastery: 13,
        scholar: 14,
        stealth: 15,
        survival: 16,
        techUse: 17,
        weaponSkill: 18,
      },
      traits: {
        wounds: 1,
        shock: 2,
        defense: 3,
        resilience: 4,
        conviction: 5,
        resolve: 6,
        influence: 7,
        wealth: 8,
        corruption: 9,
        faith: 10,
      },
      armor: [
        {
          name: "Rosarius",
          ar: 5,
          traits: "traits",
        },
      ],
      weapons: [
        {
          name: "Chainsword",
          damage: 1,
          ed: 2,
          ap: 3,
          salvo: 0,
          rangeShort: 0,
          rangeMedium: 0,
          rangeLong: 0,
          traits: "traits",
        },
        {
          name: "Laspistol",
          damage: 1,
          ed: 2,
          ap: 3,
          salvo: 4,
          rangeShort: 10,
          rangeMedium: 20,
          rangeLong: 30,
          traits: "traits",
        },
      ],
      psychicPowers: [
        {
          name: "Smite",
          dn: "3",
          activation: "activation",
          duration: "duration",
          range: "range",
          target: "target",
          effect: "effect",
        },
      ],
      talents: [
        {
          name: "fast",
          cost: 20,
          descrtption: "description",
        },
      ],
    },
  ]);
  const [selectedCharacter, setSelectedCharacter] = useState(-1);

  const setCharacter = (character, id) => {
    let tempCharacters = characters;
    for (var i in tempCharacters) {
      if (tempCharacters[i].id === id) {
        tempCharacters[i] = character;
        break;
      }
    }
    setCharacters(tempCharacters);
  };

  return (
    <MyContext.Provider
      value={{
        characters: characters,
        selectedCharacter: selectedCharacter,
        setCharacter: setCharacter,
        setSelectedCharacter: setSelectedCharacter,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
