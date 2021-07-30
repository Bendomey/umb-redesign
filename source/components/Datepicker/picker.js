import React, { Fragment, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
} from "react-native";
import Text from "../Text";
import BottomSheet from "../BottomSheet";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors.json";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format, subDays } from "date-fns";

const PickerComponent = () => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(subDays(new Date(), 1));
  const refRBSheet = useRef(null);
  const openDate = () => {
    setShow(true);
    Platform.OS === "ios" && refRBSheet.current.open();
  };

  const onChange = (event, date) => {
    const currentDate = date || selectedDate;
    setShow(Platform.OS === "ios");
    setSelectedDate(currentDate);
  };
  return (
    <Fragment>
      <TouchableHighlight underlayColor={"#f2f2f2"} onPress={openDate}>
        <View>
          <View style={[styles.cardContainer]}>
            <View>
              <Text style={{ color: Colors.white }}>
                {format(selectedDate, "PPPP")}
              </Text>
            </View>
            {/* <Feather name={'check'} color={Colors.green} /> */}
          </View>
        </View>
      </TouchableHighlight>
      {Platform.OS === "ios" && (
        <BottomSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Fragment>
            <View>
              <View style={styles.dateHeaderContainer}>
                <TouchableOpacity
                  style={{
                    height: "100%",
                    paddingHorizontal: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  activeOpacity={0.5}
                  onPress={() => {
                    refRBSheet.current.close();
                    setShow(false);
                  }}
                >
                  <Text style={{ color: Colors.primary }}>Done</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={selectedDate}
                mode={"date"}
                themeVariant={"light"}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
                maximumDate={subDays(new Date(), 1)}
              />
            </View>
          </Fragment>
        </BottomSheet>
      )}
      {show && Platform.OS === "android" && (
        <Fragment>
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={selectedDate}
            mode={"date"}
            is24Hour={true}
            display={"default"}
            onChange={onChange}
            maximumDate={subDays(new Date(), 1)}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  placeholderText: {
    color: "#8C8C8C",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: RFValue(7),
    paddingHorizontal: RFValue(15),
    height: RFValue(55),
  },
  dateHeaderContainer: {
    height: RFValue(20),
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default PickerComponent;
