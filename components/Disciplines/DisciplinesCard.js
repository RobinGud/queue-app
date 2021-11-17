import React, { useState} from 'react'
import { TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native'
import Colors from '../../constants/Colors'
import Button from '../UI/Button'
import CircularProgressBar from '../UI/CircularProgressBar'
import Span from '../UI/Span'

const DisciplinesCard = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <TouchableOpacity style={styles.headerContainer} onPress={() => setIsOpen(!isOpen)}>
            <Span>Математика</Span>
            {isOpen && <View style={styles.detailContainer}>
                <View>            
                    <Span l3>Преподаватель: Иванов Н.В.</Span>
                    <Span l3>Активных очередей: 3</Span>
                    <Span l3>Кол-во групп: 4</Span>
                    <Button small secondary>Cписок групп</Button>
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

export default DisciplinesCard
