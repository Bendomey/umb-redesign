import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fragment } from "react";
import { Platform } from 'react-native'

import { Ionicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
import TransactionNavigator from "./home";
import ActivityNavigator from "./activity";
import TransactionListNav from "./transactionList";
import SettingsNav from "./settings";
import { RFValue } from "react-native-responsive-fontsize";
import { Image, View } from "react-native";
import Colors from "../../constants/colors.json";

export default function Tabs() {
  return (
    <Fragment>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: Platform.OS === "android" ? RFValue(6) : RFValue(25),
            left: RFValue(8),
            right: RFValue(8),
            borderRadius: RFValue(20),
            borderTopWidth: 0,
            backgroundColor: "#1e1e1e",
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#fff",
                    top: RFValue(15),
                    borderRadius: RFValue(10),
                  }}
                >
                  <Ionicons
                    name={"ios-pie-chart-outline"}
                    color={focused ? Colors?.primary : Colors?.gray}
                    size={RFValue(22)}
                  />
                </View>
              );
            },
          }}
          name={"Dashboard"}
          component={TransactionNavigator}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#fff",
                    top: RFValue(15),
                    borderRadius: RFValue(10),
                  }}
                >
                  <Ionicons
                    name={"ios-grid-outline"}
                    color={focused ? Colors?.primary : Colors?.gray}
                    size={RFValue(25)}
                  />
                </View>
              );
            },
          }}
          name={"Activity"}
          component={ActivityNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#fff",
                    top: RFValue(15),
                    borderRadius: RFValue(10),
                  }}
                >
                  <Ionicons
                    name={"ios-time-outline"}
                    color={focused ? Colors?.primary : Colors?.gray}
                    size={RFValue(25)}
                  />
                </View>
              );
            },
          }}
          name={"Transactions"}
          component={TransactionListNav}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#fff",
                    top: RFValue(15),
                    borderRadius: RFValue(10),
                  }}
                >
                  <AntDesign
                    name={"setting"}
                    color={focused ? Colors?.primary : Colors?.gray}
                    size={RFValue(25)}
                  />
                </View>
              );
            },
          }}
          name={"Settings"}
          component={SettingsNav}
        />
      </Tab.Navigator>
    </Fragment>
  );
}
