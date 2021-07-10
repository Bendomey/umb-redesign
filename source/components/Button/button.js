import React, { Fragment } from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import Text from "../Text";

import Icon from "@expo/vector-icons/Feather";
import Colors from "../../constants/colors.json";
import { RFValue } from "react-native-responsive-fontsize";

const Button = ({
  accessibilityLabel,
  color,
  onPress,
  title,
  hasTVPreferredFocus,
  disabled,
  loading,
  icon,
  iconStyle,
  testID,
  style,
  outlined,
  iconPosition,
}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  const iconStyles = [styles.icon];
  if (color) {
    if (Platform.OS === "ios") {
      textStyles.push({ color: color });
    } else {
      buttonStyles.push({ backgroundColor: color });
    }
  }
  const accessibilityState = {};
  if (style) {
    buttonStyles.push(style);
  }
  if (iconStyle) {
    iconStyles.push(iconStyle);
  }
  if (disabled) {
    buttonStyles.push(styles.buttonDisabled);
    textStyles.push(styles.textDisabled);
    accessibilityState.disabled = true;
  }
  if (outlined) {
    buttonStyles.push(styles.buttonOutlined);
    textStyles.push(styles.textOutlined);
    iconStyles.push(styles.iconOutlined);
  }
  if (disabled && outlined) {
    buttonStyles.push(styles.buttonOutlinedDisabled);
  }

  const formattedTitle = Platform.select({
    android: title.toUpperCase(),
    ios: title,
  });

  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        hasTVPreferredFocus={hasTVPreferredFocus}
        testID={testID}
        disabled={disabled}
        onPress={onPress}
        touchSoundDisabled={disabled}
      >
        <View style={buttonStyles}>
          {loading ? (
            <ActivityIndicator color={outlined ? Colors.blue : Colors.white} />
          ) : (
            <>
              {iconPosition === "left" && (
                <Fragment>
                  {icon && (
                    <Icon name={icon} style={iconStyles} size={RFValue(22)} />
                  )}
                </Fragment>
              )}
              <Text style={textStyles}>{formattedTitle}</Text>
              {iconPosition === "right" && (
                <Fragment>
                  {icon && (
                    <Icon name={icon} style={iconStyles} size={RFValue(22)} />
                  )}
                </Fragment>
              )}
            </>
          )}
        </View>
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={accessibilityState}
      hasTVPreferredFocus={hasTVPreferredFocus}
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      touchSoundDisabled={disabled}
    >
      <View style={buttonStyles}>
        {loading ? (
          <ActivityIndicator color={outlined ? Colors.blue : Colors.white} />
        ) : (
          <>
            {iconPosition === "left" && (
              <Fragment>
                <View style={{ marginRight: RFValue(20) }}>
                  {icon && (
                    <Icon name={icon} style={iconStyles} size={RFValue(22)} />
                  )}
                </View>
              </Fragment>
            )}
            <Text type={"SemiBold"} style={textStyles}>
              {formattedTitle}
            </Text>
            {iconPosition === "right" && (
              <Fragment>
                <View style={{ marginLeft: RFValue(20) }}>
                  {icon && (
                    <Icon name={icon} style={iconStyles} size={RFValue(22)} />
                  )}
                </View>
              </Fragment>
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...Platform.select({
      ios: {
        backgroundColor: Colors.red,
        borderRadius: RFValue(15),
        height: RFValue(50),
        paddingHorizontal: RFValue(10),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      },
      android: {
        elevation: 0,
        backgroundColor: Colors.red,
        borderRadius: RFValue(15),
        height: RFValue(45),
        paddingHorizontal: RFValue(16),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      },
    }),
  },
  text: {
    textAlign: "center",
    margin: RFValue(5),
    ...Platform.select({
      ios: {
        color: "#fff",
      },
      android: {
        color: "#fff",
      },
    }),
  },
  icon: {
    ...Platform.select({
      ios: {
        color: Colors.white,
        fontSize: RFValue(18),
      },
      android: {
        color: Colors.white,
        fontWeight: "500",
        marginHorizontal: RFValue(8),
      },
    }),
  },
  buttonDisabled: {
    ...Platform.select({
      ios: {
        backgroundColor: Colors.blue_light, //use color picker to change it to a lighter shade of red
      },
      android: {
        elevation: 0,
        backgroundColor: Colors.blue_light, // same for this
      },
    }),
  },
  textDisabled: {
    ...Platform.select({
      ios: {
        color: Colors.white,
      },
      android: {
        color: Colors.white,
      },
    }),
  },
  buttonOutlined: {
    ...Platform.select({
      ios: {
        borderColor: Colors.orange,
        borderWidth: 1,
        backgroundColor: Colors.white,
      },
      android: {
        borderColor: Colors.orange,
        borderWidth: 1,
        backgroundColor: Colors.white,
      },
    }),
  },
  buttonOutlinedDisabled: {
    ...Platform.select({
      ios: {
        borderColor: Colors.blue_light,
        borderWidth: 1,
        opacity: 0.6,
        backgroundColor: "#f2f2f2",
      },
      android: {
        borderColor: Colors.blue,
        borderWidth: 1,
        backgroundColor: Colors.white,
      },
    }),
  },
  textOutlined: {
    ...Platform.select({
      ios: {
        color: Colors.orange,
      },
      android: {
        color: Colors.orange,
      },
    }),
  },
  iconOutlined: {
    ...Platform.select({
      ios: {
        color: "#cdcdcd",
      },
      android: {
        color: "#FBB03B",
      },
    }),
  },
});

export default Button;
