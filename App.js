import React, { useState } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CharacterScreen from "./screens/CharacterScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Colors from "./constants/Colors";
import { CharacterProvider } from "./components/MyContext";

const fetchFonts = () => {
  return Font.loadAsync({
    "berry-rotunda": require("./assets/fonts/Berry-Rotunda.ttf"),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <CharacterProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Characters">
          <Stack.Screen
            name="Characters"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.secondary,
                shadowColor: "transparent",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Character"
            component={CharacterScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.secondary,
                shadowColor: "transparent",
              },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CharacterProvider>
  );
}

const styles = StyleSheet.create({});
