import React from 'react'
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import PageHader from '../../../../components/PageHeader/PageHader';
import Text from '../../../../components/Text';
import PageWrapper from '../../../../components/PageWrapper/PageWrapper';
import Colors from '../../../../constants/colors.json'

const InvestmentBalance = () => {
    return (
        <View style={styles.container}>
            <PageHader title="Investment Account Balance" description="Your investment account balance is shown below" />

            <PageWrapper>
                <View style={styles.alert}>
                    <Text style={styles.alertText}>Your investment account balance as at {new Date().toDateString()} stands at { }</Text>
                </View>
            </PageWrapper>
        </View>
    )
}

export default InvestmentBalance

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.secondary },
    alert: {
        marginVertical: RFValue(25),
        backgroundColor: Colors.green,
        padding: RFValue(13)
        // height: 120
    },
    alertText: { fontSize: RFValue(23) }
})
