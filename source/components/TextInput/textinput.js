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
        style={[
          styles.container,
          { backgroundColor: props.backgroundColor || "#1c1c1c" },
        ]}
        keyboardAppearance={"dark"}
        selectionColor={Colors.primary}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "#3d3d3d",
    borderRadius: RFValue(7),
    height: RFValue(50),
    paddingHorizontal: RFValue(15),

    color: Colors.white,
    fontFamily: "Poppins-Regular",
  },
});

export default TextInput;
