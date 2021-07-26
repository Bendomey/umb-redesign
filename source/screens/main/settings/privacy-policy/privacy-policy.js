import React, { Fragment, useCallback } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Platform,
  Modal,
} from "react-native";
import Colors from "../../../../constants/colors.json";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const PrivacyPolicy = ({ show, setShow }) => {
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
                color={Colors.white}
              />
            </View>
            <View>
              <Text style={{ color: Colors.white, fontSize: RFValue(15) }}>
                PRIVACY POLICY
              </Text>
            </View>
            <View />
          </View>
          <ScrollView style={styles.body}>
            <View style={styles.bodyTop}>
              <View>
                <Text style={{ color: Colors.white, fontSize: RFValue(14) }}>
                  The Privacy Policy
                </Text>
              </View>
              <View>
                <Ionicons
                  name={"ios-download-outline"}
                  size={RFValue(15)}
                  color={Colors.white}
                />
              </View>
            </View>

            {[1, 2, 3, 4, 3, 4, 4].map((_, i) => (
              <Fragment key={i}>
                <View style={{ marginTop: RFValue(20) }}>
                  <Text
                    type={"SemiBold"}
                    style={{ fontSize: RFValue(13), color: Colors.white }}
                  >
                    Who may use the system?
                  </Text>
                  <Text style={{ color: Colors.gray, marginTop: RFValue(7) }}>
                    We want to inform users of this Service that these third
                    parties have access to your Personal Information. The reason
                    is to perform the tasks assigned to them on our behalf.
                    However, they are obligated not to disclose or use the
                    information for any other purpose
                  </Text>
                </View>
              </Fragment>
            ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <View style={{ width: width / 2 }}>
              <Button onPress={goBack} title={"Close"} />
            </View>
          </View>
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
        position: "absolute",
        width,
        bottom: RFValue(0),
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.1)",
        paddingTop: RFValue(10),
        paddingBottom: RFValue(20),
      },
      android: {
        position: "absolute",
        width,
        bottom: RFValue(0),
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: RFValue(10),
      },
    }),
  },
});

export default PrivacyPolicy;
