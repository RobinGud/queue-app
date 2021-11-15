import React from 'react'
import {Text, StyleSheet} from 'react-native'

const H0 = (props) => {
    return (
        <Text style={styles.h0} > 
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    h0: {
        fontSize: 48,
        fontFamily: 'GilroyExtrabold'
    }
})

export default H0
