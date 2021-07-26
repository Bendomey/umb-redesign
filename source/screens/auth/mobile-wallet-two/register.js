import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import Colors from "../../../constants/colors.json";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text
              type={"Bold"}
              style={{ color: Colors.white, fontSize: RFValue(25) }}
            >
              UMB Customer
            </Text>
            <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
              Fill in your details to register for mobile banking
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
                UMB Account Number
              </Text>
              <TextInput />
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
                Mobile Number
              </Text>
              <TextInput />
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
                Email
              </Text>
              <TextInput keyboardType={"number-pad"} />
            </View>
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Switch value={true} />
            <TouchableOpacity
              style={{ marginLeft: RFValue(10) }}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ color: Colors.white }}>
                I agree to the{" "}
                <Text style={{ color: Colors.primary }}>
                  terms and conditions
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <Button
                onPress={() => navigation.push("verify-account")}
                title={"Register"}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: RFValue(10),
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              navigation.goBack();
              navigation.goBack();
              navigation.push("login");
            }}
          >
            <Text style={{ color: Colors.white }}>
              Don't have an account?{" "}
              <Text style={{ color: Colors.primary }}>Login Here</Text>
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
    marginHorizontal: RFValue(20),
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
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Register;
