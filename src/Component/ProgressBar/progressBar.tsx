import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './progressBar.style';

const PercentageBar: React.FC<any> = ({
    percentage,
    height,
    backgroundColor,
    completedColor,
    Percentage,
}: any) => {

    const [getPercentage, setPercentage] = useState(percentage);
    const [getheight, setHeight] = useState(height);
    const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
    const [getCompletedColor, setCompletedColor] = useState(completedColor);

    return (
        <>
            <View style={styles.mainView}>
                <View style={{ backgroundColor: "#004053", width: '70%', height: 15, borderRadius: 12 }}>
                    <View style={{ backgroundColor: '#007C89', width: Percentage >= '100%' ? '100%' : Percentage, height: 15, borderRadius: 12 }}></View>
                </View>
                {/* <View style={[styles.innerView, { height: getheight, borderColor: getBackgroundColor }]} />
                <View style={styles.innerView4}>
                    <View style={[styles.innerView2, { width: Percentage ? Percentage : 0 , height: getheight, backgroundColor: getCompletedColor, }]} />
                    <View style={[styles.innerView3, { width: Percentage ? Percentage : 0, height: getheight }]} />
                </View> */}
                <Text style={{ marginLeft: 15, fontSize: 13, color: 'white', fontWeight: 'bold' }}>{Percentage ? Percentage : '0'} PAID</Text>
            </View>
        </>
    );
};
export default PercentageBar;