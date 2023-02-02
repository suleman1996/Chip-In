import React, { useCallback, useEffect } from 'react'
import { Text, View, StatusBar, FlatList, Image, SafeAreaView, ScrollView } from 'react-native'
import { HomePageCard, HomePageCard2, VerticalCard } from '../../Component/Card/card'
import CalenderIcon from '../../Assets/svgs/homepage/calender'
import PaymentIcon from '../../Assets/svgs/homepage/payment'
import OverDueIcon from '../../Assets/svgs/homepage/overdue'
import CustomHeader from '../../Component/CustomHeader/customHeader'
import colors from '../../utilis/Themes/Colors/colors'
import styles from './homepage.style'
import { font } from '../../utilis/Dimensions/dimensions'
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
    const colorArray = ['#FCB53B', '#EF463B', "#F58025"]
    const navigation = useNavigation();

    const renderItem = useCallback(({ item, index }: any) => (
        <View key={index} >
            <View style={[styles.imgView, { backgroundColor: colorArray[index % colorArray.length] }]}>
                <Image source={require('../../Assets/svgs/homepage/pic.png')} resizeMode="cover" style={styles.topImg} />
            </View>
        </View>
    ), []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.navy} />
            <CustomHeader profilePic text1='Welcome' text2="James!" customView notiIcon settingIcon onPressSetting={() => navigation.navigate('ProfileScreen')} />

            <View style={styles.topView}>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data} renderItem={renderItem} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 130 }}>
                <HomePageCard text='Congratulations' text2='David!' text3={'You’re half way \n there!'} homePic />
                <HomePageCard2 text='YOUR LOAN' text2='$10,000' />
                <HomePageCard2 text='ALREADY PAID' text2='$2,500' />
                <HomePageCard2 text='MONTHLY PAYMENT ' text2='$250' backgroundColor={colors.blur} />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <VerticalCard vCardtext={'MONTHS'} vCardtext2={'LEFT'} vCardtext3={'8'} verticalCardIcon={<CalenderIcon />} fontSize={font(15)} />
                    <VerticalCard vCardtext={'NEXT'} vCardtext2={'PAYMENT DUE'} vCardtext3={'7 OCT'} verticalCardIcon={<PaymentIcon />} fontSize={font(6)} />
                    <VerticalCard vCardtext={'OVERDUE'} vCardtext2={'PAYMENTS'} vCardtext3={'Oops...'} vCardtext4={'You Owe'} vCardTextt5={'$250'} verticalCardIcon={<OverDueIcon />} fontSize={font(4)} />
                </ScrollView>

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomePage

const data = [
    {
        img: require('../../Assets/svgs/homepage/pic.png'),
        title: 'hello'
    },
    {
        img: require('../../Assets/svgs/homepage/pic.png'),
        title: 'hello'
    },
    {
        img: require('../../Assets/svgs/homepage/pic.png'),
        title: 'hello'
    },
    {
        img: require('../../Assets/svgs/homepage/pic.png'),
        title: 'hello'
    },
]