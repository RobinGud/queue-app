import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Span from '../UI/Span'
import CircularProgressBar from '../UI/CircularProgressBar'
import Colors from '../../constants/Colors'


const QueueDetail = () => {
    return (
        <View style={styles.headerContainer}>
            <Span>Лабораторная работа №5</Span>
            <View style={styles.detailContainer}>
                <View>
                    <Span l3>Преподаватель: СУХАРЕВ Н.В.</Span>         
                    <Span l3>Аудитория 205</Span>
                    <Span l3>Начало: 9:00</Span>
                    <Span l3>Перерыв: 12:00 - 13:00</Span>
                    <Span l3>Окончание: 15:00</Span>
                </View>
                <CircularProgressBar size={Dimensions.get('window').width * 0.3} color={Colors.grey1} strokeWidth={10} percent={60} activeColor={Colors.blue}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 15
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default QueueDetail
