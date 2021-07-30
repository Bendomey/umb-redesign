import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../constants/colors.json";
import { ScrollView } from "react-native-gesture-handler";

const data = [
  { title: "BillPayment 1", description: "Not Specified" },
  { title: "BillPayment Type", description: "Not Specified" },
  { title: "BillPayment Amount", description: "Not Specified" },
  { title: "Start Date", description: "Not Specified" },
  { title: "Maturity Date", description: "Not Specified" },
  { title: "Outstanding Amount", description: "Not Specified" },
  { title: "Next Due Date", description: "Not Specified" },
  { title: "Due Amount", description: "Not Specified" },
];

const Loan = ({}) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={"Bold"}
            style={{ color: Colors.white, fontSize: RFValue(25) }}
          >
            Loan Account Balance
          </Text>
          <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
            Loan account balance description below
          </Text>
        </View>
        <ScrollView>
          <View style={styles.textInputContainer}>
            {data?.map((a, i) => (
              <Fragment key={i}>
                <Card data={a} />
              </Fragment>
            ))}
          </View>
        </ScrollView>
      </View>
    </Fragment>
  );
};

const Card = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#242323",
        padding: 20,
      }}
    >
      <Text type={"Bold"} style={{ color: Colors.white }}>
        {data?.title}:
      </Text>
      <Text style={{ color: Colors.white, marginLeft: 10 }}>
        {data?.description}
      </Text>
    </View>
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
    marginHorizontal: RFValue(20),
    backgroundColor: "#1e1e1f",
    borderRadius: 10,
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

export default Loan;
