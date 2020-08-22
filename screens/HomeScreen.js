import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Modal } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { MyContext } from "../components/MyContext";

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }, props, setSelectedCharacter) => {
  return (
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
      onPress={() => {
        setSelectedCharacter(item.id);
        console.log("id is "+item.id)
        return props.navigation.navigate("Character");
      }}
      chevron
    />
  );
};

const HomeScreen = (props) => {
  const [addCharacterVisible, setAddCharacterVisible] = useState(false);
  const context = React.useContext(MyContext);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={addCharacterVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View>
          <Text>In Modal</Text>
        </View>
      </Modal>
      <FlatList
        style={styles.listContainer}
        keyExtractor={keyExtractor}
        data={props.characters}
        renderItem={(item) => renderItem(item, props, context.setSelectedCharacter)}
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
