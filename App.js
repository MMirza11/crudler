import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/Module/ModuleListScreen";
import ModuleViewScreen from "./src/components/screens/Module/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/Module/ModuleModifyScreen";
import ModuleAddScreen from "./src/components/screens/Module/ModuleAddScreen";
import UserListScreen from "./src/components/screens/User/UserListScreen";
import UserViewScreen from "./src/components/screens/User/UserViewScreen";
import UserModifyScreen from "./src/components/screens/User/UserModifyScreen";
import UserAddScreen from "./src/components/screens/User/UserAddScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ModuleStack() {
  return (
    <Stack.Navigator
      initialRouteName="ModuleListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="ModuleListScreen"
        component={ModuleListScreen}
        options={{ title: "List Modules" }}
      />
      <Stack.Screen
        name="ModuleAddScreen"
        component={ModuleAddScreen}
        options={{ title: "Add Module" }}
      />
      <Stack.Screen
        name="ModuleViewScreen"
        component={ModuleViewScreen}
        options={{ title: "View Module" }}
      />
      <Stack.Screen
        name="ModuleModifyScreen"
        component={ModuleModifyScreen}
        options={{ title: "Modify Module" }}
      />
    </Stack.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="UserListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{ title: "List User" }}
      />
      <Stack.Screen
        name="UserAddScreen"
        component={UserAddScreen}
        options={{ title: "Add User" }}
      />
      <Stack.Screen
        name="UserViewScreen"
        component={UserViewScreen}
        options={{ title: "View User" }}
      />
      <Stack.Screen
        name="UserModifyScreen"
        component={UserModifyScreen}
        options={{ title: "Modify User" }}
      />
    </Stack.Navigator>
  );
}

// Main App component with Drawer Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Modules">
        <Drawer.Screen name="Modules CRUDler" component={ModuleStack} />
        <Drawer.Screen name="Users CRUDler" component={UserStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
