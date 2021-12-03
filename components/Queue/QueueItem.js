import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Span from '../UI/Span'

const QueueItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={styles.text}>{props.member.number}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Span>{props.member.fullname}</Span>
                <Span l3>{`Защита через ${props.member.number * 15} минут`}</Span>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: "10%"
    },
    infoContainer: {
        margin: 20
    },
    countContainer: {
        backgroundColor: Colors.blue,
        padding: 10,
        width: 40,
        height: 40,
        lineHeight: 40,
        borderRadius: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.white
    }
})

export default QueueItem
