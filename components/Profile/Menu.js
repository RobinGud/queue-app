import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../UI/Header'
import Span from '../UI/Span'

const Menu = () => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Header h2>Меню</Header>
            </View>
            <View style={styles.elementContainer}>
                <Span>Мои дисциплины</Span>
            </View>
            <View style={styles.elementContainer}>
                <Span>Мои группы</Span>
            </View>
            <View style={styles.elementContainer}>
                <Span>Мои очереди</Span>
            </View>
            <View style={styles.elementContainer}>
                <Span>Настроить напоминание</Span>
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
    elementContainer: {
        borderBottomWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 15
    }
    
})

export default Menu
