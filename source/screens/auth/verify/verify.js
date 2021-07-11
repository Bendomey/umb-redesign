import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import Colors from "../../../constants/colors.json";
import PinView from "../../../components/PinView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";

const VerifyAccount = ({ navigation }) => {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);

  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{
              color: Colors.white,
              fontSize: RFValue(25),
              textAlign: "center",
            }}
          >
            Verify Account.
          </Text>
          <Text
            style={{
              color: Colors.gray,
              fontSize: RFValue(12),
              textAlign: "center",
            }}
          >
            Kindly enter the 4-digit number code sent to your email address -
            johndoe@gmail.com
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <PinView
            showInputText
            inputSize={RFValue(50)}
            ref={pinView}
            pinLength={4}
            buttonSize={RFValue(70)}
            onValueChange={(value) => setEnteredPin(value)}
            buttonAreaStyle={{
              marginTop: 24,
            }}
            inputAreaStyle={{
              marginBottom: 24,
            }}
            inputViewEmptyStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#1c1c1c",
            }}
            inputViewFilledStyle={
              {
                // backgroundColor: "#FFF",
              }
            }
            buttonViewStyle={{
              // borderWidth: 1,
              backgroundColor: "#1c1c1c",
              // borderColor: "#FFF",
            }}
            buttonTextStyle={{
              color: "#FFF",
            }}
            onButtonPress={(key) => {
              if (key === "custom_left") {
                pinView.current.clear();
              }
              if (key === "custom_right") {
                navigation.goBack();
                navigation.goBack();
                alert(
                  "Registration was successful. You can now use your credentials to login"
                );
              }
              if (key === "three") {
                alert("You can't use 3");
              }
            }}
            customLeftButton={
              showRemoveButton ? (
                <Ionicons name={"ios-backspace"} size={36} color={Colors.red} />
              ) : undefined
            }
            customRightButton={
              showCompletedButton ? (
                <Ionicons
                  name={"ios-checkmark"}
                  size={36}
                  color={Colors.green}
                />
              ) : undefined
            }
          />
        </View>

        {/* <View style={styles.buttonContainer}>
          <View>
            <Button title={"Register For Internet Banking"} />
          </View>
        </View> */}
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
    alignItems: "flex-end",
  },
});

export default VerifyAccount;
