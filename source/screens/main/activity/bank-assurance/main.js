import React, { Fragment, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import { Ionicons } from "@expo/vector-icons";

const BankAssurance = ({ navigation }) => {
  const refRBSheet = useRef(null);

  const data = [
    {
      label: "Request For Quotation",
      icon: "list-sharp",
      onPress: () => {
        // refRBSheet.current.open();
        navigation.push("request-quotation");
      },
    },
    {
      label: "Make Payment",
      icon: "ios-cash",
      onPress: () => {
        navigation.push("make-payment");
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
            Bank Assurance
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

export default BankAssurance;
