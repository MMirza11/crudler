import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";
// Initialisations -----
// State ---------------
// Handlers ------------
// View ----------------
const UserView = ({ user, onDelete, onModify }) => {
  const handleDelete = () => onDelete(user);

  const requestDelete = () =>
    Alert.alert(
      "Delete warning",
      `Are you sure that you want to delete ${user.UserFirstname} ${user.UserLastname}`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );

  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: user.UserImageURL }}
        style={styles.image}
      />

      <View style={styles.infoTray}>
        <Text style={styles.boldText}>User ID: {user.UserID}</Text>
        <Text style={styles.text}>
          User Name: {user.UserFirstname} {user.UserLastname}{" "}
        </Text>
        <Text style={styles.text}>User Type: {user.UserUsertypeName}</Text>
        <Text style={styles.text}>
          User Email: {user.UserEmail}
          <Text style={styles.dimText}></Text>
        </Text>
      </View>

      <ButtonTray>
        <Button
          styleButton={{ backgroundColor: "green", marginRight: 10 }}
          icon={<Icons.Edit />}
          label="Modify"
          onClick={onModify}
        />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          onClick={requestDelete}
          styleButton={{ backgroundColor: "red" }}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    borderRadius: 3,
  },
  infoTray: {
    marginTop: 15,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
});

export default UserView;
