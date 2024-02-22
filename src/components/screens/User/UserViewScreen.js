import { StyleSheet, Text, View } from "react-native";
import Screen from "../../layout/Screen";
import UserView from "../../entity/users/UserView";

const UserViewScreen = ({ navigation, route }) => {
  // Initialisations -----
  const { user, onDelete, onModify } = route.params;

  // State ---------------
  // Handlers ------------
  const goToModifyScreen = () =>
    navigation.navigate("UserModifyScreen", { user, onModify });
  // View ----------------
  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} onModify={goToModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
