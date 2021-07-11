import React, { useRef } from "react";
import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import Colors from "../../../../constants/colors.json";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
import BottomSheet from "../../../../components/BottomSheet";
import { RFValue } from "react-native-responsive-fontsize";
import SingleCard from "./card";

const services = [
  {
    label: "FAQ's",
    icon: "ios-chatbubble",
  },
  {
    label: "Contact Us",
    icon: "ios-call",
  },
  {
    label: "Currency C.",
    icon: "ios-calculator",
  },
  {
    label: "Our Locations",
    icon: "ios-location",
  },
  {
    label: "Privacy Policy",
    icon: "ios-albums",
  },
  {
    label: "Terms & Conditions",
    icon: "ios-document",
  },
];

const { height } = Dimensions.get("window");
const Services = () => {
  const refRBSheet = useRef(null);

  return (
    <>
      <Button
        style={{ backgroundColor: Colors.green }}
        title={"Open Guest Services"}
        onPress={() => refRBSheet.current.open()}
      />

      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={(height * 2) / 3}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            // backgroundColor: "rgba(0,0,0,.8)",
          },
          draggableIcon: {
            backgroundColor: "#fff",
          },
        }}
      >
        <>
          <View style={styles.container}>
            <Text
              type={"Medium"}
              style={{
                color: Colors.white,
                textAlign: "center",
                marginTop: RFValue(10),
                fontSize: RFValue(17),
              }}
            >
              Guest Services
            </Text>
            <View style={{ margin: RFValue(20) }}>
              <Text
                style={{
                  color: Colors.gray,
                  fontSize: RFValue(12),
                }}
              >
                Our guest services are available for our UMB customers and
                Non-UMB customers. Feel Free to use them at any time
              </Text>
            </View>
            <ScrollView>
              <View style={styles.servicesContainer}>
                {services.map((service, serviceIdx) => (
                  <SingleCard key={serviceIdx} data={service} />
                ))}
              </View>
            </ScrollView>
          </View>
        </>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
  },
  servicesContainer: {
    marginHorizontal: RFValue(20),
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default Services;
