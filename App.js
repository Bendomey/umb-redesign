import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AppNavigator from "./source/navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Black": require("./source/assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./source/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./source/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./source/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./source/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./source/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./source/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./source/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./source/assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <AppNavigator />;
  }
}
