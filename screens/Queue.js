import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import QueueDetail from '../components/Queue/QueueDetail'
import QueueItem from '../components/Queue/QueueItem'
import Button from '../components/UI/Button'

const Queue = (props) => {
    const [isMember, setIsMember] = useState(false)
    const queue = props.route.params.queue;
    const me = {
        fullname: "Никита Иванов", 
        number: queue.queueMembers.length + 1, 
        id: 0
    }

    const onSubmit = () => {
        setIsMember(!isMember)
    }

    return (
        <ScrollView>
            <QueueDetail {...queue}/>
            {queue.queueMembers.map((value) => <QueueItem key={value.id} member={value}/>)}
            {isMember && <QueueItem member={me} />}
            <View style={styles.buttonConteiner}>
                <Button onPress={onSubmit}>{isMember ? "Отменить" : "Записаться"}</Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonConteiner: {
        alignItems: 'center'
    }
})

export default Queue
