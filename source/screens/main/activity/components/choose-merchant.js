import React, { Fragment, useRef } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Colors from "../../../../constants/colors.json";
import Text from "../../../../components/Text";
import BottomSheet from "../../../../components/BottomSheet";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const Services = ({}) => {
  const [selected, setSelected] = React.useState("");

  const refRBSheet = useRef(null);
  return (
    <>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Card
          data={{
            label: selected || "Select An Option",
            icon: "ios-document-text",
          }}
        />
      </TouchableOpacity>
      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={(height * 2) / 3}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            // backgroundColor: "rgba(0,0,0,.8)",
          },
          draggableIcon: {
            backgroundColor: "#fff",
          },
        }}
      >
        <>
          <View style={styles.container}>
            <Text
              type={"Medium"}
              style={{
                color: Colors.white,
                textAlign: "center",
                marginTop: RFValue(10),
                fontSize: RFValue(17),
              }}
            >
              Merchant Select
            </Text>
            <View style={{ margin: RFValue(20) }}>
              <Text
                style={{
                  color: Colors.gray,
                  fontSize: RFValue(12),
                }}
              >
                Please select target merchant from these options listed below
              </Text>
            </View>
            <ScrollView style={{ flex: 1, marginHorizontal: RFValue(20) }}>
              <TouchableOpacity
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
                style={{ marginBottom: RFValue(10) }}
              >
                <Card
                  data={{
                    label: "IFS Richie Unit Fund",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Koforidua Technical University",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Lands Commission",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "M&BEE School",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Multikids Inclusive Academy ",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Multichoice Ghana",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "PETRA OPPORTUNITY PENSION SCHEME",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Pentecost University College",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "ROBERT JOHN MEMORIAL MONTESORRI SCHOOL",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Royal House Chapel",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Tamale International School",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "UMB BALANCED FUND",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "CHRIST APOSTOLIC UNIVERSITY COLLEGE",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Electricity Corporation of Ghana",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Ghana Water Company",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "Ghana Gov Mda Services",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "ICGC Christ Temple",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "ICGC SCHOOL JUNCTION ASSEMBLY",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "IFS Legacy Unit Trust",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: RFValue(10) }}
                onPress={() => {
                  refRBSheet.current.close();
                  setSelected("IFS Richie Unit Fund");
                }}
              >
                <Card
                  data={{
                    label: "IFS My Wealth Unit Trust",
                    icon: "ios-arrow-forward-outline",
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </>
      </BottomSheet>
    </>
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
    backgroundColor: "#292929",
  },
  servicesContainer: {
    marginHorizontal: RFValue(20),
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#1c1c1c",
    padding: RFValue(15),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Services;
