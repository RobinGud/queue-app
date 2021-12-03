import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native'
import Colors from '../../constants/Colors'
import Button from '../UI/Button'
import CircularProgressBar from '../UI/CircularProgressBar'
import Span from '../UI/Span'

const DisciplineCard = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <TouchableOpacity style={styles.headerContainer} onPress={() => setIsOpen(!isOpen)}>
            <Span>{props.discipline.title}</Span>
            {isOpen && <View style={styles.detailContainer}>
                <View>            
                    <Span l3>{`Преподаватель: ${props.discipline.teacherName}`}</Span>
                    <Span l3>{`Активных очередей: ${props.discipline.activeQueues || 0}`}</Span>
                    <Span l3>{`Кол-во групп: ${props.discipline.countGroup || 0}`}</Span>
                    <Button small secondary onPress={() => props.navigation.navigate("Groups")}>Cписок групп</Button>
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

export default DisciplineCard
