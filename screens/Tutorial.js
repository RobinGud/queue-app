import React from 'react'
import { View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const Tutorial = () => {
    return (
        <View>
        <SvgUri 
            style={styles.background2} 
            width={Dimensions.get("window").width * 1.4} 
            height={Dimensions.get("window").width * 1.4} 
            source={require('../assets/Ellipse2.svg')} 
        />
        </View>
    )
}

export default Tutorial
