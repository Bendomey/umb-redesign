import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import Colors from "../../../constants/colors.json";
import { createStackNavigator } from "@react-navigation/stack";

import StartComponent from "./start";
import { RFValue } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();
export default function TransactionListNav() {
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
            headerTitle: "Transactions",
            headerTintColor: Colors.white,

            headerLeft: () => {},
          }}
        />
      </Stack.Navigator>
    </Fragment>
  );
}
