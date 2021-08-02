import React, { Fragment, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import { Ionicons } from "@expo/vector-icons";
import ChooseAccount from "../components/choose-account";

const Loan = ({ navigation }) => {
  const refRBSheet = useRef(null);

  const data = [
    {
      label: "Stop Cheque",
      icon: "ios-cash",
      onPress: () => {
        navigation.push("loan-stop-cheque-main");
      },
    },
    {
      label: "Full Statement",
      icon: "ios-cash",
      onPress: () => {
        // navigation.push("request-atm");
      },
    },
    {
      label: "Cheque Book Request",
      icon: "ios-book-outline",
      onPress: () => {
        refRBSheet.current.open();
      },
    },
    {
      label: "Reset Internet Banking Password",
      icon: "ios-lock-open",
      onPress: () => {
        navigation.push("request-reset-internet");
      },
    },
    {
      label: "Debit Card Request",
      icon: "ios-information-outline",
      onPress: () => {
        navigation.push("request-card-request");
      },
    },
  ];

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Request
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            Select any of the options to proceed
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          {data?.map((type, i) => (
            <Fragment key={i}>
              <TouchableOpacity onPress={type.onPress}>
                <Card data={type} />
              </TouchableOpacity>
            </Fragment>
          ))}
        </View>
      </View>
      <ChooseAccount
        refRBSheet={refRBSheet}
        onNavigate={() => {
          refRBSheet.current.close();
        }}
      />
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
              marginLeft: RFValue(5),
              fontSize: RFValue(13),
            }}
          >
            {data?.label}
          </Text>
        </View>
        <View>
          <Ionicons
            name={"ios-chevron-forward"}
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

export default Loan;
