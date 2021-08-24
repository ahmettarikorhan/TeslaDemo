import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../StyledButton/styles'

const StyledButton = (props) => {

    const {type, content, onPress} = props;


    const backgorundColor = type === "primary" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)";
    const textColor = type === "primary" ? "white" : "black";

    return (
        <View style={styles.container}>

            <Pressable
             style={[styles.button,{backgroundColor : backgorundColor}]}
             onPress= {()=>onPress()}
             >
            <Text style={[styles.text,{color : textColor}]}>{content}</Text>
            </Pressable>

        </View>
    )
}

export default StyledButton
