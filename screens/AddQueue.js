import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, TextInput } from 'react-native'
import Button from '../components/UI/Button'
import { useDispatch } from 'react-redux'
import Span  from '../components/UI/Span'
import Colors  from '../constants/Colors'
import { addQueue } from '../actions/queues'

const GroupAdd = (props) => {
    const [title, setDisciplineName] = useState("")
    const [teacherName, setFullname] = useState("")
    const [countStudents, setCountStudents] = useState(null)
    const [beginTime, setBeginTime] = useState("")
    const [date, setDate] = useState("")
    const [endTime, setEndTime] = useState("")

    const dispatch = useDispatch()

    const groupNameChangeHandler = (value) => {
        setDisciplineName(value)
    }

    const fullnameChangeHandler = (value) => {
        setFullname(value)
    }

    const countStudentsChangeHandler = (value) => {
        setCountStudents(value)
    }

    const beginTimeChangeHandler = (value) => {
        setBeginTime(value)
    }

    const DateChangeHandler = (value) => {
        setDate(value)
    }

    const endTimeChangeHandler = (value) => {
        setEndTime(value)
    }

    const onSubmit = () => {
        dispatch(addQueue({title, teacherName, countStudents, beginTime, breakTime: date, endTime}))
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
                <Span style={styles.label}>Количество студентов:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={countStudentsChangeHandler}
                    keyboardType="numeric"
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Дата сдачи:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={DateChangeHandler}
                    keyboardType="numeric"
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Время начала:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={beginTimeChangeHandler}
                    keyboardType="numeric"
                >
                </TextInput>
            </View>
            <View style={styles.container}>
                <Span style={styles.label}>Время окончания:</Span>
                <TextInput 
                    style={styles.input}
                    onChangeText={endTimeChangeHandler}
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
        marginTop: 20,
        alignItems: 'center'
    }
})

export default GroupAdd