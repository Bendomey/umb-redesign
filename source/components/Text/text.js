import React, { Fragment } from "react";
import { Text } from "react-native";

const TextComponent = ({ style, type, children }) => {
  const customStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Fragment>
      <Text
        style={[
          {
            ...customStyles,
            fontFamily: `${
              type === "Black"
                ? "Poppins-Black"
                : type === "ExtraBold"
                ? "Poppins-ExtraBold"
                : type === "Bold"
                ? "Poppins-Bold"
                : type === "ExtraLight"
                ? "Poppins-ExtraLight"
                : type === "Light"
                ? "Poppins-Light"
                : type === "Medium"
                ? "Poppins-Medium"
                : type === "Regular"
                ? "Poppins-Regular"
                : type === "SemiBold"
                ? "Poppins-SemiBold"
                : "Poppins-Thin"
            }`,
          },
        ]}
      >
        {children}
      </Text>
    </Fragment>
  );
};

TextComponent.defaultProps = {
  type: "Regular",
};

export default TextComponent;
