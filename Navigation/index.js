import React from "react";
import Home from "../Page/Home/index";
import Login from "../Page/Login/index";
import Profil from "../Page/Profil/index";

import Task from "../Page/Task/index";
import Task2 from "../Page/Task2/index";
import Task3 from "../Page/Task3/index";

import Trial from "../Page/Trial/index";
import Trial2 from "../Page/Trial/Trial2/index";
import Trial3 from "../Page/Trial/Trial3/index";

import Cuti from "../Page/Cuti/index";

import UserList from "../Page/Admin/User List";
import AdminProfil from "../Page/Admin/AdminProfil";
import EditProfil from "../Page/Admin/EditProfil";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen name="Profil" component={Profil}
          options={{ headerShown: false }} />

        <Stack.Screen name="Task" component={Task}
          options={{ headerShown: false }} />

        <Stack.Screen name="Task2" component={Task2}
          options={{ headerShown: false }} />

        <Stack.Screen name="Task3" component={Task3}
          options={{ headerShown: false }} />

        <Stack.Screen name="Trial" component={Trial}
          options={{ headerShown: false }} />

        <Stack.Screen name="Trial2" component={Trial2}
          options={{ headerShown: false }} />

        <Stack.Screen name="Trial3" component={Trial3}
          options={{ headerShown: false }} />

        <Stack.Screen name="Cuti" component={Cuti}
          options={{ headerShown: false }} />

        {/* Admin */}
        <Stack.Screen name="UserList" component={UserList}
          options={{ headerShown: false }} />

        <Stack.Screen name="AdminProfil" component={AdminProfil}
          options={{ headerShown: false }} />

        <Stack.Screen name="EditProfil" component={EditProfil}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;