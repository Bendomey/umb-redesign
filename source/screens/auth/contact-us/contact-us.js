import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Touchable,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../components/Text";
import Colors from "../../../constants/colors.json";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ContactUs = ({ navigation }) => {
  const data = [
    {
      label: "Telephone Number",
      description: "0302 633988",
      icon: "ios-call",
      onPress: () => Linking.openURL("tel:0302633988"),
    },
    {
      label: "Toll Free line (MTN / VODA / AIRTELTIGO)",
      description: "0802 633988",
      icon: "ios-call",
      onPress: () => Linking.openURL("tel:0802633988"),
    },
    {
      label: "Email",
      description: "info@myumbbank.com",
      icon: "ios-mail",
      onPress: () => Linking.openURL("mailto:info@myumbbank.com"),
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          {data?.map((type, i) => (
            <Fragment key={i}>
              <TouchableOpacity onPress={type.onPress}>
                <Card data={type} />
              </TouchableOpacity>
            </Fragment>
          ))}
        </View>
        <View style={styles.socialGroup}>
          <View style={styles.socialText}>
            <Text style={{ color: Colors.gray, fontSize: RFValue(13) }}>
              Follow us on
            </Text>
          </View>
          <View style={styles.socialRow}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://facebook.com")}
            >
              <View style={[styles.circle, { backgroundColor: "#18ACFE" }]}>
                <EvilIcons name="sc-facebook" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://linkedin.com")}
            >
              <View style={[styles.circle, { backgroundColor: "#1275B1" }]}>
                <Entypo name="linkedin" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://twitter.com")}
            >
              <View style={[styles.circle, { backgroundColor: "#47ACDF" }]}>
                <Entypo name="twitter" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://globe.com")}
            >
              <View style={[styles.circle, { backgroundColor: "#FAB917" }]}>
                <FontAwesome5 name="globe" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
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
  socialText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.gray,
  },
  socialRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
    alignSelf: "center",
    marginVertical: RFValue(20),
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
    borderRadius: RFValue(10),
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: RFValue(30),
    width: RFValue(30),
    borderRadius: RFValue(25),
    backgroundColor: Colors.gray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialGroup: {
    display: "flex",
    position: "absolute",
    height: RFValue(90),
    width: "90%",
    bottom: RFValue(20),
    // backgroundColor: "red",
    alignSelf: "center",
  },
});

export default ContactUs;
