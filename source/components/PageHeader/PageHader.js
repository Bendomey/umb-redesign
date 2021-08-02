import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../Text'
import { RFValue } from "react-native-responsive-fontsize";
import Colors from '../../constants/colors.json'

const PageHader = ({ title, description }) => {
    return (
        <View style={styles.header}>
            <Text
                type={"Bold"}
                style={{ color: Colors.white, fontSize: RFValue(25) }}
            >
                {title}
            </Text>
            <Text style={{ color: Colors.gray, fontSize: RFValue(12) }}>
                {description}
            </Text>
        </View>
    )
}

export default PageHader

const styles = StyleSheet.create({
    header: {
        marginTop: RFValue(10),
        marginHorizontal: RFValue(20),
    },
})
