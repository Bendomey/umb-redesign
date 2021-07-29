import React, { Fragment } from "react";
import { View } from "react-native";
import Colors from "../../../../constants/colors.json";
import Text from "../../../../components/Text";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ServiceCard from "../components/service-card";
import { ScrollView } from "react-native-gesture-handler";

const services = [
  {
    label: "My Account",
    icon: "ios-person",
  },
  {
    label: "Loan",
    icon: "ios-document-text",
  },
  {
    label: "Investment",
    icon: "ios-call",
  },
  {
    label: "Cardless W.",
    icon: "ios-calculator",
  },
  {
    label: "Request",
    icon: "ios-location",
  },
  {
    label: "Request",
    icon: "ios-albums",
  },
  {
    label: "Standing Order",
    icon: "ios-document",
  },
  {
    label: "Forex Rates",
    icon: "ios-document",
  },
  {
    label: "Bill Payment",
    icon: "ios-document",
  },
  {
    label: "Bancassurance",
    icon: "ios-document",
  },
  {
    label: "Airtime Top-up",
    icon: "ios-document",
  },
  {
    label: "Feedback",
    icon: "ios-document",
  },
  {
    label: "Micro Savings",
    icon: "ios-document",
  },
];

export default function Services({ navigation }) {
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
                  onPress={() => {
                    navigation.push("contact-us");
                  }}
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
