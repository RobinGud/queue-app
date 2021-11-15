import React from 'react'
import {Text, StyleSheet} from 'react-native'

const L3 = (props) => {
    return (
        <Text style={styles.l3} > 
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    l3: {
        fontSize: 10.4,
        fontFamily: 'IBMPlexSans'
    }
})

export default L3
