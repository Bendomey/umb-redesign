import React, { Fragment } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import Text from "../../../../../components/Text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../../constants/colors.json";

const ListItem = ({ name, icon, alert, onPress }) => {
  return (
    <Fragment>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={Colors.primary}
        style={styles.touchableContainer}
      >
        <View style={styles.container}>
          <View>
            <Ionicons
              name={icon}
              size={RFValue(20)}
              color={alert ? Colors.red : Colors.primary}
            />
          </View>
          <View style={{ marginLeft: RFValue(10) }}>
            <Text
              type={alert ? "Medium" : "Regular"}
              style={{
                fontSize: RFValue(13),
                color: alert ? Colors.red : Colors.white,
              }}
            >
              {name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: Colors.light_blue,
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(5),
    marginHorizontal: RFValue(10),
  },
  touchableContainer: {
    // marginTop: RFValue(2),
  },
});

export default ListItem;
