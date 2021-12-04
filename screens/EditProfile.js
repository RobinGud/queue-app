import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../actions/users'
import Span from '../components/UI/Span'
import Colors from '../constants/Colors'
import Button from '../components/UI/Button'


const EditProfile = (props) => {
    const users = useSelector(state => state.users)
    const currentUserId = users.currentUserId
    const currentUser = users.users.find(value => {return value.id == currentUserId})
    const dispatch = useDispatch()

    const [fullname, setfullname] = useState(currentUser.fullname)
    const [university, setUniversity] = useState(currentUser.university)
    const [facultet, setFacultet] = useState(currentUser.facultet)
    const [course, setCourse] = useState(currentUser.course.toString())
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState(currentUser.password)

    const fullnameChangeHandler = (value) => {
        setfullname(value)
    }

    const universityChangeHandler = (value) => {
        setUniversity(value)
    }

    const facultetChangeHandler = (value) => {
        setFacultet(value)
    }

    const courseChangeHandler = (value) => {
        setCourse(value)
    }

    const emailChangeHandler = (value) => {
        setEmail(value)
    }

    const passwordChangeHandler = (value) => {
        setPassword(value)
    }

    const onSubmit = () => {
        dispatch(updateUser({fullname, university, facultet, course, email, password}))
        props.navigation.pop()
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Span style={styles.label}>ФИО:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={fullnameChangeHandler}
                    defaultValue={fullname}
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>ВУЗ:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={universityChangeHandler}
                    defaultValue={university}
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Факультет:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={facultetChangeHandler}
                    defaultValue={facultet}
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Курс:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={courseChangeHandler}
                    keyboardType="numeric"
                    defaultValue={course}
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Почта:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={emailChangeHandler}
                    defaultValue={email}
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Пароль:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={passwordChangeHandler}
                    defaultValue={password}
                >
                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={onSubmit}>Сохранить</Button>
            </View>
            </ScrollView>
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
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default EditProfile
