import React from 'react'
import { View, Dimensions } from 'react-native'
import Svg, { Circle, Text, TSpan } from 'react-native-svg';


const CircularProgressBar = (props) => {
    const radius = (props.size - props.strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    return (
        <Svg width={props.size} height={props.size}>
            <Circle 
                stroke={props.color} 
                fill="none" 
                cx={props.size / 2} 
                cy={props.size / 2} 
                r={radius} 
                strokeWidth={props.strokeWidth}
            />
            <Text x="45%" y="50%" fill="red" alignmentBaseline="central" textAnchor="middle" fontSize="14" fontFamily="IBMPlexSans">
            {props.percent}%
            </Text>
            <Circle 
                stroke={props.activeColor} 
                fill="none" 
                cx={props.size / 2} 
                cy={props.size / 2} 
                r={radius}
                strokeWidth={props.strokeWidth}
                strokeDasharray={`${circumference - circumference * props.percent / 100} ${circumference * props.percent / 100}`}
                strokeDashoffset={circumference / 4}
            />
        </Svg>
    )
}

export default CircularProgressBar
