import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fragment } from "react";

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
            bottom: RFValue(25),
            left: RFValue(8),
            right: RFValue(8),
            borderRadius: RFValue(20),
            borderTopWidth: 0,
            backgroundColor: "rgba(0, 0, 0,0.4)",
            shadowColor: "#fff",
            borderColor: "#404040",
            borderWidth: 0,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.4,
            shadowRadius: 1.41,
            elevation: 5,
            height: RFValue(60),
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
                    top: 15,
                    borderRadius: RFValue(10),
                  }}
                >
                  <Image
                    source={require("../../assets/images/grid.png")}
                    style={{ tintColor: focused ? Colors?.red : Colors?.gray }}
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
                    top: 15,
                    borderRadius: RFValue(10),
                  }}
                >
                  <Ionicons
                    name={"document-text-outline"}
                    color={focused ? Colors?.red : Colors?.gray}
                    size={RFValue(20)}
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
            tabBarIcon: ({}) => {
              return (
                <View
                  style={{
                    top: -30,
                    position: "absolute",
                    backgroundColor: "black",
                    zIndex: 2,
                    padding: 10,
                    borderRadius: RFValue(50),
                    borderWidth: 0,
                    borderColor: "#000",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: Colors?.red,
                      padding: 12,
                      borderRadius: RFValue(50),
                    }}
                  >
                    <Ionicons
                      name={"flash-outline"}
                      color={Colors?.white}
                      size={RFValue(25)}
                    />
                  </View>
                </View>
              );
            },
          }}
          name={"Send"}
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
                    top: 15,
                    borderRadius: RFValue(10),
                  }}
                >
                  <Ionicons
                    name={"time-outline"}
                    color={focused ? Colors?.red : Colors?.gray}
                    size={RFValue(20)}
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
                    top: 15,
                    borderRadius: RFValue(10),
                  }}
                >
                  <AntDesign
                    name={"setting"}
                    color={focused ? Colors?.red : Colors?.gray}
                    size={RFValue(20)}
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
