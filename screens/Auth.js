import React, { useState } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import Header from '../components/UI/Header'
import Span from '../components/UI/Span';
import Button from '../components/UI/Button';
import Ellipse1 from '../assets/Ellipse1';
import Ellipse2 from '../assets/Ellipse2';
import LogIn from '../components/Auth/LogIn';


const Auth = (props) => {
    const [Log, setState] = useState(true)
    return (
        <View style={styles.container}>
            <Ellipse1 
                style={styles.background} 
                width={Dimensions.get("window").width} 
                height={Dimensions.get("window").width}
            />
            <Ellipse2
                style={styles.background2} 
                width={Dimensions.get("window").width * 1.4} 
                height={Dimensions.get("window").width * 1.4} 
            />
                <View>
                    <Header style={styles.text}>Привет!</Header>
                    <Span style={styles.text}>{`Для продолжения\n войди в аккаунт\n или создай новый`}</Span>
                </View>
            { Log ?
                    <View>
                        <Button onPress={() => {setState(false)}}>Войти</Button>
                        <Button secondary>Зарегистрироваться</Button>
                    </View>
                :
                    <LogIn {...props}/>
                }
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
