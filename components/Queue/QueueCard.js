import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native'
import Span from '../UI/Span'
import Button from '../UI/Button'
import CircularProgressBar from '../UI/CircularProgressBar'
import Colors from '../../constants/Colors'

const QueueCard = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <TouchableOpacity style={styles.headerContainer} onPress={() => setIsOpen(!isOpen)}>
            <Span>Лабораторная работа №5</Span>
            {isOpen && <View style={styles.detailContainer}>
                <View>
                    <Span l3>Статус: Завершено</Span>         
                    <Span l3>Тема: Иванов Н.В.</Span>
                    <Span l3>Дата защиты: 24.02.22</Span>
                    <Button small secondary>Очередь</Button>
                </View>
                <CircularProgressBar size={Dimensions.get('window').width * 0.3} color={Colors.grey1} strokeWidth={10} percent={60} activeColor={Colors.blue}/>
            </View>}
        </TouchableOpacity>
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
        justifyContent: 'space-between'
    }
})

export default QueueCard
