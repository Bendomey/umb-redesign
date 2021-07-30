import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import Currency from "../components/currency";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TypeOfForex from "../components/type-of-forex";
import TextInput from "../../../../components/TextInput";
import Button from "../../../../components/Button";

const Forex = ({}) => {
  const [, setAmount] = React.useState("");

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Forex Rates
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
                Select Type of Forex *
              </Text>
              <TypeOfForex />
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
                Source Currency *
              </Text>
              <Currency />
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
                Target Currency *
              </Text>
              <Currency />
            </View>
            <View
              style={{ marginTop: RFValue(20), marginBottom: RFValue(120) }}
            >
              <Button
                onPress={() => {
                  // navigation?.push("Main");
                }}
                title={"Request Forex Rate"}
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

export default Forex;
