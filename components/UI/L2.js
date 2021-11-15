import React from 'react'
import {Text, StyleSheet} from 'react-native'

const L2 = (props) => {
    return (
        <Text style={styles.l2} > 
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    l2: {
        fontSize: 13,
        fontFamily: 'IBMPlexSans'
    }
})

export default L2
