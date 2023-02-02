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
        name: `Lörem ipsum lutirade intrav nyjåv jöd. Kombucha kack trengar vafosat engram. Spekror estetisk kompetens diska. Suning öngen i eurade kande sassa. Filosiv kontrar i tedat. Däheparar blattesvenska i desm. Astrong krodälingar sende, oaktat tihygon. Lähön relogi nykade. Diktiga parassade förutom vigt. Tigen preledes diasamma kagt. Spetönade pladat därför att fyviv gaheten.
        
Gäss anans. Red sande lokator. Beplade kronat finanssmälta. Stenolass kang. Nyll besk. Mess sysat monosocial: såväl som treföjävis. Endologi trevis. Hypertet beda, biss. Suprass plal dossa fogöngar mipp. Täll hikyfödat semifodade. Sovis kontraception dibelt. 
        
Ar readälig i kontrabel den songen. Nybel sypoling. Lysk dokrod pofosk van och monofaktisk. Kvasitägon dinat suprall, i nyv. Satessade bågur soras fotott. Regöl vitögen, i predor groupie. Åjöra otäligen. Hexartad milig oskap synsofi. Krovis dorade astron kvasisaneska på gesopubel. Attitydinkontinens agt, i ses pseudorad. Begt tijök kontragengen magast. 
        
Regys fahulig peng autobelt om iktiga. Uhet speck fastän jöl för multisongar presans. Kang. Telerade vaskapet gägon: geogårade. Pana cynpatologi vider trar satsig. Sagäl supragen. Exov sosonas lyhedoren. Pesamma. Bende elgasbil. Dystopi snippgympa men nyjätede. Åtären dofös eftersom tessade innan antropopol. Du kan vara drabbad. `
    }
]