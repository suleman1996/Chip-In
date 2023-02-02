import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import Button from '../../Component/Button/button'
import CustomHeader from '../../Component/CustomHeader/customHeader'
import { CustomSheetButton } from '../../Component/CustomSheetButton/customsheetbutton'
import { LoanAmountView, TotalAmount } from '../../Component/LoanAmount/loanamount'
import Steps from '../../Component/Steps/steps'
import { FormInput } from '../../utilis/Text_input'
import Arrowicon from '../../Assets/svgs/common/leftGreyArrow'
import PercentageIcon from '../../Assets/svgs/common/percentage'
import colors from '../../utilis/Themes/Colors/colors'
import BottomSheetContent from './BottomSheetContent/bottomsheetcontent';
import { height, width } from '../../utilis/Dimensions/dimensions';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'

import styles from './createloansteps.style'
import { useNavigation } from '@react-navigation/native';

const CreateLoanSteps: React.FC<any> = () => {
    const navigation = useNavigation();
    const refRBSheet: any = useRef();
    const [selected, setSelected] = useState<any>('');

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CustomHeader text2='Create a loan' notiIcon settingIcon />
            <View style={styles.topView}>

                <View style={styles.stepView}>
                    <Steps stepColor={colors.lightGreen} stepNumber={'1'} stepName={'Loan Info'} numberColor={colors.navy} stepNameColor={colors.lightGreen} stepNameMargin={width(3)}/>
                    <Steps stepNumber={'2'} stepName={'Repayment Schedule'} borderColor={colors.stepColor} numberColor={colors.stepColor} borderWidth={1} stepNameColor={colors.stepColor} marginLeft={10} stepNameMargin={width(3)}/>
                    <Steps stepNumber={'3'} borderColor={colors.stepColor} numberColor={colors.stepColor} borderWidth={1} marginLeft={width(2.5)} />
                </View>

                <Text style={styles.loanText}>Wedding Loan</Text>
                <LoanAmountView loanText={'Loan Amount'} loanAmount={'$300.00'} interestText={'Interest'} interestAmount={'0%'} />
                <TotalAmount totalAmount={'$1000'} totalPerson={'0'} />

            </View>

            <KeyboardAwareView animated={true}>
                <ScrollView style={{ flex: 1 }}
                    keyboardShouldPersistTaps={true}
                    automaticallyAdjustContentInsets={false}>
                    <FormInput style={styles.inputField} placeholder='Name of the loan' placeholderTextColor={colors.grey} textInputContainerStyle={styles.inputView} />
                    <CustomSheetButton color={selected?.name ? colors.darkGreen : colors.grey} text={selected?.name ? selected?.name : 'Type of loan'} image={<Arrowicon />} onPress={() => refRBSheet.current.open()} />
                    <FormInput style={styles.inputField} inputStyle={styles.inputStyle} placeholder='Interest' placeholderTextColor={colors.grey} textInputContainerStyle={styles.inputView2} rightIcon={<PercentageIcon />} />
                    <Button text='Next' backgroundColor={colors.darkGreen} textColor={colors.white} marginTop={height(15)} onPress={()=>navigation.navigate('loanstep2')}/>
                </ScrollView>
            </KeyboardAwareView>


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
                <BottomSheetContent onClose={() => refRBSheet.current.close()} onSelectClose={undefined} selected={selected} setSelected={setSelected} />
            </RBSheet>

        </SafeAreaView >
    )
}
export default CreateLoanSteps
