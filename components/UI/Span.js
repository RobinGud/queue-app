import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'

const Span = (props) => {
    return (
        <Text style={[styles.l1, props.styles, props.l2 && styles.l2, props.l3 && styles.l3]} > 
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    l1: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans',
        color: Colors.black
    },
    l2: {
        fontSize: 13
    },
    l3: {
        fontSize: 10.4
    }
})

export default Span
