import React from 'react'
import { Text, View} from 'react-native'
import styles from './loanamount.style'

interface Props {
   loanText?:string
   loanAmount?:number
   interestText?:string
   interestAmount?:number
   totalAmount?:number
   totalPerson?:any
}

const LoanAmountView: React.FC<any> = ({ loanText, loanAmount, interestText, interestAmount }: Props) => {
    return (
        <>
              <View style={styles.amountView}>
                    <View style={styles.amountInnerView}>
                        <Text style={styles.loanText2}>{loanText}</Text>
                        <Text style={styles.loanAmount}>{loanAmount}</Text>
                    </View>
                    <View style={styles.amountInnerView2}>
                        <Text style={styles.interestText}>{interestText}</Text>
                        <Text style={styles.interestAmount}>{interestAmount}</Text>
                    </View>
                </View>
        </>
    )
}

const TotalAmount: React.FC<any> = ({ totalAmount, totalPerson}: Props) => {
    return (
        <>
               <View style={styles.amountView2}>
                    <Text style={styles.totalAmount}>Total Amount {totalAmount}</Text>
                    <Text style={styles.totalAmount}>{totalPerson} Person added</Text>
                </View>
        </>
    )
}
export {LoanAmountView,TotalAmount}


