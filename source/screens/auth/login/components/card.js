import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../../components/Text";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../../constants/colors.json";

const SingleCard = ({ data }) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={data?.icon}
            color={Colors.primary}
            size={RFValue(25)}
          />
        </View>
        <Text style={{ color: Colors.white, textAlign: "center" }}>
          {data?.label}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: RFValue(80),
    margin: RFValue(10),
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: RFValue(50),
    width: RFValue(60),
    backgroundColor: "#1c1c1c",
    borderRadius: RFValue(10),
    marginBottom: RFValue(5),
  },
});

export default SingleCard;
