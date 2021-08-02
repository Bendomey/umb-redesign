import React, { Fragment } from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import Colors from "../../../constants/colors.json";
import Text from "../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import SingleCard from "./components/card";
import Button from "../../../components/Button";

const services = [
  {
    label: "Products",
    icon: "ios-chatbubble",
    page: "products",
  },
  {
    label: "Contact Us",
    icon: "ios-call",
    page: "contact-us",
  },

  {
    label: "Our Locations",
    icon: "ios-location",
    page: "locations",
  },
];

const Welcome = ({ navigation }) => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <Text
              type={"Bold"}
              style={{ color: Colors.white, fontSize: RFValue(30) }}
            >
              Welcome to Umb SpeedApp
            </Text>
            <Text
              type={"Light"}
              style={{
                color: Colors.gray,
                fontSize: RFValue(15),
                marginTop: RFValue(5),
              }}
            >
              Select any of the options to proceed
            </Text>
            <View style={styles.servicesContainer}>
              {services.map((service, serviceIdx) => (
                <SingleCard
                  key={serviceIdx}
                  data={service}
                  onPress={() => {
                    navigation.push(service.page);
                  }}
                />
              ))}
            </View>
          </View>
          <View>
            <Button
              onPress={() => {
                navigation?.push("register");
              }}
              title={"Self-Registration"}
            />
            <View style={{ marginTop: RFValue(10) }}>
              <Button
                style={{ backgroundColor: "#000" }}
                onPress={() => {
                  navigation?.push("login");
                }}
                title={"Login"}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  innerContainer: {
    flex: 1,
    margin: RFValue(20),
    justifyContent: "space-between",
  },
  servicesContainer: {
    marginTop: RFValue(20),
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default Welcome;
