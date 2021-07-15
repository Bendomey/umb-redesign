import React, { Fragment } from "react";
import { View } from "react-native";
import Colors from "../../../../constants/colors.json";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
export default function NavBar({ navigation }) {
  return (
    <Fragment>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flex: 1,
          width: "100%",
          height: RFValue(100),
          display: "flex",
          justifyContent: "center",
          paddingHorizontal: RFValue(10),
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "rgba(48, 48, 48,0.6)",
            justifyContent: "space-between",
            paddingHorizontal: RFValue(15),
            borderRadius: RFValue(20),
            paddingVertical: RFValue(22),
            elevation: 4,
          }}
        >
          <Feather name={"grid"} size={27} color={Colors?.white} />
          <Feather name={"radio"} size={27} color={"rgba(252, 252, 252,0.6)"} />
          <Feather name={"clock"} size={27} color={"rgba(252, 252, 252,0.6)"} />
          <Feather
            name={"settings"}
            size={27}
            color={"rgba(252, 252, 252,0.6)"}
          />
        </View>
      </View>
    </Fragment>
  );
}
