import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../../layout/Screen.js";
import ModuleForm from "../../entity/modules/ModuleForm.js";

const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisations -----
  const { onAdd } = route.params;

  // State ---------------
  // Handlers ------------
  const handleCancel = navigation.goBack;

  // View ----------------
  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
