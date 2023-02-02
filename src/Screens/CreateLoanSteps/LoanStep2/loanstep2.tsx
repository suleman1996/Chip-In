import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native'
import CustomHeader from '../../../Component/CustomHeader/customHeader';
import { CustomSheetButton } from '../../../Component/CustomSheetButton/customsheetbutton';
import { LoanAmountView, TotalAmount } from '../../../Component/LoanAmount/loanamount';
import Steps from '../../../Component/Steps/steps';
import { height, width } from '../../../utilis/Dimensions/dimensions';
import colors from '../../../utilis/Themes/Colors/colors';
import LeftArrowIcon from '../../../Assets/svgs/common/leftGreyArrow'
import CalenderIcon from '../../../Assets/svgs/common/calender'
import RBSheet from 'react-native-raw-bottom-sheet';
import { Calender,EndCalenderDate, RepaymentFrequency } from './Calender/calender';
import Button from '../../../Component/Button/button';
import { useNavigation } from '@react-navigation/native';

import styles from './loanstep2.style';

const LoanStep2: React.FC<any> = () => {
    
    const navigation = useNavigation();
    const refRBSheet: any = useRef();
    const refRBSheet2 : any = useRef();
    const refRBSheet3 : any = useRef();
    const [selectedFrequency, setSelectedFrequency] = useState<any>('');
    const [selectedDate, setSelectedDate] = useState<any>()
    const [endDate, setEndDate] = useState<any>()

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CustomHeader text2='Create a loan' notiIcon settingIcon />
            <View style={styles.topView}>

                <View style={styles.stepView}>
                    <Steps stepColor={colors.lightGreen} stepNumber={'2'} stepName={'Repayment Schedule'} numberColor={colors.navy} stepNameColor={colors.lightGreen} stepNameMargin={width(2)} />
                    <Steps stepNumber={'3'} stepName={'Your Details'} borderColor={colors.stepColor} numberColor={colors.stepColor} borderWidth={1} stepNameColor={colors.stepColor} marginLeft={width(2)} stepNameMargin={width(2)} />
                    <Steps stepNumber={'4'} borderColor={colors.stepColor} numberColor={colors.stepColor} borderWidth={1} marginLeft={width(1)} />
                </View>

                <Text style={styles.loanText}>Wedding Loan</Text>
                <LoanAmountView loanText={'Loan Amount'} loanAmount={'$300.00'} interestText={'Interest'} interestAmount={'0%'} />
                <TotalAmount totalAmount={'$1000'} totalPerson={'0'} />
            </View>

            <CustomSheetButton color={selectedDate ? colors.darkGreen : colors.grey} text={selectedDate ? selectedDate : 'When would you like loan to start?'} image={<CalenderIcon />} onPress={() => refRBSheet.current.open()} />
            <CustomSheetButton color={endDate ? colors.darkGreen : colors.grey} text={endDate ? endDate : 'When would you like loan to end?'} image={<CalenderIcon />}  onPress={()=>refRBSheet2.current.open()}/>
            <CustomSheetButton color={selectedFrequency?.name ? colors.darkGreen : colors.grey} text={selectedFrequency?.name ? selectedFrequency?.name : 'Choose repayment frequency'} image={<LeftArrowIcon />} onPress={() => refRBSheet3.current.open()} />
            <Button text='Next' backgroundColor={colors.darkGreen} textColor={colors.white} marginTop={height(15)} onPress={()=>navigation.navigate('loanstep3')}/>


            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                    container: { backgroundColor: colors.darkGreen, borderTopLeftRadius: 40, borderTopRightRadius: 40, height: height(52) },
                    draggableIcon: { backgroundColor: "#000" },
                }}
            >
                <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} onCancel={() => refRBSheet.current.close()} />
            </RBSheet>

            <RBSheet
                ref={refRBSheet2}
                closeOnDragDown={false}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                    container: { backgroundColor: colors.darkGreen, borderTopLeftRadius: 40, borderTopRightRadius: 40, height: height(52) },
                    draggableIcon: { backgroundColor: "#000" },
                }}>
                <EndCalenderDate endDate={endDate} setEndDate={setEndDate} onCancel={() => refRBSheet2.current.close()} />
            </RBSheet>

            <RBSheet
                ref={refRBSheet3}
                closeOnDragDown={false}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                    container: { backgroundColor: colors.darkGreen, borderTopLeftRadius: 40, borderTopRightRadius: 40, height: height(32) },
                    draggableIcon: { backgroundColor: "#000" },
                }}
                >
                  <RepaymentFrequency selectedFrequency={selectedFrequency} setSelectedFrequency={setSelectedFrequency} onCancel={()=>refRBSheet3.current.close()}/>
            </RBSheet>

        </SafeAreaView >
    )
}
export default LoanStep2
