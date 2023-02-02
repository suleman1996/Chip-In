import React from 'react'
import { Text, View ,TouchableWithoutFeedback} from 'react-native'
import styles from './customsheetbutton.style'

interface Props {
    onPress?:()=>void
    image?:any
    text?:string
    color?:any
}

const CustomSheetButton: React.FC<any> = ({ onPress, image ,text,color}: Props) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.view}>
                <Text style={[styles.text,{color:color}]}>{text}</Text>
                <View style={styles.arrowView}>
                    {image}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export { CustomSheetButton }


