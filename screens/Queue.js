import React from 'react'
import { ScrollView } from 'react-native'
import QueueDetail from '../components/Queue/QueueDetail'
import QueueItem from '../components/Queue/QueueItem'

const Queue = (props) => {
    return (
        <ScrollView>
            <QueueDetail />
            <QueueItem />
            <QueueItem />
            <QueueItem />
            <QueueItem />
            <QueueItem />
            <QueueItem />
        </ScrollView>
    )
}

export default Queue
