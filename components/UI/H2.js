import React from 'react'
import {Text, StyleSheet} from 'react-native'

const H2 = (props) => {
    return (
        <Text style={styles.h2} > 
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    h2: {
        fontSize: 16,
        fontFamily: 'GilroyLight'
    }
})

export default H2
