import React, { Fragment } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Colors from "../../../constants/colors.json";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    label: "Telephone Number",
    description: "0302 633988",
    icon: "ios-call",
  },
  {
    label: "Toll Free line (MTN / VODA / AIRTELTIGO)",
    description: "0802 633988",
    icon: "ios-call",
  },
  {
    label: "Email",
    description: "info@myumbbank.com",
    icon: "ios-mail",
  },
];

const ContactUs = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Contact Us
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            These are some contacts you can reach us on
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          {data?.map((type, i) => (
            <Fragment key={i}>
              <Card data={type} />
            </Fragment>
          ))}
        </View>
      </View>
    </>
  );
};

const Card = ({ data }) => {
  return (
    <Fragment>
      <View style={styles.card}>
        <View
          style={{
            backgroundColor: "#1c1c1c",
            padding: RFValue(12),
            borderRadius: 50,
            marginRight: RFValue(10),
          }}
        >
          <Ionicons
            name={data?.icon}
            size={RFValue(17)}
            color={Colors.primary}
          />
        </View>
        <View>
          <Text
            type={"Light"}
            style={{ color: Colors.gray, fontSize: RFValue(10) }}
          >
            {data?.label}
          </Text>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, marginTop: RFValue(4) }}
          >
            {data?.description}
          </Text>
        </View>
      </View>
    </Fragment>
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
  card: {
    marginBottom: RFValue(20),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ContactUs;
