import React, { Fragment, useRef } from "react";
import {
    Dimensions,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Colors from "../../../../../constants/colors.json";
import Button from "../../../../../components/Button";
import Text from "../../../../../components/Text";
import BottomSheet from "../../../../../components/BottomSheet";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const DeleteBeneficiary = ({ refRBSheet, onDelete }) => {
    // const refRBSheet = useRef(null);
    return (
        <>
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
                            Delete Beneficiary
                        </Text>
                        <View style={{ margin: RFValue(20) }}>
                            <Text
                                style={{
                                    color: Colors.gray,
                                    fontSize: RFValue(12),
                                }}
                            >
                                This action cannot be reverted. Your current Beneficiary would be deleted permanently from our system
                            </Text>
                        </View>
                        <ScrollView style={{ flex: 1, marginHorizontal: RFValue(20) }}>



                            <TouchableOpacity
                                style={{ marginBottom: RFValue(10) }}
                                onPress={() => refRBSheet.current.close()}
                            >
                                <Card
                                    del
                                    data={{
                                        label: "No, Don't Delete",
                                        icon: "ios-arrow-forward-outline",
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginBottom: RFValue(10) }}
                                onPress={() => refRBSheet.current.close()}
                            >
                                <Card
                                    data={{
                                        label: "Salary Advance",
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

const Card = ({ data, del }) => {
    return (
        <Fragment>
            <View style={del ? styles.cardx : styles.card}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                        name={data?.icon}
                        size={RFValue(20)}
                        color={del ? Colors.red : Colors.primary}
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
    cardx: {
        backgroundColor: "transparent",
        padding: RFValue(15),
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1c1c1c",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default DeleteBeneficiary;
