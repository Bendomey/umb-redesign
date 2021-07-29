import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/colors.json';

const Account = () => {
    return (
        <View style={styles.container}>
            <Text>Account</Text>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        flex: 1
    },
})
