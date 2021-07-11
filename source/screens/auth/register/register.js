import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import Colors from "../../../constants/colors.json";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = ({ navigation }) => {
  return (
    <>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(30) }}
          >
            Register Here.
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            Hello, Fill in your details to register for internet banking
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <View>
            <Text
              type={"Bold"}
              style={{
                color: Colors.white,
                fontSize: RFValue(12),
                marginBottom: RFValue(5),
              }}
            >
              Account Number *
            </Text>
            <TextInput placeholder={"Account Number eg. 4543435353532"} />
          </View>
          <View style={{ marginTop: RFValue(15) }}>
            <Text
              type={"Bold"}
              style={{
                color: Colors.white,
                fontSize: RFValue(12),
                marginBottom: RFValue(5),
              }}
            >
              Email Address *
            </Text>
            <TextInput placeholder={"Email Address eg. johndoe@gmail.com"} />
          </View>
          <View style={{ marginTop: RFValue(15) }}>
            <Text
              type={"Bold"}
              style={{
                color: Colors.white,
                fontSize: RFValue(12),
                marginBottom: RFValue(5),
              }}
            >
              Login Pin *
            </Text>
            <TextInput placeholder={"Login Pin eg. * * * * * * * "} />
          </View>
          <View style={{ marginTop: RFValue(15) }}>
            <Text
              type={"Bold"}
              style={{
                color: Colors.white,
                fontSize: RFValue(12),
                marginBottom: RFValue(5),
              }}
            >
              Transaction Pin *
            </Text>
            <TextInput placeholder={"Transaction Pin eg. * * * * * * * "} />
          </View>
        </View>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: Colors.primary }}>
              Already Have An Account?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Button title={"Register For Internet Banking"} />
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

export default Register;
