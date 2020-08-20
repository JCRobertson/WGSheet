import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from '../constants/Colors'

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }, props) => (
  <ListItem
    containerStyle={styles.listItem}
    titleStyle={styles.listTitleStyle}
    underlayColor="#4d4647"
    activeOpacity=".7"
    title={item.info.name}
    subtitle={
      <View style={styles.subtitleView}>
        <Text style={styles.subtitleText}>
          Tier: {item.info.tier} | Rank: {item.info.rank}
        </Text>
        <Text style={styles.subtitleText}>
          {item.info.species} - {item.info.faction} {item.info.archetype}
        </Text>
      </View>
    }
    onPress={() => props.navigation.navigate("Character", { character: item })}
    chevron
  />
);

const HomeScreen = (props) => {
  props.navigation.setOptions({
    headerRight: () => (
      <Button
        style={styles.addButton}
        onPress={() => alert("This is a button!")}
        icon={
          <MaterialCommunityIcons name="account-plus" size={24} color="white" />
        }
        type="clear"
      />
    ),
  });
  return (
    <View style={styles.listContainer}>
      <FlatList
        style={styles.listContainer}
        keyExtractor={keyExtractor}
        data={props.characters}
        renderItem={(item) => renderItem(item, props)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitleView: {
    paddingLeft: 30,
    marginTop: 10,
  },
  listContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  subtitleText: {
    color: "grey",
  },
  listItem: {
    backgroundColor: Colors.foreground,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 3,
    margin: 20,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  listTitleStyle: {
    paddingTop: 10,
    color: "white",
    fontFamily: "berry-rotunda",
  },
  addButton: {
    marginRight: 15,
    marginBottom: 10,
  },
});

export default HomeScreen;
