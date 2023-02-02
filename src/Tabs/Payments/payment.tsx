import React, { useCallback, useEffect } from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import CustomHeader from '../../Component/CustomHeader/customHeader'
import PercentageBar from '../../Component/ProgressBar/progressBar'
import styles from './payment.style'

const Payments: React.FC<any> = () => {
  
    const renderItem = useCallback(({ item, index }: any) => (
        <View key={index}>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item.amount}</Text>
                <Text style={styles.itemText2}>{item.name}</Text>
                <PercentageBar
                    height={20}
                    backgroundColor={'grey'}
                    completedColor={'blue'}
                    Percentage='10%'
                />
                <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.btnText}>MAKE A PAYMENT</Text>
                </TouchableOpacity>
            </View>
        </View>
    ), []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CustomHeader text2='Lodge a payment' customView notiIcon settingIcon />
            <View style={styles.topView}>
                <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={renderItem} contentContainerStyle={{ paddingBottom: 20 }} />
            </View>
        </SafeAreaView>
    )
}
export default Payments

const data = [
    {
        amount: '$10,000',
        name: 'Wedding loan'
    },
    {
        amount: '$2,000',
        name: 'Picnic'
    },
]