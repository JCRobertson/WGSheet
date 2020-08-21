import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StatScreen from "./StatScreen";
import CombatScreen from "./CombatScreen";
import OtherScreen from "./OtherScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

const CharacterScreen = ({ route, navigation }) => {
  const { character } = route.params;
  navigation.setOptions({
    title: character.info.name,
    headerTitleStyle: {
      fontFamily: "berry-rotunda",
      padding: 10,
    },
  });
  navigation.setOptions({
    headerRight: () => (
      <Button
        style={styles.addButton}
        onPress={() => alert("This is a button!")}
        icon={
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="white"
          />
        }
        type="clear"
      />
    ),
  });
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Stats") {
              iconName = "account";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Combat") {
              iconName = "sword-cross";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Other") {
              iconName = "apps";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          style: {
            backgroundColor: Colors.secondary,
            borderTopColor: "transparent",
          },
        }}
      >
        <Tab.Screen
          name="Stats"
          children={() => <StatScreen character={character} />}
        />
        <Tab.Screen
          name="Combat"
          children={() => <CombatScreen character={character} />}
        />
        <Tab.Screen
          name="Other"
          children={() => <OtherScreen character={character} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default CharacterScreen;
