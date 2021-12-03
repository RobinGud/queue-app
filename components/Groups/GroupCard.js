import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native'
import Span from '../UI/Span'
import Button from '../UI/Button'
import CircularProgressBar from '../UI/CircularProgressBar'
import Colors from '../../constants/Colors'

const GroupCard = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <TouchableOpacity style={styles.headerContainer} onPress={() => setIsOpen(!isOpen)}>
            <Span>{props.group.title}</Span>
            {isOpen && <View style={styles.detailContainer}>
                <View>
                    <Span l3>{`Статус: ${props.group.status}`}</Span>         
                    <Span l3>{`Активных очередей: ${props.group.activeQueues}`}</Span>
                    <Span l3>{`Кол-во очередей: ${props.group.countQueues || 0}`}</Span>
                    <Span l3>{`Кол-во участников: ${props.group.countMembers || 0}`}</Span>
                    <Button small secondary onPress={() => props.navigation.navigate("Queues")}>Список очередей</Button>
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

export default GroupCard
