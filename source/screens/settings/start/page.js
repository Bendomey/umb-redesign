import React, { Fragment } from "react";
import { ScrollView, View } from "react-native";
import Colors from "../../../constants/colors.json";
import { StyleSheet } from "react-native";
import Text from "../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
const trans = [
  {
    type: "Bill Payment",
    date: new Date("2021-07-12T15:13:51.478Z"),
    amount: 200,
    svg: () => (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#fff",
          padding: RFValue(6),
          backgroundColor: "rgba(255, 46, 98, 0.2)",
          borderRadius: RFValue(10),
        }}
      >
        <Ionicons name={"arrow-up"} color={Colors?.red} size={RFValue(14)} />
      </View>
    ),
  },
  {
    type: "Airtime",
    date: new Date("2021-07-15T15:12:51.478Z"),
    amount: 100,
    svg: () => (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#fff",
          padding: RFValue(6),
          backgroundColor: "rgba(255, 46, 98, 0.2)",
          borderRadius: RFValue(10),
        }}
      >
        <Ionicons name={"arrow-up"} color={Colors?.red} size={RFValue(14)} />
      </View>
    ),
  },
  {
    type: "Received",
    date: new Date("2021-07-15T12:13:51.478Z"),
    amount: 1200,
    svg: () => (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#fff",
          padding: RFValue(6),
          backgroundColor: "rgba(28, 199, 173, 0.2)",
          borderRadius: RFValue(10),
        }}
      >
        <Ionicons
          name={"arrow-down"}
          color={Colors?.green}
          size={RFValue(14)}
        />
      </View>
    ),
  },
  {
    type: "Airtime",
    date: new Date("2021-07-15T15:12:51.478Z"),
    amount: 100,
    svg: () => (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#fff",
          padding: RFValue(6),
          backgroundColor: "rgba(255, 46, 98, 0.2)",
          borderRadius: RFValue(10),
        }}
      >
        <Ionicons name={"arrow-up"} color={Colors?.red} size={RFValue(14)} />
      </View>
    ),
  },

  {
    type: "DSTV Bill",
    date: new Date("2021-07-15T15:13:51.478Z"),
    amount: 1203.12,
    svg: () => (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#fff",
          padding: RFValue(6),
          backgroundColor: "rgba(255, 46, 98, 0.2)",
          borderRadius: RFValue(10),
        }}
      >
        <Ionicons name={"arrow-up"} color={Colors?.red} size={RFValue(14)} />
      </View>
    ),
  },
  {
    type: "Sent",
    date: new Date("2021-07-13"),
    amount: 5223.12,
    svg: () => (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#fff",
          padding: RFValue(6),
          backgroundColor: "rgba(255, 46, 98, 0.2)",
          borderRadius: RFValue(10),
        }}
      >
        <Ionicons name={"arrow-up"} color={Colors?.red} size={RFValue(14)} />
      </View>
    ),
  },
  {
    type: "Received",
    date: new Date("2021-07-15T12:13:51.478Z"),
    amount: 500,
    svg: () => (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#fff",
          padding: RFValue(6),
          backgroundColor: "rgba(28, 199, 173, 0.2)",
          borderRadius: RFValue(10),
        }}
      >
        <Ionicons
          name={"arrow-down"}
          color={Colors?.green}
          size={RFValue(14)}
        />
      </View>
    ),
  },
];
export default function Transaction({}) {
  return (
    <Fragment>
      <View style={style?.container}>
        <View style={style.header}>
          <View
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              type={"Medium"}
              style={{
                fontSize: RFValue(18),
                color: Colors?.white,
              }}
            >
              Settings
            </Text>
          </View>
        </View>
        <ScrollView style={style.transactionList}>
          {trans?.map((transaction, key) => (
            <Fragment key={key}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginVertical: RFValue(10),
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {transaction?.svg()}
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: RFValue(12),
                    }}
                  >
                    <Text type={"Bold"} style={{ color: Colors?.white }}>
                      {transaction?.type}
                    </Text>
                    <Text
                      type={"Light"}
                      style={{ color: Colors?.gray, fontSize: RFValue(10) }}
                    >
                      {moment(transaction?.date)?.fromNow()}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text type={"Bold"} style={{ color: Colors?.white }}>
                    GHS {transaction?.amount}
                  </Text>
                </View>
              </View>
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </Fragment>
  );
}

const style = StyleSheet?.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.secondary,
    position: "relative",
  },
  header: {
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  miniheader: {
    marginTop: RFValue(12),
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: RFValue(12),
    borderColor: "white",
    marginTop: RFValue(10),
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
  },
  transactionList: {
    marginTop: RFValue(20),
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
    maxHeight: "75%",
  },
});
