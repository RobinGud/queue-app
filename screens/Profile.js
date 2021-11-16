import React from 'react'
import { ScrollView } from 'react-native'
import Bio from '../components/Profile/Bio'
import Menu from '../components/Profile/Menu'

const Profile = () => {
    return (
        <ScrollView>
            <Bio />
            <Menu />
        </ScrollView>
    )
}



export default Profile
