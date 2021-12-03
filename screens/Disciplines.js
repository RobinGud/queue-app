import React, {useLayoutEffect} from 'react'
import { ScrollView, Button } from 'react-native'
import { useSelector } from 'react-redux'
import DisciplineCard from '../components/Disciplines/DisciplineCard'

const Disciplines = (props) => {

    const { navigation } = props

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.navigate("AddDiscipline")} title="Добавить"/>
            )
        });
    }, [navigation]);

    const disciplines = useSelector(state => state.disciplines.disciplines)

    return (
        <ScrollView>
            {disciplines.map((value) => <DisciplineCard key={value.id} discipline={value} {...props}/>)}
        </ScrollView>
    )
}

export default Disciplines
