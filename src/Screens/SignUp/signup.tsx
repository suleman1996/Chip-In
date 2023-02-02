import React, { useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Button from '../../Component/Button/button';
import { height } from '../../utilis/Dimensions/dimensions';
import { FormInput } from '../../utilis/Text_input';
import colors from '../../utilis/Themes/Colors/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './signup.style';

const Signup: React.FC<any> = () => {

    return (
        <KeyboardAvoidingView style={styles.safeareaview} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <StatusBar barStyle="light-content" backgroundColor={colors.lightGreen} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>Fill your Profile</Text>
                <View style={styles.inputView}>
                    <FormInput style={styles.inputField} placeholder='First Name' placeholderTextColor={colors.grey} />
                    <FormInput style={styles.inputField} placeholder='Last Name' placeholderTextColor={colors.grey} />
                    <FormInput style={styles.inputField} placeholder='Email' placeholderTextColor={colors.grey} />
                    <FormInput style={styles.inputField} placeholder='Phone' placeholderTextColor={colors.grey} />
                    <FormInput style={styles.inputField} placeholder='Address' placeholderTextColor={colors.grey} />
                    <FormInput style={styles.inputField} placeholder='Password' placeholderTextColor={colors.grey} />
                    <FormInput style={styles.inputField} placeholder='Confirm Password' placeholderTextColor={colors.grey} />

                    <Button backgroundColor={colors.darkGreen} text='Sign Up' textColor={colors.white} marginTop={height(5)} marginBottom={height(6)} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Signup;
