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
    // {
    //   label: "My Account",
    //   icon: "ios-person",
    //   navigation: () => navigation.navigate("account"),
    // },
    {
      label: "Loan",
      icon: "ios-document-text",
      navigation: () => {
        navigation.push("loan-main");
      },
    },
    {
      label: "Investment",
      icon: "ios-hourglass",
      navigation: () => {
        navigation.push("investment-main");
      },
    },
    {
      label: "Cardless W.",
      icon: "ios-layers",
      navigation: () => {
        navigation.push("cardless-withdrawal-main");
      },
    },
    {
      label: "Fund Transfer",
      icon: "ios-cash",
      navigation: () => {
        navigation.push("fund-transfer");
      },
    },
    {
      label: "Request",
      icon: "ios-reader",
      navigation: () => {
        navigation.push("request-main");
      },
    },
    {
      label: "Standing Order",
      icon: "ios-receipt-outline",
      navigation: () => {
        navigation.push("standing-order-main");
      },
    },
    {
      label: "Forex Rates",
      icon: "ios-swap-vertical",
      navigation: () => {
        navigation?.push("forex-rates-main");
      },
    },

    {
      label: "Bill Payment",
      icon: "ios-card",
      navigation: () => {
        navigation?.push("bill-payment");
      },
    },
    {
      label: "Bancassurance",
      icon: "ios-shield-checkmark",
      navigation: () => {
        navigation.push("bank-assurance-main")
      },

    },
    {
      label: "Airtime Top-up",
      icon: "ios-cloud-upload",
      navigation: () => {
        navigation.push("airtime-topup");
      },
    },
    {
      label: "Feedback",
      icon: "ios-chatbox-ellipses-outline",
      navigation: () => navigation.push("feeback"),
    },
    {
      label: "Micro Savings",
      icon: "ios-save-outline",
      navigation: () => navigation.push("micro-savings"),
    },
    {
      label: "Scan And Pay",
      icon: "ios-qr-code",
      navigation: () => navigation.push("scan-and-pay"),
    },
  ];

  return (
    <Fragment>
      <View style={styles.container}>
        <View
          style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
        >
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
          <ScrollView style={{ flex: 1 }}>
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
