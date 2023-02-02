import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import GoogleIcon from '../../Assets/svgs/signin/google.svg';
import FbIcon from '../../Assets/svgs/signin/facebook.svg';
import styles from './socialButton.style';

interface Props {
    onPress?: any,
    backgroundColor?: string
    text?: string
    textColor?: string
    googleIcon?:any
    borderWidth?:number
    borderColor?:string
}

const SocialButton: React.FC<any> = ({ onPress, backgroundColor, text, textColor,googleIcon ,borderWidth,borderColor}: Props) => {
    return (
        <TouchableOpacity style={[styles.btnView, { backgroundColor: backgroundColor,borderColor:borderColor,borderWidth:borderWidth }]} onPress={onPress}>
            <View style={styles.fbiconView}>
                {googleIcon ? <GoogleIcon/> :<FbIcon />}
            </View>
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default SocialButton;
