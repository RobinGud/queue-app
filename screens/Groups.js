import React from 'react'
import { ScrollView } from 'react-native'
import Header from '../components/UI/Header'
import GroupCard from '../components/Group/GroupCard'

const Groups = (props) => {
    return (
    <ScrollView>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
        <GroupCard {...props}/>
    </ScrollView>
    )
}

export default Groups
