import React from 'react'
import { Text, View, Image, SafeAreaView } from 'react-native'
import CustomHeader from '../../Component/CustomHeader/customHeader'
import {ProfileTextView} from '../../Component/ProfileTextView/profileTextView'
import styles from './profilescreen.style'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CustomHeader text2='Profile' customView notiIcon settingIcon />
            <View style={styles.btn}>
                <View style={styles.View}>
                    <Image source={require('../../Assets/svgs/profile/person.png')} style={styles.img} />
                </View>
            </View>

            <ProfileTextView separtorLine text={'NAME'} text2={'David Carson'}/>
            <ProfileTextView separtorLine text={'EMAIL'} text2={'davidc@gmail.com'}/>
            <ProfileTextView separtorLine text={'PhONE'} text2={'0323 0023212'}/>
            <ProfileTextView separtorLine text={'ADDRESS'} text2={'148 Southern Blvd Wyoming DE 199934'}/>
            <ProfileTextView separtorLine text2={'Password'} LeftArrow/>

        </SafeAreaView>
    )
}
export default ProfileScreen