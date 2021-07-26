import React, { Fragment, useCallback } from "react";
import { ScrollView, StyleSheet, View, Platform, Modal } from "react-native";
import Colors from "../../../../constants/colors.json";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
// import DatePicker from "../../../../components/Datepicker";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "@expo/vector-icons/Ionicons";
import TextInput from "../../../../components/TextInput";

const PersonalDetails = ({ show, setShow }) => {
  const goBack = useCallback(() => {
    setShow(false);
  }, [setShow]);

  return (
    <Fragment>
      <Modal
        visible={show}
        animationType={"slide"}
        presentationStyle={"pageSheet"}
      >
        <View style={styles.conttainer}>
          <View style={styles.header}>
            <View>
              <Ionicons
                name={"ios-menu-outline"}
                size={RFValue(20)}
                color={Colors.green}
              />
            </View>
            <View>
              <Text style={{ color: Colors.white, fontSize: RFValue(15) }}>
                Update Personal Details
              </Text>
            </View>
            <View />
          </View>
          <ScrollView style={styles.body}>
            <View style={styles.headerContainer}>
              <Ionicons
                color={Colors.green}
                size={RFValue(17)}
                name={"ios-person-outline"}
              />
              <Text
                type={"Medium"}
                style={{
                  color: Colors.gray,
                  fontSize: RFValue(14),
                  marginLeft: RFValue(10),
                }}
              >
                Personal Details
              </Text>
            </View>
            <View
              style={{
                paddingLeft: RFValue(40),
                paddingRight: RFValue(30),
                paddingTop: RFValue(20),
              }}
            >
              <View style={{ marginBottom: RFValue(20) }}>
                <Text style={{ marginBottom: RFValue(1), color: Colors.white }}>
                  Last Name *
                </Text>
                <View style={{ marginTop: RFValue(5) }}>
                  <TextInput
                    placeholder={"Last Name ... eg Doe"}
                    backgroundColor="#000"
                  />
                </View>
              </View>
              <View style={{ marginBottom: RFValue(20) }}>
                <Text style={{ marginBottom: RFValue(1), color: Colors.white }}>
                  First Name *
                </Text>
                <View style={{ marginTop: RFValue(5) }}>
                  <TextInput
                    placeholder={"First Name ... eg John"}
                    backgroundColor="#000"
                  />
                </View>
              </View>
              <View style={{ marginBottom: RFValue(20) }}>
                <Text style={{ marginBottom: RFValue(1), color: Colors.white }}>
                  Other Names
                </Text>
                <View style={{ marginTop: RFValue(5) }}>
                  <TextInput
                    placeholder={"Other Names here ..."}
                    backgroundColor="#000"
                  />
                </View>
              </View>
            </View>

            <View style={styles.headerContainer}>
              <Ionicons
                color={Colors.green}
                size={RFValue(17)}
                name={"ios-home-outline"}
              />
              <Text
                type={"Medium"}
                style={{
                  color: Colors.gray,
                  fontSize: RFValue(14),
                  marginLeft: RFValue(10),
                }}
              >
                Address Details
              </Text>
            </View>

            <View
              style={{
                paddingLeft: RFValue(40),
                paddingRight: RFValue(30),
                paddingTop: RFValue(20),
              }}
            >
              <View style={{ marginBottom: RFValue(20) }}>
                <Text style={{ marginBottom: RFValue(1), color: Colors.white }}>
                  Address
                </Text>
                <TextInput
                  placeholder={"Address here ... eg Accra Ghana"}
                  backgroundColor="#000"
                />
              </View>
            </View>
            <View style={{ marginHorizontal: RFValue(20) }}>
              <Button onPress={() => setShow(false)} title={"Update Profile"} />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  conttainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "#1a1a1a",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
  },
  body: {
    flex: 1,
    paddingHorizontal: RFValue(10),
  },
  bodyTop: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingTop: RFValue(10),
        paddingBottom: RFValue(20),
      },
      android: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: RFValue(10),
      },
    }),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: RFValue(15),
    marginTop: RFValue(20),
  },
});

export default PersonalDetails;
