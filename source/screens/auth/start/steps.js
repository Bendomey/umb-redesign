import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../../constants/colors.json";

const Steps = ({ step, data }) => {
  return (
    <>
      <View style={styles.container}>
        {data?.map((_, dataIdx) => (
          <View
            key={dataIdx}
            style={{
              height: 6,
              backgroundColor: dataIdx === step ? Colors.white : "#1c1c1c",
              width: dataIdx === step ? 30 : 20,
              marginRight: 10,
              borderRadius: 50,
            }}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Steps;
