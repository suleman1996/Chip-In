import { Dimensions, StyleSheet } from 'react-native'
import { height} from '../../utilis/Dimensions/dimensions';

const newWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    stepView:{
        height:32,
        width:32,
        borderRadius:17,
        alignItems:'center',
        justifyContent:"center",
    },
    number:{
        fontSize:16,
        fontWeight:'bold',
    },
    stepName:{
        fontSize:0.04*newWidth,
        fontWeight:'bold',
        // marginLeft:width(3)
    },
    mainView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:height(2)
    }
});
export default styles