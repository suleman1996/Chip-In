import React from 'react'
import { Text, View} from 'react-native'
import styles from './steps.style'

interface Props {
    stepNumber?:boolean
    stepName?:string
    stepColor?:any
    marginLeft?:any
    borderWidth?:any
    borderColor?:any
    opacity?:any
    numberColor?:any
    stepNameColor?:any
    stepNameMargin?:any
}

const Steps: React.FC<any> = ({stepNameMargin,stepNumber,stepName,stepColor,marginLeft,borderWidth,borderColor,opacity,numberColor,stepNameColor}:Props) => {

    return (
        <View style={[styles.mainView,{marginLeft:marginLeft}]}>
            <View style={[styles.stepView,{backgroundColor:stepColor,borderWidth:borderWidth ? borderWidth:0,borderColor:borderColor,opacity:opacity}]}>
                <Text style={[styles.number,{color:numberColor}]}>{stepNumber}</Text>
            </View>
            <Text style={[styles.stepName,{color:stepNameColor,marginLeft:stepNameMargin && stepNameMargin}]}>{stepName}</Text>
        </View>
    )
}
export default Steps


