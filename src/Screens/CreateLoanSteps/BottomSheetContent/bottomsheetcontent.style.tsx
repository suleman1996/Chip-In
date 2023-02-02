import { StyleSheet } from 'react-native'
import { height } from '../../../utilis/Dimensions/dimensions';
import colors from '../../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor:colors.darkGreen,
    },
    text:{
        fontSize:22,
        color:colors.white,
        textAlign:'center',
        marginTop:height(1),
    }
});
export default styles