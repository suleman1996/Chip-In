import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import CustomHeader from '../../Component/CustomHeader/customHeader'
import LoanPic from '../../Assets/svgs/createloan/loanPic'
import { Loancard } from '../../Component/Card/card'
import { useNavigation } from '@react-navigation/native'
import colors from '../../utilis/Themes/Colors/colors'
import styles from './createloan.style'

const CreateLoan: React.FC<any> = () => {

    const navigation = useNavigation();
    const [active, setActive] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.safeAreaView} onStartShouldSetResponder={()=>setActive(false)}>
            <CustomHeader text2='Create a loan' text3="Glad you're here! Please select." customView notiIcon settingIcon />
            <View style={styles.view} />

            <View style={styles.loanPicView}>
                <LoanPic />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 122 }}>
                <TouchableOpacity style={[styles.singleLoanView,{borderColor:active === true ? colors.disablegray:colors.borderGray}]} disabled={active === true && true} >
                    <Text style={[styles.singleLoan,{color:active === true ? colors.disableBlue:colors.darkGreen}]}>Single Loan</Text>
                    <Text style={[styles.singleLoanDesc,{color:active === true ? colors.borderGray:colors.pureBlack}]}>Lörem ipsum makrokrode</Text>
                </TouchableOpacity>

                {active === true ?
                    <>
                        <Loancard onPressBorrow={()=>{setActive(false),navigation.navigate('createloansteps')}}/>
                    </>
                    :
                    <TouchableOpacity style={styles.groupLoanView} onPress={() => setActive(true)}>
                        <Text style={styles.singleLoan}>Group Loan</Text>
                        <Text style={styles.singleLoanDesc}>Lörem ipsum makrokrode</Text>
                    </TouchableOpacity>
                }

            </ScrollView>
        </SafeAreaView>
    )
}
export default CreateLoan

