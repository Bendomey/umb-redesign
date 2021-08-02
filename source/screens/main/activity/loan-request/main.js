import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import Button from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ChooseAccount from "./choose-account";
import TypeOfLoan from "./type-of-loan";
import Period from "./period";

const Loan = () => {
  const [, setAmount] = React.useState("");
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Loan Request
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            Request loan by filling the form below
          </Text>
        </View>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
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
                Select Source Account *
              </Text>
              <ChooseAccount />
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
                Type of Loan *
              </Text>
              <TypeOfLoan />
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
                Enter Amount *
              </Text>
              <TextInput
                keyboardType={"decimal-pad"}
                onChange={(text) => setAmount(text)}
              />
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
                Select Period *
              </Text>
              <Period />
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
                Current Net Salary *
              </Text>
              <TextInput onChange={(text) => setAccountNumber(text)} />
            </View>
            <View
              style={{ marginTop: RFValue(20), marginBottom: RFValue(120) }}
            >
              <Button
                onPress={() => {
                  // navigation?.push("Main");
                }}
                title={"Request Loan"}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  header: {
    marginTop: RFValue(10),
    marginHorizontal: RFValue(20),
  },
  // textInputContainer: {
  //   marginTop: RFValue(30),
  //   marginHorizontal: RFValue(20),
  //   backgroundColor: "#1e1e1f",
  //   borderRadius: 10,
  // },
  card: {
    backgroundColor: "#1c1c1c",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(14),
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInputContainer: {
    marginTop: RFValue(30),
    marginHorizontal: RFValue(20),
  },
});

export default Loan;
