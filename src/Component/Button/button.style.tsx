import { StyleSheet} from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';

const styles = StyleSheet.create({
    btnView:{
        height:height(7),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        marginHorizontal:width(10),
    },
    text:{
        fontSize:font(2),
    },
    
});
export default styles