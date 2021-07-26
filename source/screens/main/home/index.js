import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import StartComponent from "./start";

const Stack = createStackNavigator();
export default function TransactionNavigator() {
  return (
    <Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator initailRoute={"transaction"}>
        <Stack.Screen
          name={"transaction"}
          component={StartComponent}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </Fragment>
  );
}
