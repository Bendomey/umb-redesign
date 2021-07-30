import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Colors from "../../../constants/colors.json";
import Text from "../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";

const Page = ({ title, description, image }) => {
  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: RFValue(20) }}>
        <View style={styles.imageView}>
          <Image
            source={image}
            resizeMode={"contain"}
            style={{ height: RFValue(150), width: RFValue(150) }}
          />
        </View>
        <View style={styles.textView}>
          <View>
            <Text
              type={"Bold"}
              style={{
                color: Colors.white,
                textAlign: "center",
                fontSize: RFValue(24),
              }}
            >
              {title}
            </Text>
          </View>
          <View style={{ marginTop: RFValue(10) }}>
            <Text
              type={"Light"}
              style={{
                color: Colors.gray,
                textAlign: "center",
                fontSize: RFValue(15),
              }}
            >
              {description}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageView: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  textView: {},
});

export default Page;
