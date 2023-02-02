import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Button from '../../../Component/Button/button';
import { height } from '../../../utilis/Dimensions/dimensions';
import colors from '../../../utilis/Themes/Colors/colors';

import styles from './bottomsheetcontent.style';

const BottomSheetContent: React.FC<any> = ({ onClose, setSelected, selected,}: any) => {

    const handleClick = (item: any) => {
        //    if(item === selected){
        //     setSelected()
        //    }else{
        //     setSelected(item)
        //    }
        setSelected(item)
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            {loanType.map((item, index) => {
                return (
                    <TouchableOpacity onPress={() => handleClick(item)}>
                        <Text style={[styles.text, { padding: 20, backgroundColor: item === selected ? colors.lightGreen : undefined }]}>{item?.name}</Text>
                    </TouchableOpacity>
                )
            })}
            <Button text='Cancel' backgroundColor={colors.white} textColor={colors.darkGreen} onPress={onClose} marginTop={height(1)} />
        </SafeAreaView >
    )
}
export default BottomSheetContent

const loanType = [
    {
        name: 'Wedding'
    },
    {
        name: 'Picnic'
    },
    {
        name: 'Work'
    },
    {
        name: 'Student'
    }
]

