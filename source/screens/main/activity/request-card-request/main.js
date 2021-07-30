import React, { Fragment, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import Button from "../../../../components/Button";
import PageWrapper from "../../../../components/PageWrapper/PageWrapper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import ChooseAccount from "./choose-account";
import TypeOfLoan from "./type-of-loan";
import Period from "./period";

const Loan = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Debit Card Request
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            Request card by filling the form below
          </Text>
        </View>
        <PageWrapper>
          <View style={styles.alert}>
            <Text style={styles.alertText}>
              Note: UMB offers Classic, Business and Prepaid cards instantly.
              Please visit your nearest branch to receive the card in minutes.
              However, if you require a Platinum card which takes a minimum 12
              working days, kindly request below:
            </Text>
          </View>
        </PageWrapper>
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
                Select Pickup Branch *
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
                Select Card Type *
              </Text>
              <TypeOfLoan />
            </View>
            <View
              style={{ marginTop: RFValue(20), marginBottom: RFValue(120) }}
            >
              <Button
                onPress={() => {
                  // navigation?.push("Main");
                }}
                title={"Request"}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Fragment>
  );
};

const Card = ({ data }) => {
  return (
    <Fragment>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name={data?.icon}
            size={RFValue(20)}
            color={Colors.primary}
          />
          <Text
            type={"Light"}
            style={{
              color: Colors.white,
              marginLeft: RFValue(10),
              fontSize: RFValue(13),
            }}
          >
            {data?.label}
          </Text>
        </View>
        <View>
          <Ionicons
            name={"ios-chevron-down"}
            size={RFValue(15)}
            color={Colors.white}
          />
        </View>
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
    backgroundColor: "#1e1e1f",
    borderRadius: 10,
  },
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
  alert: {
    marginBottom: RFValue(20),
    backgroundColor: Colors.yellow,
    padding: RFValue(20),
    borderRadius: 20,
    // height: 120
  },
  alertText: { fontSize: RFValue(13) },
});

export default Loan;
