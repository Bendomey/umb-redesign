import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import Colors from "../../../constants/colors.json";
// import OpenServices from "./components/services";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Login = ({ navigation }) => {
  const [accoutNumber, setAccountNumber] = useState("");
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text
              type={"Bold"}
              style={{ color: Colors.white, fontSize: RFValue(25) }}
            >
              Login
            </Text>
            <Text type={"Light"} style={{ color: Colors.gray }}>
              Kindly enter your details below to be logged in
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <View>
              <Text
                type={"Light"}
                style={{
                  color: Colors.white,
                  fontSize: RFValue(12),
                  marginBottom: RFValue(5),
                }}
              >
                Account Number *
              </Text>
              <TextInput onChange={(text) => setAccountNumber(text)} />
            </View>
            <View style={{ marginTop: RFValue(20) }}>
              <Text
                type={"Light"}
                style={{
                  color: Colors.white,
                  fontSize: RFValue(12),
                  marginBottom: RFValue(5),
                }}
              >
                Pin *
              </Text>
              <TextInput secureTextEntry keyboardType={"number-pad"} />
            </View>
          </View>
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={{ color: Colors.primary }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <Button
                onPress={() => {
                  navigation?.push("Main");
                }}
                title={"Login"}
              />
            </View>
            {/* <View style={{ marginTop: RFValue(10) }}>
            <OpenServices />
          </View> */}
          </View>
        </KeyboardAwareScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: RFValue(10),
          }}
        >
          <TouchableOpacity onPress={() => navigation.push("register")}>
            <Text style={{ color: Colors.white }}>
              Don't have an account?{" "}
              <Text style={{ color: Colors.primary }}>Register Here</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
