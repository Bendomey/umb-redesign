import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PageHader from '../../../../components/PageHeader/PageHader';
import Colors from '../../../../constants/colors.json'

const InvestmentBalance = () => {
    return (
        <View style={styles.container}>
            <PageHader title="Investment Account Balance" description="Your investment account balance is shown below" />


        </View>
    )
}

export default InvestmentBalance

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.secondary }
})
