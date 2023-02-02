import React from 'react';
import { Text, View, SafeAreaView, StatusBar, Image, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { FormInput } from '../../utilis/Text_input';
import Button from '../../Component/Button/button';
import { useNavigation } from '@react-navigation/native';
import SocialButton from '../../Component/Social-Button/socialButton';
import colors from '../../utilis/Themes/Colors/colors';
import styles from './signin.style';
import { height } from '../../utilis/Dimensions/dimensions';

const Signin: React.FC<any> = () => {
    
    const navigation = useNavigation<any>();

    return (
        <KeyboardAvoidingView style={styles.safeareaview} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <StatusBar barStyle="light-content" backgroundColor={colors.lightGreen} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <Image source={require('../../Assets/svgs/signin/loginpic.png')} style={styles.image} />
                <Text style={styles.signinText}>Sign In</Text>
                <FormInput style={styles.inputField} placeholder='Email' placeholderTextColor={colors.grey} textInputContainerStyle={styles.inputView} />
                <FormInput style={styles.inputField} placeholder='Password' placeholderTextColor={colors.grey} forget forgotTextColor={colors.darkGreen} forgetPassword={()=>navigation.navigate('forgotpassword')}/>
                {/* <SocialButton text='Continue with Google' textColor={colors.white} borderWidth={1} borderColor={colors.lightGrey} googleIcon /> */}
                {/* <SocialButton backgroundColor={colors.darkBlue} text='Continue with Facebook' textColor={colors.white} /> */}
                <Button backgroundColor={colors.darkGreen} text='Sign In' textColor={colors.white} marginTop={height(5)} onPress={()=>navigation.navigate('tab')}/>

                <View style={styles.textView}>
                    <Text style={styles.signinText2}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                        <Text style={styles.signinText3}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Signin;
