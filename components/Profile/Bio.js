import React from 'react'
import {View, Image, StyleSheet, Dimensions} from 'react-native'
import Header from '../UI/Header'
import Span from '../UI/Span'
import { useSelector } from 'react-redux'

const Bio = () => {
    const users = useSelector(state => state.users)
    const currentUserId = users.currentUserId
    const currentUser = users.users.find(value => {return value.id == currentUserId})

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: "https://get.wallhere.com/photo/2048x1365-px-Alessandro-Di-Cicco-blonde-face-hoods-portrait-women-1012019.jpg" }}/>
            </View>
            <View style={styles.textContainer}>
                <Header h2>{currentUser.fullname}</Header>
                <Span l3>{currentUser.university}</Span>
                <Span l3>{currentUser.facultet}</Span>
                <Span l3>{`${currentUser.course} Курс`}</Span>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: Dimensions.get("window").width * 0.3,
        height: Dimensions.get("window").width * 0.3,
        borderRadius: Dimensions.get("window").width * 0.15,
        overflow: 'hidden',
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        width: Dimensions.get("window").width * 0.7 - 40,
        marginLeft: 10
    }
})

export default Bio
