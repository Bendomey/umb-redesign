import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Colors from "../../../constants/colors.json";
import PagerView from "react-native-pager-view";
import { RFValue } from "react-native-responsive-fontsize";
import Steps from "./steps";
import Page from "./page";
import image from "../../../assets/images/secure-icon.png";

const data = [
  {
    title: "Manage everything in one place",
    description:
      "Manage all the bank accounts, mobile money, credit cards and many more in one place",
    image: image,
  },
  {
    title: "Track your monthly expenses",
    description:
      "Keep track of what you're spending your money on and where it's going",
    image: image,
  },
];

const Start = () => {
  const [pageEnabled, setPageEnabled] = useState(0);
  const pagerRef = useRef(null);
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 0.1,
            marginHorizontal: RFValue(20),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Text
              type={"Medium"}
              style={{ color: "#595959", fontSize: RFValue(15) }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.7 }}>
          <PagerView
            ref={pagerRef}
            style={styles.pagerView}
            initialPage={pageEnabled}
            transitionStyle={"scroll"}
            onPageSelected={(e) => {
              setPageEnabled(e.nativeEvent.position);
            }}
          >
            {data?.map((page, pageIdx) => (
              <View key={pageIdx}>
                <Page
                  title={page?.title}
                  description={page?.description}
                  image={page?.image}
                />
              </View>
            ))}
          </PagerView>
        </View>
        <View
          style={{
            flex: 0.2,
            marginHorizontal: RFValue(20),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Steps data={data} step={pageEnabled} />
          </View>
          <View>
            <Button
              onPress={() => {
                if (pageEnabled >= data?.length) {
                  //navigate to new screen
                } else {
                  // increase it
                  pagerRef.current.setPage(pageEnabled + 1);
                }
              }}
              title={pageEnabled >= data?.length - 1 ? "Continue" : "Next"}
              iconPosition={"right"}
              icon={"arrow-right"}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  pagerView: {
    flex: 1,
  },
});

export default Start;
