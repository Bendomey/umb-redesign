import React, { Fragment, useRef } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../../../constants/colors.json";
import Text from "../../../../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const QuotationItems = ({}) => {
  const refRBSheet = useRef(null);
  return (
    <>
      
        <View>
          <TouchableOpacity>
            <Card
              data={{
                label: "Motor Assurance",
                icon: "md-car-sport",
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop:RFValue(10)}}>
          <TouchableOpacity>
            <Card
              data={{
                label: "Fire Assurance",
                icon: "logo-firefox",
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop:RFValue(10)}}>
          <TouchableOpacity>
            <Card
              data={{
                label: "General Personal Accident Cover",
                icon: "person-add",
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop:RFValue(10)}}>
          <TouchableOpacity>
            <Card
              data={{
                label: "Student Personal Accident Cover",
                icon: "person-add",
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop:RFValue(10)}}>
          <TouchableOpacity>
            <Card
              data={{
                label: "Homecall (Funeral) Policy",
                icon: "home-sharp",
              }}
            />
          </TouchableOpacity>
        </View>
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
          <View style={{ marginLeft:RFValue(10)}}>
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

export default QuotationItems;
