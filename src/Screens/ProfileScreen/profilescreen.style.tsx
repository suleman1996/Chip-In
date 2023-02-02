import { StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    safeAreaView:{
        flex:1,
        backgroundColor:colors.white
    },
    btn: {
        top: -40,
        justifyContent: "center",
        alignItems: 'center',
    },
    View: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor:colors.lightGreen,
    },
    img:{
        height:120,
        width:120,
    }

});
export default styles