import React, { Fragment } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import Colors from "../../../../constants/colors.json";
import { StyleSheet } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { rgbaColor } from "react-native-reanimated/src/reanimated2/Colors";
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
const buttons = [
  {
    label: "Send",
    color: Colors?.primary,
    svg: () => (
      <Ionicons name={"md-send"} color={Colors?.white} size={RFValue(14)} />
    ),
  },
  {
    label: "Withdraw",
    color: Colors?.green,
    svg: () => (
      <Ionicons
        name={"md-arrow-down"}
        color={Colors?.white}
        size={RFValue(14)}
      />
    ),
  },
  {
    label: "More",
    color: Colors?.red,
    svg: () => (
      <Ionicons name={"md-cog"} color={Colors?.white} size={RFValue(14)} />
    ),
  },
];
export default function Transaction({ navigation }) {
  return (
    <Fragment>
      <SafeAreaView style={style?.container}>
        <View style={style.header}>
          <View
            style={{
              maxWidth: "80%",
              width: "80%",
              flexWrap: "wrap",
            }}
          >
            <Text
              type={"Light"}
              style={{ color: Colors?.gray, fontSize: RFValue(13) }}
            >
              {new Date()?.toDateString()}
            </Text>
            <Text
              type={"Bold"}
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "100%",
                fontSize: RFValue(18),
                color: Colors?.white,
              }}
            >
              Good Morning, Domey!
            </Text>
          </View>
          <View style={{ borderWidth: 2 }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1595133403068-167e49b8569b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
              }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
          </View>
        </View>
        <View style={style.miniheader}>
          <View
            style={{
              backgroundColor: "rgba(48, 48, 48,0.3)",
              borderRadius: RFValue(20),
              height: RFValue(110),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#fff",
              borderColor: "#404040",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.3,
              shadowRadius: 1.41,

              elevation: 2,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="md-wallet" size={18} color={Colors?.gray} />
              <Text style={{ color: Colors?.gray, marginLeft: RFValue(3) }}>
                Your Balance
              </Text>
            </View>
            <Text
              type={"Medium"}
              style={{
                color: "#fff",
                fontSize: RFValue(24),
                marginTop: RFValue(4),
              }}
            >
              GHS 45,000
            </Text>
          </View>
        </View>
        <View style={style.buttonContainer}>
          {buttons?.map((but, key) => (
            <Fragment key={key}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  zIndex: 50,
                  paddingVertical: RFValue(11),
                  paddingHorizontal: RFValue(15),
                  borderRadius: RFValue(12),
                  backgroundColor: but?.color,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}
              >
                <Fragment>{but?.svg()}</Fragment>
                <Text
                  type={"Light"}
                  style={{
                    color: Colors?.white,
                    marginLeft: RFValue(5),
                    fontSize: RFValue(14),
                  }}
                >
                  {but?.label}
                </Text>
              </TouchableOpacity>
            </Fragment>
          ))}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: RFValue(10),
            marginTop: RFValue(10),
            alignItems: "center",
          }}
        >
          <Text type={"Bold"} style={{ color: "#fff" }}>
            Recents Transactions
          </Text>
          <Text type={"Light"} style={{ color: "#fff", fontSize: RFValue(10) }}>
            View all
          </Text>
        </View>
        <ScrollView style={style.transactionList}>
          {trans?.map((transaction, key) => (
            <Fragment key={key}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingVertical: RFValue(12),
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomWidth: 2,
                  borderBottomColor: rgbaColor(102, 102, 102, 0.2),
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
                      type={"Medium"}
                      style={{
                        color: Colors?.gray,
                        marginTop: RFValue(2),
                        fontSize: RFValue(10),
                      }}
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
      </SafeAreaView>
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
    marginTop: RFValue(10),
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#fff",
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
    // borderWidth: 2,
    borderColor: "white",
    marginTop: RFValue(10),
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
  },
  transactionList: {
    marginTop: RFValue(20),
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
    maxHeight: "45%",
  },
});
