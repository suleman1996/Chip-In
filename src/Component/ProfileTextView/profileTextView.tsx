import React from 'react'
import { Text, View, } from 'react-native'
import LeftIcon from '../../Assets/svgs/profile/left-arrow'
import styles from './profileTextView.style'

interface Props {
    text?: string
    text2?: string
    separtorLine?: any
    LeftArrow?:any
}

const ProfileTextView: React.FC<any> = ({ text, text2, separtorLine,LeftArrow }: Props) => {
    return (
        <>
            <View style={styles.view}>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.iconView}>
                    <Text style={styles.text2}>{text2}</Text>
                    {LeftArrow && <View style={styles.icon}><LeftIcon/></View>}
                </View>
            </View>
            {separtorLine && <View style={styles.separtorLine} />}
        </>
    )
}
export { ProfileTextView }