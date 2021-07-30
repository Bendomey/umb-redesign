import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const PageWrapper = ({ children }) => {
  return <View style={styles.pageWrapper}>{children}</View>;
};

export default PageWrapper;

const styles = StyleSheet.create({
  pageWrapper: {
    marginTop: RFValue(30),
    marginHorizontal: RFValue(20),
  },
});
