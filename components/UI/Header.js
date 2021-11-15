import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'

const Header = (props) => {
    return (
        <Text style={[styles.h0, props.styles, props.h1 && styles.h1, props.h2 && styles.h2]} > 
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    h0: {
        fontSize: 48,
        fontFamily: 'GilroyExtrabold',
        color: Colors.black
    },
    h1: {
        fontSize: 20,
        fontFamily: 'GilroyBold'
    },
    h2: {
        fontSize: 16,
        fontFamily: 'GilroyLight'
    }
})

export default Header
