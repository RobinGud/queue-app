import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Button from '../UI/Button'
import Span  from '../UI/Span'
import Colors  from '../../constants/Colors'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../actions/users'

const SignIn = (props) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()


    const loginChangeHandler = (value) => {
        setLogin(value)
    }

    const passwordChangeHandler = (value) => {
        setPassword(value)
    }

    const handlerPress = () => {
        dispatch(loginUser(login, password))
    }


    return (
        <View>
            <View>
                <Span style={styles.label}>Логин:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={loginChangeHandler}
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Пароль:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={passwordChangeHandler}
                >
                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={handlerPress}>Войти</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    buttonContainer: {
        paddingTop: 20,
        alignItems: 'center'
    }
})

export default SignIn
