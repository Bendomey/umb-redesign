import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

//import screens
import HomeScreen from "./home";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator initialRouteName={"home"}>
        <Stack.Screen
          name={"home"}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Fragment>
  );
};

export default MainNavigator;
