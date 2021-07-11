import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import Colors from "../../../constants/colors.json";
import OpenServices from "./components/services";

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(30) }}
          >
            UMB SpeedApp.
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(15) }}>
            Hello, Login to continue
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <View>
            <TextInput placeholder={"Email Address eg. johndoe@gmail.com"} />
          </View>
          <View style={{ marginTop: RFValue(10) }}>
            <TextInput placeholder={"Password eg. * * * * * * * "} />
          </View>
        </View>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={{ color: Colors.primary }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Button title={"Login to my Account"} />
          </View>
          <View style={{ marginTop: RFValue(10) }}>
            <OpenServices />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  header: {
    marginTop: RFValue(10),
    marginLeft: RFValue(20),
  },
  textInputContainer: {
    marginTop: RFValue(30),
    marginHorizontal: RFValue(20),
  },
  buttonContainer: {
    marginTop: RFValue(30),
    marginHorizontal: RFValue(20),
  },
  forgotPasswordContainer: {
    marginTop: RFValue(15),
    marginHorizontal: RFValue(20),
    alignItems: "flex-end",
  },
});

export default Login;
