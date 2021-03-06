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
import AddCharacterModal from "./components/AddCharacterModal";

const fetchFonts = () => {
  return Font.loadAsync({
    "berry-rotunda": require("./assets/fonts/Berry-Rotunda.ttf"),
  });
};

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

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

  const mainStack = () => {
    return (
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
    );
  };

  return (
    <CharacterProvider>
      <NavigationContainer>
        <RootStack.Navigator
          headerMode="none"
          screenOptions={{ animationEnabled: "false" }}
          mode="modal"
        >
          <RootStack.Screen name="Main" component={mainStack} />
          <RootStack.Screen
            name="Modal"
            component={AddCharacterModal}
            options={{
              cardStyle: {
                backgroundColor: "transparent",
                opacity: 0.99,
              },
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </CharacterProvider>
  );
}

const styles = StyleSheet.create({});
