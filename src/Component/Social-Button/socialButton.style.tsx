import { StyleSheet} from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';

const styles = StyleSheet.create({
    btnView:{
        height:height(7),
        alignItems:'center',
        borderRadius:100,
        marginHorizontal:width(10),
        flexDirection:'row'
    },
    text:{
        fontSize:font(2),
    },
    fbiconView:{
        marginHorizontal:width(5),
    }
});
export default styles