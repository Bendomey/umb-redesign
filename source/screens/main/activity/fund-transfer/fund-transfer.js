import React, { Fragment, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import { Ionicons } from "@expo/vector-icons";
import ChooseAccount from "../components/choose-account";
import DeleteBeneficiary from "./delete-beneficiary";

const Investment = ({ navigation }) => {
  const refRBSheet = useRef(null);
  const refRBSheetDel = useRef(null);
  const [tile, setTile] = useState("");
  const data = [
    {
      label: "To own UMB Account",
      icon: "ios-cash",
      onPress: (a) => {
        setTile(a)
        refRBSheet.current.open();
      },
    },
    {
      label: "To other UMB Account",
      icon: "ios-cash",
      onPress: (a) => {
        setTile(a)
        refRBSheet.current.open();
      },
    },
    {
      label: "Other Bank Account",
      icon: "ios-cash",
      onPress: (a) => {
        setTile(a)
        refRBSheet.current.open();
      },
    },
    {
      label: "To Wallet",
      icon: "ios-cash",
      onPress: (a) => {
        setTile(a)
        refRBSheet.current.open();
      },
    },
    {
      label: "Telco Wallet to UMB Account",
      icon: "ios-cash",
      onPress: (a) => {
        setTile(a)
        refRBSheet.current.open();
      },
    },
    {
      label: "Add Beneficiary",
      icon: "ios-cash",
      onPress: (a) => {
        setTile(a)
        // refRBSheet.current.open();
        navigation.push("add-beneficiary")
      },
    },
    {
      label: "Delete Beneficiary",
      icon: "ios-cash",
      onPress: (a) => {
        setTile(a)
        refRBSheetDel.current.open();
      },
    },
  ];

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Fund Transfer
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            Select any of the options to proceed
          </Text>
        </View>
        <ScrollView style={styles.textInputContainer}>
          {data?.map((type, i) => (
            <Fragment key={i}>
              <TouchableOpacity onPress={() => type.onPress(type.label)}>
                <Card data={type} />
              </TouchableOpacity>
            </Fragment>
          ))}
        </ScrollView>
      </View>
      <ChooseAccount
        refRBSheet={refRBSheet}
        onNavigate={() => {
          refRBSheet.current.close();
          navigation.push("fund-transfer-request", { tile });
        }}
      />
      <DeleteBeneficiary refRBSheet={refRBSheetDel} />
    </Fragment>
  );
};

const Card = ({ data }) => {
  return (
    <Fragment>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name={data?.icon}
            size={RFValue(20)}
            color={Colors.primary}
          />
          <Text
            type={"Light"}
            style={{
              color: Colors.white,
              marginLeft: RFValue(5),
              fontSize: RFValue(13),
            }}
          >
            {data?.label}
          </Text>
        </View>
        <View>
          <Ionicons
            name={"ios-chevron-forward"}
            size={RFValue(15)}
            color={Colors.white}
          />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  header: {
    marginTop: RFValue(10),
    marginHorizontal: RFValue(20),
  },
  textInputContainer: {
    marginTop: RFValue(30),
    marginBottom: RFValue(100),
    marginHorizontal: RFValue(20),
  },
  card: {
    backgroundColor: "#1c1c1c",
    marginBottom: RFValue(20),
    padding: RFValue(20),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Investment;
