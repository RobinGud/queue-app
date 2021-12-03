import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native'
import Span from '../UI/Span'
import Button from '../UI/Button'
import CircularProgressBar from '../UI/CircularProgressBar'
import Colors from '../../constants/Colors'

const QueueCard = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <TouchableOpacity style={styles.headerContainer} onPress={() => setIsOpen(!isOpen)}>
            <Span>{props.queue.title}</Span>
            {isOpen && <View style={styles.detailContainer}>
                <View>
                    <Span l3>{`Статус: ${props.queue.status}`}</Span>         
                    <Span l3>{`Кол-во студентов: ${props.queue.countStudents || 0}`}</Span>
                    <Span l3>{`День защиты: ${props.queue.date}`}</Span>
                    <Button small secondary onPress={() => props.navigation.navigate("Queue", {queue:props.queue})}>Очередь</Button>
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
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default QueueCard
