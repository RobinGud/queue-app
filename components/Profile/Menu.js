import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import Header from '../UI/Header'
import Span from '../UI/Span'

const Menu = (props) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Header h2>МЕНЮ</Header>
            </View>
            <TouchableOpacity style={styles.elementContainer} onPress={()=> props.navigation.navigate("Disciplines")}>
                <Span>Мои дисциплины</Span>
            </TouchableOpacity>
            <TouchableOpacity style={styles.elementContainer} onPress={()=> props.navigation.navigate("Groups")}>
                <Span>Мои группы</Span>
            </TouchableOpacity>
            <TouchableOpacity style={styles.elementContainer} onPress={()=> props.navigation.navigate("Queues")}>
                <Span>Мои очереди</Span>
            </TouchableOpacity>
            <TouchableOpacity style={styles.elementContainer}>
                <Span>Настроить напоминание</Span>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomWidth: 2,
        borderColor: Colors.blue,
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
