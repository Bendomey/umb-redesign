import React, { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import Navigators
import AuthNavigator from "../screens/auth";
import MainNavigator from "../screens/main";
import TransactionsNavigator from "../screens/Home";
import Tabs from "./BotttomTab/tabs";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Auth"}>
          <Stack.Screen
            name={"Auth"}
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={"Main"}
            component={MainNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={"Home"}
            component={Tabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

export default Navigator;
