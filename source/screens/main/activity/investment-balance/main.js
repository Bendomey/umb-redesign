import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import PageHader from '../../../../components/PageHeader/PageHader';
import PageWrapper from '../../../../components/PageWrapper/PageWrapper';
import Colors from '../../../../constants/colors.json'

const InvestmentBalance = () => {
    return (
        <View style={styles.container}>
            <PageHader title="Investment Account Balance" description="Your investment account balance is shown below" />

            <PageWrapper>
                <View style={styles.alert}></View>
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
        height: 120
    }
})
