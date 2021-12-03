import React, { useLayoutEffect } from 'react'
import { ScrollView, Button } from 'react-native'
import { useSelector } from 'react-redux'
import QueueCard from '../components/Queues/QueueCard'

const Queues = (props) => {
    const queues = useSelector(state => state.queues.queues)

    const { navigation } = props

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.navigate("AddQueue")} title="Добавить"/>
            )
        });
    }, [navigation]);

    return (
        <ScrollView>
            {queues?.map((value) => <QueueCard key={value.id} queue={value} {...props}/>)}
        </ScrollView>
    )
}

export default Queues
