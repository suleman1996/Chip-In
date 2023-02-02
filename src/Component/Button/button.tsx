import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './button.style';

interface Props {
    onPress?:any,
    backgroundColor?:string
    text?:string
    textColor?:string
    marginTop?:number
    marginBottom?:number
}

const Button: React.FC<any> = ({onPress,backgroundColor,text,textColor,marginTop,marginBottom}:Props) => {
    return (
        <TouchableOpacity style={[styles.btnView,{backgroundColor:backgroundColor,marginTop:marginTop,marginBottom:marginBottom}]} onPress={onPress}>
            <Text style={[styles.text,{color:textColor}]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
