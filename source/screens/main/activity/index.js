import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import Colors from "../../../constants/colors.json";
import { createStackNavigator } from "@react-navigation/stack";

import StartComponent from "./start";
import { RFValue } from "react-native-responsive-fontsize";
import Account from "../account";

const Stack = createStackNavigator();
export default function ActivityNavigator() {
  return (
    <Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator initailRoute={"transaction"}>
        <Stack.Screen
          name={"transaction"}
          component={StartComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: RFValue(18),
            },
            headerTitle: "Services",
            headerTintColor: Colors.white,

            headerLeft: () => { },
          }}
        />
        <Stack.Screen name="account" component={Account} options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: Colors.secondary,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: RFValue(18),
          },
          headerTitle: "Services",
          headerTintColor: Colors.white,

          headerLeft: () => { },
        }} />
      </Stack.Navigator>
    </Fragment>
  );
}
