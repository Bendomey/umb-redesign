import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import Colors from "../../../constants/colors.json";
import OpenServices from "./components/services";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
const Login = ({ navigation }) => {
  const [accoutNumber, setAccountNumber] = useState("");
  const [pin, setPin] = useState("");
  return (
    <>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Hello, Welcome.
          </Text>
          <Text
            type={"Light"}
            style={{ color: Colors.gray, fontSize: RFValue(15) }}
          >
            Login to continue
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
            <TextInput
              onChange={(text) => setAccountNumber(text)}
              defaultValue={accoutNumber}
              placeholder={"Account Number eg. 35235242424"}
            />
          </View>
          <View style={{ marginTop: RFValue(15) }}>
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
            <TextInput
              secureTextEntry
              keyboardType={"number-pad"}
              onChange={(text) => setPin(text)}
              placeholder={"Pin eg. * * * * * * * "}
            />
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
                if (!accoutNumber && !pin) {
                  return (
                    Toast?.show({
                      text1: "Empty fields",
                      text2: "provide your account number and pin to login",
                      type: "error",
                      autoHide: true,
                    }),
                    []
                  );
                }
                navigation?.push("Transactions");
              }}
              title={"Login to my Account"}
            />
          </View>
          <View style={{ marginTop: RFValue(10) }}>
            <OpenServices />
          </View>
        </View>
      </KeyboardAwareScrollView>
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
