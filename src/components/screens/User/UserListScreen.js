import { LogBox, StyleSheet, Text } from "react-native";
import Screen from "../../layout/Screen.js";
import UserList from "../../entity/users/UserList.js";
import { useState, useEffect } from "react";
import Icons from "../../UI/Icons.js";
import { Button, ButtonTray } from "../../UI/Button.js";
//import RenderCount from "../../UI/RenderCount.js";
import API from "../../API/API.js";

const UserListScreen = ({ navigation }) => {
  // Initialisations ---------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const usersEndPoint = "https://softwarehub.uk/unibase/api/users";

  // State ---------------
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadUsers = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) {
      setUsers(response.result);
    }
  };
  useEffect(() => {
    loadUsers(usersEndPoint);
  }, []);
  // Handlers ------------
  const handleDelete = (user) => {
    setUsers(users.filter((item) => item.UserID !== user.UserID));
    console.log(`User ${user.UserID} deleted`);
  };

  const handleAdd = (user) => setUsers([...users, user]);

  const handleModify = (updatedUser) =>
    setUsers(
      users.map((user) =>
        user.UserID === updatedUser.UserID ? updatedUser : user
      )
    );

  const onDelete = (user) => {
    handleDelete(user);
    navigation.goBack();
  };

  const onAdd = (user) => {
    handleAdd(user);
    navigation.goBack();
  };
  const onModify = (user) => {
    handleModify(user);
    navigation.navigate("UserListScreen");
  };

  const goToViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete, onModify });
  const goToAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });

  // View ----------------  can put after "<Screen>" <RenderCount  />
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
      </ButtonTray>
      {isLoading && <Text>Loading records...</Text>}
      <UserList users={users} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserListScreen;
