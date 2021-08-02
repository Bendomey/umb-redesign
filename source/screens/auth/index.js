import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Colors from "../../constants/colors.json";

import { RFValue } from "react-native-responsive-fontsize";

//import screens
import StartScreen from "./start";
import WelcomeScreen from "./welcome";
import ContactUsScreen from "./contact-us";
import LoginScreen from "./login";
import LocationsScreen from "./locations";
import ProductsScreen from "./products";
import ProductsDescriptionScreen from "./products-details";

import RegisterScreen from "./register";
import MobileBankingScreen from "./mobile-banking";
import MobileWalletOneScreen from "./mobile-wallet-one";
import MobileWalletTwoScreen from "./mobile-wallet-two";
import MobileWalletThreeScreen from "./mobile-wallet-three";

import VerifyScreen from "./verify";

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
          name={"welcome"}
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"contact-us"}
          component={ContactUsScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"locations"}
          component={LocationsScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"products"}
          component={ProductsScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"products-description"}
          component={ProductsDescriptionScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"login"}
          component={LoginScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
            // headerRight: () => (
            //   <>
            //     <TouchableOpacity
            //       style={{
            //         marginRight: RFValue(15),
            //         alignItems: "flex-end",
            //       }}
            //       onPress={() => navigation.push("register")}
            //     >
            //       <Text
            //         type={"SemiBold"}
            //         style={{ color: Colors.white, fontSize: RFValue(13) }}
            //       >
            //         Register
            //       </Text>
            //     </TouchableOpacity>
            //   </>
            // ),
          })}
        />
        <Stack.Screen
          name={"register"}
          component={RegisterScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"mobile-banking"}
          component={MobileBankingScreen}
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
        <Stack.Screen
          name={"mobile-wallet-type"}
          component={MobileWalletOneScreen}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "Self Registration",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"mobile-wallet-two"}
          component={MobileWalletTwoScreen}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "Self Registration",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"mobile-wallet-three"}
          component={MobileWalletThreeScreen}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "Self Registration",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"verify-account"}
          component={VerifyScreen}
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
