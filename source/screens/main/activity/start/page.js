import React, { Fragment } from "react";
import { View } from "react-native";
import Colors from "../../../../constants/colors.json";
import Text from "../../../../components/Text";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ServiceCard from "../components/service-card";
import { ScrollView } from "react-native-gesture-handler";

export default function Services({ navigation }) {
  const services = [
    {
      label: "My Account",
      icon: "ios-person",
      navigation: () => navigation.navigate("account"),
    },
    {
      label: "Loan",
      icon: "ios-document-text",
      navigation: () => { },
    },
    {
      label: "Investment",
      icon: "ios-call",
      navigation: () => { },
    },
    {
      label: "Cardless W.",
      icon: "ios-calculator",
      navigation: () => { },
    },
    {
      label: "Request",
      icon: "ios-location",
      navigation: () => { },
    },
    {
      label: "Request",
      icon: "ios-albums",
      navigation: () => { },
    },
    {
      label: "Standing Order",
      icon: "ios-document",
      navigation: () => { },
    },
    {
      label: "Forex Rates",
      icon: "ios-document",
      navigation: () => { },
    },
    {
      label: "Bill Payment",
      icon: "ios-document",
      navigation: () => { },
    },
    {
      label: "Bancassurance",
      icon: "ios-document",
      navigation: () => { },
    },
    {
      label: "Airtime Top-up",
      icon: "ios-document",
      navigation: () => { },
    },
    {
      label: "Feedback",
      icon: "ios-document",
      navigation: () => { },
    },
    {
      label: "Micro Savings",
      icon: "ios-document",
      navigation: () => { },
    },
  ];

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text
            type={"Light"}
            style={{
              color: Colors.gray,
              fontSize: RFValue(15),
              marginTop: RFValue(5),
            }}
          >
            Select any of these services to proceed
          </Text>
          <ScrollView>
            <View style={styles.servicesContainer}>
              {services.map((service, serviceIdx) => (
                <ServiceCard
                  key={serviceIdx}
                  data={service}
                  onPress={service.navigation}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet?.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  servicesContainer: {
    marginTop: RFValue(20),
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
