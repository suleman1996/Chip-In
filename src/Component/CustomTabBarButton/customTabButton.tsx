import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './customTabButton.style'

const CustomTabBarButton = ({ children, onPress }: any) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <View style={styles.View}>
                {children}
            </View>
        </TouchableOpacity>
    )
}
export default CustomTabBarButton