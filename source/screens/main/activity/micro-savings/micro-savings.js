import React from 'react'
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import PageHader from '../../../../components/PageHeader/PageHader';
import Text from '../../../../components/Text';
import PageWrapper from '../../../../components/PageWrapper/PageWrapper';
import Colors from '../../../../constants/colors.json'

const MicroSavings = () => {
    return (
        <View style={styles.container}>
            <PageHader title="Micro Savings Balance" description="Account information for your micro-savings account" />
            <PageWrapper >
                <View style={styles.alert}>
                    <Text style={styles.alertText}>Dear customer, this service is only available for UMB Wallet Customers</Text>
                </View>
            </PageWrapper>
        </View>
    )
}

export default MicroSavings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary
    },
    alert: {
        display: "flex",
        backgroundColor: Colors.red,
        marginVertical: RFValue(25),
        padding: RFValue(20)
    },
    alertText: {
        fontSize: RFValue(13)
    }
})
