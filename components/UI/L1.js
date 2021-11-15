import React from 'react'
import {Text, StyleSheet} from 'react-native'

const L1 = (props) => {
    return (
        <Text style={styles.l1} > 
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    l1: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans'
    }
})

export default L1
