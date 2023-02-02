import React from 'react';
import { Text, View, SafeAreaView, StatusBar, Image, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { FormInput } from '../../utilis/Text_input';
import Button from '../../Component/Button/button';
import { useNavigation } from '@react-navigation/native';
import SocialButton from '../../Component/Social-Button/socialButton';
import colors from '../../utilis/Themes/Colors/colors';
import styles from './forgotpassword.style';
import { height } from '../../utilis/Dimensions/dimensions';

const ForgotPassword: React.FC<any> = () => {
    const navigation = useNavigation<any>();

    return (
        <KeyboardAvoidingView style={styles.safeareaview} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../../Assets/svgs/signin/loginpic.png')} style={styles.image} />
                <FormInput style={styles.inputField} predifineText={styles.title} title='Email' titleColor={colors.smoke} placeholder='Email' placeholderTextColor={colors.grey} textInputContainerStyle={styles.inputView} />
                <Button backgroundColor={colors.darkGreen} text='Send' textColor={colors.white} marginTop={height(5)} />

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ForgotPassword;
