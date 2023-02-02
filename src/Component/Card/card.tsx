import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import HomePic from '../../Assets/svgs/homepage/homePic'
import { height } from '../../utilis/Dimensions/dimensions'
import colors from '../../utilis/Themes/Colors/colors'
import Button from '../Button/button'
import styles from './card.style'

interface Props {
    text?: string;
    text2?: string;
    text3?: string;
    homePic?: any;
    backgroundColor?: any
    color?: any
    vCardtext?: string
    vCardtext2?: string
    vCardtext3?: any
    verticalCardIcon?: any
    fontSize?: any
    vCardtext4?: any
    vCardTextt5?: any
    onPressBorrow?: any
    onPressLending?: any
}

const HomePageCard: React.FC<any> = ({ text, text2, text3, homePic }: Props) => {
    return (
        <>
            <View style={styles.view}>
                <View >
                    <Text style={styles.text}>{text}</Text>
                    <Text style={styles.text2}>{text2}</Text>
                    <Text style={styles.text3}>{text3}</Text>
                </View>
                {homePic && <HomePic />}
            </View>
        </>
    )
}

const HomePageCard2: React.FC<any> = ({ text, text2, backgroundColor, color }: Props) => {
    return (
        <>
            <View style={[styles.cardView, { backgroundColor: backgroundColor ? backgroundColor : colors.navy }]}>
                <Text style={[styles.cardText, { color: color ? color : colors.white }]}>{text}</Text>
                <Text style={[styles.cardText2, { color: color ? color : colors.white }]}>{text2}</Text>
            </View>
        </>
    )
}

const VerticalCard: React.FC<any> = ({ vCardtext, vCardtext2, vCardtext3, verticalCardIcon, fontSize, vCardtext4, vCardTextt5 }: Props) => {
    return (
        <>
            <View style={styles.verticalCard}>
                {verticalCardIcon && verticalCardIcon}
                <Text style={styles.verticalCardText}>{vCardtext}</Text>
                <Text style={styles.verticalCardText2}>{vCardtext2}</Text>
                <Text style={[styles.verticalCardText3, { fontSize: fontSize }]}>{vCardtext3}</Text>
                {vCardtext4 && <Text style={[styles.verticalCardText4, { fontSize: fontSize, }]}>{vCardtext4}</Text>}
                {vCardTextt5 && <Text style={[styles.verticalCardText4, { fontSize: fontSize, }]}>{vCardTextt5}</Text>}
            </View>
        </>
    )
}

const Loancard: React.FC<any> = ({ onPressBorrow, onPressLending }: Props) => {
    return (
        <>
            <TouchableOpacity style={styles.borrowMoneyView}>
                <TouchableOpacity style={styles.borrowBtn} onPress={onPressBorrow}>
                    <Text style={styles.borrowText}>I am borrowing money</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lendingBtn} onPress={onPressLending}>
                    <Text style={styles.borrowText}>I am lending money</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </>
    )
}


export { HomePageCard, HomePageCard2, VerticalCard, Loancard }