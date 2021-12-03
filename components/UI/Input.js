import React, {useState, useEffect} from 'react'
import {TextInput, StyleSheet, View} from 'react-native'
import Span from './Span'
import Colors from '../../constants/Colors'

const Input = (props) => {
    const [value, setValue] = useState(props.initialValue ? props.initialValue : '')
    const [isTouched, setIsTouched] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState([])

    const { onInputChange, id } = props;

    useEffect(() => {
        // if (isTouched) {
            onInputChange(id, value);
        // }
    }, [onInputChange, id, value]);

    const lostFocusHandler = () => {
        setIsValid(true)
        setErrorMessage([])
        setIsTouched(true)
        // const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if (props.required && value.trim().length === 0) {
        //     setIsValid(false)
        //     setErrorMessage(prev => [...prev, "Обязательное поле!"])
        // }
        // if (props.email && !emailRegex.test(value.toLowerCase())) {
        //     setIsValid(false)
        //     setErrorMessage(prev => [...prev, "Некоректный e-mail!"])
        // }
        // if (props.minLength != null && value.length < props.minLength) {
        //     setIsValid(false)
        //     setErrorMessage(prev => [...prev, `Минимальная длина: ${props.minLength}`])
        // }
    }

    const textChangeHandler = (text) => {
        setValue(text)
    }

    return (
        <View style={styles.container}>
            <Span style={styles.label}>{props.label}</Span>
            <TextInput 
                {...props}
                value={value}
                style={[styles.input, !isValid && styles.inputError]}
                onBlur={lostFocusHandler} 
                onChangeText={textChangeHandler}
            >
            </TextInput>
            {errorMessage.map((value, index) => <Span key={index} style={styles.error}>{value}</Span>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20
    },
    label: {
        paddingLeft: 20,
        paddingVertical: 10
    },
    error: {
        color: Colors.red,
        paddingVertical: 10,
        paddingLeft: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 14,
        fontFamily: 'IBMPlexSans',
        color: Colors.black,
        borderRadius: 40,
    },
    inputError: {
        borderColor: Colors.red,
    }
})

export default Input
