import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import Header from '../components/UI/Header'
import SvgUri from 'react-native-svg-uri';
import Span from '../components/UI/Span';
import Button from '../components/UI/Button';


const Auth = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header style={styles.text}>Привет!</Header>
                <Span style={styles.text}>{`Для продолжения\n войди в аккаунт\n или создай новый`}</Span>
            </View>
            <View>
                <Button>Войти</Button>
                <Button secondary>Зарегистрироваться</Button>
            </View>
            <SvgUri 
                style={styles.background} 
                width={Dimensions.get("window").width} 
                height={Dimensions.get("window").width} 
                source={require('../assets/Ellipse1.svg')} 
            />
            <SvgUri 
                style={styles.background2} 
                width={Dimensions.get("window").width * 1.4} 
                height={Dimensions.get("window").width * 1.4} 
                source={require('../assets/Ellipse2.svg')} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: "-5%",
        left: "-5%"
    },
    background2: {
        position: 'absolute',
        top: "20%",
        left: "-20%"
    },
    container: {
        height: "100%",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    }
})

export default Auth
