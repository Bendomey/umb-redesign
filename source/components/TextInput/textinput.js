import React from "react";
import { TextInput as BaseTextInput, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors.json";

const TextInput = (props) => {
  return (
    <>
      <BaseTextInput
        {...props}
        placeholderTextColor={"#a19f9f"}
        style={styles.container}
        keyboardAppearance={"dark"}
        selectionColor={Colors.primary}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#3d3d3d",
    borderRadius: RFValue(10),
    height: RFValue(50),
    paddingHorizontal: RFValue(18),
  },
});

export default TextInput;
