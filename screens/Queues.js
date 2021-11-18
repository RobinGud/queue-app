import React from 'react'
import { ScrollView } from 'react-native'
import QueueCard from '../components/Queues/QueueCard'

const Queues = (props) => {
    return (
        <ScrollView>
            <QueueCard {...props}/>
            <QueueCard {...props}/>
            <QueueCard {...props}/>
            <QueueCard {...props}/>
            <QueueCard {...props}/>
            <QueueCard {...props}/>
            <QueueCard {...props}/>
            <QueueCard {...props}/>
            <QueueCard {...props}/>
        </ScrollView>
    )
}

export default Queues
