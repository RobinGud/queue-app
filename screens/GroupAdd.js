import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, TextInput } from 'react-native'
import Button from '../components/UI/Button'
import { useDispatch } from 'react-redux'
import { addGroup } from '../actions/groups'
import Span  from '../components/UI/Span'
import Colors  from '../constants/Colors'

const GroupAdd = (props) => {
const [title, setDisciplineName] = useState("")
const [teacherName, setFullname] = useState("")
const [countWork, setCountWork] = useState(null)

const dispatch = useDispatch()

const groupNameChangeHandler = (value) => {
    setDisciplineName(value)
}

const fullnameChangeHandler = (value) => {
    setFullname(value)
}

const countWorkChangeHandler = (value) => {
    setCountWork(value)
}

    const onSubmit = () => {
        dispatch(addGroup({title, teacherName, activeQueues: countWork}))
        props.navigation.pop()
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Span style={styles.label}>Название группы:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={groupNameChangeHandler}
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>ФИО преподователя:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={fullnameChangeHandler}
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Количество работ:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={countWorkChangeHandler}
                    keyboardType="numeric"
                >
                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={onSubmit}>Добавить</Button>
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
        alignItems: 'center'
    }
})

export default GroupAdd