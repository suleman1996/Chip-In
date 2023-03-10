import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native'
import CustomHeader from '../../../Component/CustomHeader/customHeader';
import Steps from '../../../Component/Steps/steps';
import { height, width } from '../../../utilis/Dimensions/dimensions';
import colors from '../../../utilis/Themes/Colors/colors';
import { useNavigation } from '@react-navigation/native';
import UncheckedIcon from '../../../Assets/svgs/common/uncheckBox'
import CheckedIcon from '../../../Assets/svgs/common/checkBox'
import Button from '../../../Component/Button/button';

import styles from './loanstep5.style';

const LoanStep5: React.FC<any> = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [checkedNoti, setCheckedNoti] = useState(false)

    const onPress = () => {
        if (checked === true) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }

    const onPressNoti = () => {
        if (checkedNoti === true) {
            setCheckedNoti(false)
        } else {
            setCheckedNoti(true)
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CustomHeader text2='Create a loan' notiIcon settingIcon />
            <View style={styles.topView}>

                <View style={styles.stepView}>
                    <Steps stepColor={colors.lightGreen} stepNumber={'5'} stepName={'Terms & Conditions'} numberColor={colors.navy} stepNameColor={colors.lightGreen} stepNameMargin={width(2)} />
                </View>
                <Text style={styles.loanText}></Text>
            </View>

            <ScrollView>
                {content.map((item) => {
                    return (
                        <View style={styles.contentView}>
                            <Text style={styles.content}>{item?.name}</Text>
                        </View>
                    )
                })}

                <View style={styles.uncheckView}>
                    <TouchableOpacity onPress={onPress}>
                        {checked === true ? <CheckedIcon /> : <UncheckedIcon />}
                    </TouchableOpacity>
                    <Text style={styles.uncheckText}>I have read and accept the Terms &
                        Conditions and I am happy to proceed.</Text>
                </View>

                <View style={styles.uncheckView2}>
                    <TouchableOpacity onPress={onPressNoti}>
                        {checkedNoti === true ? <CheckedIcon /> : <UncheckedIcon />}
                    </TouchableOpacity>
                    <Text style={styles.uncheckText}>Receive notifications</Text>
                </View>

                <Button text={'Send Contract'} textColor={colors.white} backgroundColor={colors.darkGreen} marginBottom={height(2)} marginTop={height(3)} onPress={()=>navigation.navigate('Home')}/>
            </ScrollView>

        </SafeAreaView >
    )
}
export default LoanStep5

const content = [
    {
        name: `L??rem ipsum lutirade intrav nyj??v j??d. Kombucha kack trengar vafosat engram. Spekror estetisk kompetens diska. Suning ??ngen i eurade kande sassa. Filosiv kontrar i tedat. D??heparar blattesvenska i desm. Astrong krod??lingar sende, oaktat tihygon. L??h??n relogi nykade. Diktiga parassade f??rutom vigt. Tigen preledes diasamma kagt. Spet??nade pladat d??rf??r att fyviv gaheten.
        
G??ss anans. Red sande lokator. Beplade kronat finanssm??lta. Stenolass kang. Nyll besk. Mess sysat monosocial: s??v??l som tref??j??vis. Endologi trevis. Hypertet beda, biss. Suprass plal dossa fog??ngar mipp. T??ll hikyf??dat semifodade. Sovis kontraception dibelt. 
        
Ar read??lig i kontrabel den songen. Nybel sypoling. Lysk dokrod pofosk van och monofaktisk. Kvasit??gon dinat suprall, i nyv. Satessade b??gur soras fotott. Reg??l vit??gen, i predor groupie. ??j??ra ot??ligen. Hexartad milig oskap synsofi. Krovis dorade astron kvasisaneska p?? gesopubel. Attitydinkontinens agt, i ses pseudorad. Begt tij??k kontragengen magast. 
        
Regys fahulig peng autobelt om iktiga. Uhet speck fast??n j??l f??r multisongar presans. Kang. Telerade vaskapet g??gon: geog??rade. Pana cynpatologi vider trar satsig. Sag??l supragen. Exov sosonas lyhedoren. Pesamma. Bende elgasbil. Dystopi snippgympa men nyj??tede. ??t??ren dof??s eftersom tessade innan antropopol. Du kan vara drabbad. `
    }
]