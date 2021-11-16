import React from 'react'
import {View, Image, StyleSheet, Dimensions} from 'react-native'
import Header from '../UI/Header'
import Span from '../UI/Span'

const Bio = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: "https://get.wallhere.com/photo/2048x1365-px-Alessandro-Di-Cicco-blonde-face-hoods-portrait-women-1012019.jpg" }}/>
            </View>
            <View style={styles.textContainer}>
                <Header h2>Мария Иванова</Header>
                <Span l3>Московский Государственный Университет</Span>
                <Span l3>Программная инженерия</Span>
                <Span l3>3 Курс</Span>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
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
        width: Dimensions.get("window").width * 0.7 - 20
    }
})

export default Bio
