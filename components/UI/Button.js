import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'
import Span from './Span'

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.disabled ? undefined : props.onPress}
            activeOpacity={props.disabled ? 1 : 0.6 }
            style={[styles.button, props.styles, props.disabled && styles.disabledButton, props.small && styles.small, props.secondary && styles.secondaryButton]}>
            <Span styles={[styles.innerText, props.secondary && styles.innerTextSecondary]}>Pick a photo</Span>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.blue,
        borderRadius: 40,
        height: 38,
        width: 220,
        justifyContent: 'center'
    },
    secondaryButton: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.blue
    },
    disabledButton: {
        backgroundColor: Colors.grey1,
    },
    innerText: {
        color: Colors.white,
        textAlign: 'center',
        textAlignVertical: 'top'
    },
    innerTextSecondary: {
        color: Colors.blue
    },
    small: {
        width: 125
    }
});

export default Button
