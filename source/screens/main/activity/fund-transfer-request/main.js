import React, { Fragment, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import Button from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import ChooseAccount from "./choose-account";
import BankName from "./type-of-loan";
import Period from "./period";
import { useRoute } from "@react-navigation/native";
import PageHader from "../../../../components/PageHeader/PageHader";

const Loan = () => {
  const { params } = useRoute();

  return (
    <Fragment>
      <View style={styles.container}>
        <PageHader
          title={`Transfer ${params?.tile}`}
          description="Transfer funds by filling the form below"
        />

        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={styles.textInputContainer}>
            {params?.tile === "To own UMB Account" && (
              <View style={{}}>
                <Text
                  type={"Light"}
                  style={{
                    color: Colors.white,
                    fontSize: RFValue(12),
                    marginBottom: RFValue(5),
                  }}
                >
                  Select Destination Account *
                </Text>
                <ChooseAccount />
              </View>
            )}
            {["Other Bank Account", "To other UMB Account"].includes(
              params?.tile
            ) && (
              <View style={{}}>
                <Text
                  type={"Light"}
                  style={{
                    color: Colors.white,
                    fontSize: RFValue(12),
                    marginBottom: RFValue(5),
                  }}
                >
                  To Account No. *
                </Text>
                <TextInput onChange={(text) => setAccountNumber(text)} />
              </View>
            )}
            {params?.tile === "Other Bank Account" && (
              <View style={{ marginTop: RFValue(20) }}>
                <Text
                  type={"Light"}
                  style={{
                    color: Colors.white,
                    fontSize: RFValue(12),
                    marginBottom: RFValue(5),
                  }}
                >
                  Select Bank Name *
                </Text>
                <BankName />
              </View>
            )}

            {params?.tile === "To Wallet" && (
              <>
                <View style={{ marginTop: RFValue(20) }}>
                  <Text
                    type={"Light"}
                    style={{
                      color: Colors.white,
                      fontSize: RFValue(12),
                      marginBottom: RFValue(5),
                    }}
                  >
                    Select Wallet Provider *
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
                    Account Number *
                  </Text>
                  <TextInput onChange={(text) => setAccountNumber(text)} />
                </View>
              </>
            )}
            {params?.tile === "From Telco Wallet to UMB Account" && (
              <>
                <View style={{ marginTop: RFValue(20) }}>
                  <Text
                    type={"Light"}
                    style={{
                      color: Colors.white,
                      fontSize: RFValue(12),
                      marginBottom: RFValue(5),
                    }}
                  >
                    Select Operator *
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
                    Account Number *
                  </Text>
                  <TextInput onChange={(text) => setAccountNumber(text)} />
                </View>
              </>
            )}
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
                Purpose *
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
                title={"Transfer Funds"}
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
});

export default Loan;
