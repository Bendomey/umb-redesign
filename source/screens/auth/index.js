import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

//import screens
import StartScreen from "./start";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator initialRouteName={"start"}>
        <Stack.Screen
          name={"start"}
          component={StartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Fragment>
  );
};

export default AuthNavigator;
