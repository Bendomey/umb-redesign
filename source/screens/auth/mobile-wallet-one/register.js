import React, { Fragment } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Colors from "../../../constants/colors.json";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    label: "UMB Customer",
    page: "mobile-wallet-two",
  },
  {
    label: "Non UMB Customer",
    page: "mobile-wallet-three",
  },
];

const Register = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Mobile Wallet
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            Choose your preferred option below
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          {data?.map((type, i) => (
            <Fragment key={i}>
              <TouchableOpacity
                onPress={() => {
                  navigation.push(type?.page);
                }}
              >
                <Card data={type} />
              </TouchableOpacity>
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
        <Text
          type={"Bold"}
          style={{ color: Colors.white, marginLeft: RFValue(5) }}
        >
          {data?.label}
        </Text>
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
    backgroundColor: "#1c1c1c",
    marginBottom: RFValue(20),
    padding: RFValue(20),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Register;
