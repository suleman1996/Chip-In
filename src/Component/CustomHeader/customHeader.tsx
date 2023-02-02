import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import NotificationIcon from '../../Assets/svgs/homepage/notification'
import SettingIcon from '../../Assets/svgs/homepage/setting'
import styles from './customHeader.style'

interface Props {
    onPressSetting?: any,
    onPressNoti?: any
    text1?: string
    text2?: string
    text3?: string
    customView?: any
    notiIcon?: any
    settingIcon?: any
    profilePic?: any
    customViewHeight?:any
}

const CustomHeader: React.FC<any> = ({ onPressSetting, onPressNoti, text1, text2, customView, notiIcon, settingIcon, profilePic, text3,customViewHeight }: Props) => {
    return (
        <>
            <View style={styles.mainView}>
                <View style={styles.mainView2}>

                    <View>
                        <View style={styles.view1}>
                            {profilePic && <View style={styles.View} />}
                            <Text style={styles.text}>{text1} <Text style={styles.text2}>{text2}</Text></Text>
                        </View>

                        {text3 &&
                            <Text style={styles.text3}>Glad you're here! Please select.</Text>
                        }
                    </View>


                    <View style={styles.iconView}>
                        {notiIcon &&
                            <View style={styles.notificationIcon}>
                                <NotificationIcon />
                            </View>
                        }
                        {settingIcon && <TouchableOpacity onPress={onPressSetting}><SettingIcon /></TouchableOpacity>}
                    </View>
                </View>
                {customView &&
                    <View style={styles.customView} />
                }
            </View>
        </>
    )
}
export default CustomHeader