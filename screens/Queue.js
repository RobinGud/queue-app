import React from 'react'
import { ScrollView } from 'react-native'
import QueueDetail from '../components/Queue/QueueDetail'
import QueueItem from '../components/Queue/QueueItem'

const Queue = (props) => {
    const queue = props.route.params.queue;
    return (
        <ScrollView>
            <QueueDetail {...queue}/>
            {queue.queueMembers.map((value) => <QueueItem key={value.id} member={value}/>)}
        </ScrollView>
    )
}

export default Queue
