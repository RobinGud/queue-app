import React, { useLayoutEffect } from 'react'
import { ScrollView, Button } from 'react-native'
import GroupCard from '../components/Groups/GroupCard'
import { useSelector } from 'react-redux'

const Groups = (props) => {
    const groups = useSelector(state => state.groups.groups)

    const { navigation } = props

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.navigate("AddGroup")} title="Добавить"/>
            )
        });
    }, [navigation]);

    return (
    <ScrollView>
        {groups?.map((value) => <GroupCard key={value.id} group={value} {...props}/>)}
    </ScrollView>
    )
}

export default Groups
