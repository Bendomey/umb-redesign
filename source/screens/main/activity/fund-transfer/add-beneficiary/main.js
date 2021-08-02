import React from 'react'
import { StyleSheet, View, } from 'react-native'
import PageHader from '../../../../../components/PageHeader/PageHader';
import Text from '../../../../../components/Text';
import TextInput from '../../../../../components/TextInput';
import Colors from '../../../../../constants/colors.json'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import Button from "../../../../../components/Button";


const AddBeneficiary = () => {
    return (
        <View style={styles.container}>
            <PageHader title="Add Beneficiary" description="Add Beneeficiary by filling the form below" />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={styles.textInputContainer}>
                    <View>
                        <Text
                            type={"Light"}
                            style={{
                                color: Colors.white,
                                fontSize: RFValue(12),
                                marginBottom: RFValue(5),
                            }}
                        >
                            Beneficiary Full name *
                        </Text>
                        <TextInput onChange={(text) => setAccountNumber(text)} />
                    </View>
                    <View style={{ marginTop: RFValue(20) }}>
                        <Text
                            type={"Light"}
                            style={{
                                color: Colors.white,
                                fontSize: RFValue(12),
                                marginBottom: RFValue(5),
                            }}
                        >
                            Beneficiary Email Address *
                        </Text>
                        <TextInput onChange={(text) => setAccountNumber(text)} />
                    </View>
                    <View style={{ marginTop: RFValue(20) }}>
                        <Text
                            type={"Light"}
                            style={{
                                color: Colors.white,
                                fontSize: RFValue(12),
                                marginBottom: RFValue(5),
                            }}
                        >
                            Beneficiary Phone Number *
                        </Text>
                        <TextInput onChange={(text) => setAccountNumber(text)} />
                    </View>
                    <View style={{ marginTop: RFValue(20) }}>
                        <Text
                            type={"Light"}
                            style={{
                                color: Colors.white,
                                fontSize: RFValue(12),
                                marginBottom: RFValue(5),
                            }}
                        >
                            Beneficiary Address *
                        </Text>
                        <TextInput onChange={(text) => setAccountNumber(text)} />
                    </View>
                    <View
                        style={{ marginTop: RFValue(20), marginBottom: RFValue(120) }}
                    >
                        <Button
                            onPress={() => {
                                // navigation?.push("Main");
                            }}
                            title={"Add beneficiary"}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default AddBeneficiary

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        flex: 1
    },
    textInputContainer: {
        marginTop: RFValue(30),
        marginHorizontal: RFValue(20),
    },
})
