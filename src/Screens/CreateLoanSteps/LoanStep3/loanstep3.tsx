import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native'
import CustomHeader from '../../../Component/CustomHeader/customHeader';
import { LoanAmountView, TotalAmount } from '../../../Component/LoanAmount/loanamount';
import Steps from '../../../Component/Steps/steps';
import { height, width } from '../../../utilis/Dimensions/dimensions';
import colors from '../../../utilis/Themes/Colors/colors';
import { useNavigation } from '@react-navigation/native';

import styles from './loanstep3.style';

const LoanStep3: React.FC<any> = () => {

    const navigation = useNavigation();

    const renderItem = useCallback(({ item, index }: any) => (
        <>
            <View key={index} style={styles.mainView}>
                <View style={styles.view}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.date}>{item.date}</Text>
                    <View style={styles.view3}>
                        <Text style={styles.status}>{item.status}</Text>
                    </View>
                </View>
            </View>
        </>
    ), []);


    const flatlistItemSeparator = () => {
        return (
            <View style={styles.itemSeparator} />
        )
    }

    const ListHeader = () => {
        return (
            <>
                <View style={styles.headerView}>
                    <View>
                        <Text style={styles.headerText}>Repayment frequency</Text>
                        <Text style={styles.headerText2}>Monthly</Text>
                    </View>
                    <View style={styles.headerView2}>
                        <Text style={styles.headerText}>Monthly Payments</Text>
                        <Text style={styles.headerText2}>$200.00</Text>
                    </View>
                </View>
            </>
        )
    }


    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CustomHeader text2='Create a loan' notiIcon settingIcon />
            <View style={styles.topView}>

                <View style={styles.stepView}>
                    <Steps stepColor={colors.lightGreen} stepNumber={'3'} stepName={'Send Contract'} numberColor={colors.navy} stepNameColor={colors.lightGreen} stepNameMargin={width(2)} />
                    <Steps stepNumber={'4'} stepName={'Borrower`s details'} borderColor={colors.stepColor} numberColor={colors.stepColor} borderWidth={1} stepNameColor={colors.stepColor} marginLeft={width(2)} stepNameMargin={width(2)} />
                    <Steps stepNumber={'5'} borderColor={colors.stepColor} numberColor={colors.stepColor} borderWidth={1} marginLeft={width(1)} />
                </View>

                <Text style={styles.loanText}>Wedding Loan</Text>
                <LoanAmountView loanText={'Loan Amount'} loanAmount={'$300.00'} interestText={'Interest'} interestAmount={'0%'} />
                <TotalAmount totalAmount={'$1000'} totalPerson={'0'} />
            </View>

            <View style={{flex:1}}>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    ItemSeparatorComponent={flatlistItemSeparator}
                    ListHeaderComponent={ListHeader}
                    contentContainerStyle={{ marginTop: 10 ,paddingBottom: 100}}
                />
            </View>

            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('loanstep5')}>
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}
export default LoanStep3

const Data = [
    {
        name: 'Repayment 1',
        amount: '$84.29',
        date: '14/01/2023',
        status: 'Upcoming'
    },
    {
        name: 'Repayment 2',
        amount: '$84.29',
        date: '14/02/2023',
        status: 'Upcoming'
    },
    {
        name: 'Repayment 3',
        amount: '$84.29',
        date: '14/03/2023',
        status: 'Upcoming'
    },
    {
        name: 'Repayment 4',
        amount: '$84.29',
        date: '14/04/2023',
        status: 'Upcoming'
    },
]
