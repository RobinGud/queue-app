import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Span from '../UI/Span'

const QueueItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={styles.text}>15</Text>
            </View>
            <View style={styles.infoContainer}>
                <Span>Иван Иванов</Span>
                <Span l3>Защита через 5 минут</Span>
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
        padding: 7,
        borderRadius: 100
    },
    text: {
        textAlign: 'left',
        color: Colors.white
    }
})

export default QueueItem
