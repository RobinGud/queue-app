import React from 'react'
import {Text, StyleSheet} from 'react-native'

const H1 = (props) => {
    return (
        <Text style={styles.h1} > 
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 20,
        fontFamily: 'GilroyBold'
    }
})

export default H1
