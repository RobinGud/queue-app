import React from 'react'
import { ScrollView } from 'react-native'
import DisciplineCard from '../components/Discipline/DisciplineCard'
import Header from '../components/UI/Header'

const Disciplines = (props) => {
    return (
        <ScrollView>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
            <DisciplineCard {...props}/>
        </ScrollView>
    )
}

export default Disciplines
