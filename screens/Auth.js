import React, { useState } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import Header from '../components/UI/Header'
import Span from '../components/UI/Span';
import Button from '../components/UI/Button';
import Ellipse1 from '../assets/Ellipse1';
import Ellipse2 from '../assets/Ellipse2';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';


const Auth = (props) => {
    const [modalState, setModalState] = useState(null)
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
            {modalState === null &&
                <View>
                    <Button onPress={() => {setModalState("sign-in")}}>Войти</Button>
                    <Button secondary onPress={() => {setModalState("sign-up")}}>Зарегистрироваться</Button>
                </View>}
            {modalState === "sign-in" &&
                <SignIn {...props}/>
            }
            {modalState === "sign-up" &&
                <SignUp {...props} setModalState={setModalState}/>
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
