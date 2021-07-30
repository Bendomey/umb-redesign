import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ChooseAccount from "./choose-account";
import ChooseService from "../components/choose-service";
import ChooseMerchant from "../components/choose-merchant";
import TextInput from "../../../../components/TextInput";
import Button from "../../../../components/Button";

const BillPayment = () => {
  //states
  const [, setAmount] = React.useState("");
  const [, setRef] = React.useState("");

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Bill Payment
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            Settle all your bills by filling the form below
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
                Select Merchant *
              </Text>
              <ChooseMerchant />
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
                Select Service *
              </Text>
              <ChooseService />
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
                Reference No | Account No | Student ID | Remarks
              </Text>
              <TextInput
                keyboardType={"decimal-pad"}
                onChange={(text) => setRef(text)}
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
                Transfer Amount *
              </Text>
              <TextInput
                keyboardType={"decimal-pad"}
                onChange={(text) => setAmount(text)}
              />
            </View>
            <View
              style={{ marginTop: RFValue(20), marginBottom: RFValue(120) }}
            >
              <Button onPress={() => {}} title={"Submit"} />
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
  textInputContainer: {
    marginTop: RFValue(30),
    marginHorizontal: RFValue(20),
  },
  card: {
    backgroundColor: "#1c1c1c",
    marginBottom: RFValue(20),
    padding: RFValue(20),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BillPayment;
