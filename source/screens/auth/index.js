import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Colors from "../../constants/colors.json";

import { TouchableOpacity } from "react-native";
import Text from "../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";

//import screens
import StartScreen from "./start";
import LoginScreen from "./login";
import RegisterScreen from "./register";

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
        <Stack.Screen
          name={"login"}
          component={LoginScreen}
          options={({ navigation }) => ({
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
            headerRight: () => (
              <>
                <TouchableOpacity
                  style={{
                    marginRight: RFValue(15),
                    alignItems: "flex-end",
                  }}
                  onPress={() => navigation.push("register")}
                >
                  <Text
                    type={"SemiBold"}
                    style={{ color: Colors.white, fontSize: RFValue(15) }}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </>
            ),
          })}
        />
        <Stack.Screen
          name={"register"}
          component={RegisterScreen}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
      </Stack.Navigator>
    </Fragment>
  );
};

export default AuthNavigator;
