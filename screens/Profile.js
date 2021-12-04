import React, { useLayoutEffect } from 'react'
import { ScrollView, Button } from 'react-native'
import Bio from '../components/Profile/Bio'
import Menu from '../components/Profile/Menu'

const Profile = (props) => {
    const { navigation } = props

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.navigate("EditProfile")} title="Edit"/>
            )
        });
    }, [navigation]);

    return (
        <ScrollView>
            <Bio />
            <Menu {...props}/>
        </ScrollView>
    )
}



export default Profile
