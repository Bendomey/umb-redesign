import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../../components/Text";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../../constants/colors.json";

const { width } = Dimensions.get("window");

const SingleCard = ({ data, onPress }) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.container}
      >
        <View style={styles.iconContainer}>
          <Ionicons
            name={data?.icon}
            color={Colors.primary}
            size={RFValue(25)}
          />
        </View>
        <Text
          style={{
            color: Colors.white,
            textAlign: "center",
            fontSize: RFValue(10),
          }}
        >
          {data?.label}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 4,
    margin: RFValue(5),
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    padding: RFValue(5),
    borderRadius: RFValue(10),
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: RFValue(50),
    width: RFValue(60),
  },
});

export default SingleCard;
