import React, { useCallback } from 'react'
import { Text, View, SafeAreaView, FlatList,TouchableOpacity} from 'react-native'
import CustomHeader from '../../Component/CustomHeader/customHeader'
import styles from './contracts.style'

const Contracts: React.FC<any> = () => {

    const renderItem = useCallback(({ item, index }: any) => (
        <View key={index} >
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item.amount}</Text>
                <Text style={styles.itemText2}>{item.name}</Text>
                <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.btnText}>READ CONTRACT</Text>
                </TouchableOpacity>
            </View>
        </View>
    ), []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CustomHeader text2='Contracts' customView notiIcon settingIcon />
            <View style={styles.topView}>
                <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={renderItem} contentContainerStyle={{paddingBottom:20}}/>
            </View>
        </SafeAreaView>
    )
}
export default Contracts

const data = [
    {
        amount: '$10,000',
        name: 'Wedding loan'
    },
    {
        amount: '$2,000',
        name: 'Picnic'
    },
    {
        amount: '$15,000',
        name: 'Study'
    },
]