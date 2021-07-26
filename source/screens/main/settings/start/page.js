import React, { Fragment, useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  StatusBar,
  Share,
} from "react-native";
import Colors from "../../../../constants/colors.json";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import userAvatar from "../../../../assets/images/male.jpeg";
import ListItem from "./component/listItem";

import PrivacyPolicy from "../privacy-policy";
import FrequentlyAskedQuestions from "../faq";
import ChangePassword from "../change-password";
import UpdatePersonalDetails from "../personal-details";

export default function Settings({ navigation }) {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const requestLogout = useCallback(() => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to log out?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes!",
          onPress: () =>
            navigation.navigate("Auth", {
              screen: "login",
            }),
        },
      ],
      { cancelable: false }
    );
  }, [navigation]);
  const referAFriend = async () => {
    try {
      const result = await Share.share({
        message:
          "UMB Speed Add | A financial tech application that helps you to transact online with a registered umb account",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Fragment>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <SafeAreaView style={styles.safeAreaView}>
            <View style={{ marginBottom: RFValue(10) }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1595133403068-167e49b8569b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
                }}
                style={styles.avatarPng}
              />
            </View>
            <View style={styles.row}>
              <Text
                type={"SemiBold"}
                style={{
                  color: Colors.white,
                  fontSize: RFValue(17),
                  marginRight: RFValue(5),
                }}
              >
                John Malkovich
              </Text>
              <Ionicons
                name={"ios-checkmark-circle"}
                color={Colors.primary}
                size={RFValue(17)}
              />
            </View>
            <Text
              style={{
                color: Colors.white,
                fontSize: RFValue(11),
                marginTop: RFValue(2),
              }}
            >
              johnmalkovich@gmail.com
            </Text>
          </SafeAreaView>
        </View>
        <ScrollView style={styles.bottomContainer}>
          <View style={styles.listHeader}>
            <Text type={"Medium"} style={{ color: Colors.gray }}>
              Account
            </Text>
          </View>

          <View>
            <ListItem
              name={"Personal Details"}
              icon={"ios-person-circle-outline"}
              onPress={() => setShowDetails(true)}
            />
            <ListItem
              name={"Refer A Friend"}
              icon={"ios-gift-outline"}
              onPress={referAFriend}
            />
            <ListItem name={"Manage My Card"} icon={"ios-card-outline"} />
          </View>

          <View style={styles.listHeader}>
            <Text type={"Medium"} style={{ color: Colors.gray }}>
              Security
            </Text>
          </View>
          <View>
            <ListItem
              name={"Change Password"}
              icon={"ios-lock-closed-outline"}
              onPress={() => {
                setShowPassword(true);
              }}
            />
            <ListItem name={"Setup 2FA"} icon={"ios-lock-open-outline"} />
          </View>

          <View style={styles.listHeader}>
            <Text type={"Medium"} style={{ color: Colors.gray }}>
              Help
            </Text>
          </View>
          <View>
            <ListItem
              name={"Terms And Conditions"}
              icon={"ios-document-text-outline"}
              onPress={() => {
                setShowTerms(true);
              }}
            />
            <ListItem
              name={"Privacy Policy"}
              icon={"ios-document-outline"}
              onPress={() => {
                setShowPrivacy(true);
              }}
            />
            <ListItem
              name={"Frequently Asked Questions (FAQs)"}
              icon={"ios-help-outline"}
              onPress={() => {
                setShowFaq(true);
              }}
            />
          </View>

          <View style={styles.listHeader}>
            <Text type={"Medium"} style={{ color: Colors.gray }}>
              Other
            </Text>
          </View>
          <View style={{ marginBottom: RFValue(50) }}>
            <ListItem
              name={"Log Out"}
              icon={"ios-log-out-outline"}
              alert
              onPress={requestLogout}
            />
          </View>
        </ScrollView>
      </View>
      <PrivacyPolicy show={showPrivacy} setShow={setShowPrivacy} />
      <FrequentlyAskedQuestions show={showFaq} setShow={setShowFaq} />
      {/* <TermsAndConditions show={showTerms} setShow={setShowTerms} />*/}

      <ChangePassword show={showPassword} setShow={setShowPassword} />
      <UpdatePersonalDetails show={showDetails} setShow={setShowDetails} />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  topContainer: {
    backgroundColor: Colors.secondary,
    paddingTop: RFValue(30),
    paddingBottom: RFValue(30),
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
    maxHeight: "58%",
  },
  safeAreaView: { alignItems: "center", flexDirection: "column" },
  avatarPng: {
    height: RFValue(80),
    width: RFValue(80),
    borderRadius: 50,
  },
  row: { flexDirection: "row", alignItems: "center" },
  listHeader: {
    marginTop: RFValue(20),
    marginBottom: RFValue(5),
    paddingHorizontal: RFValue(15),
  },
});
