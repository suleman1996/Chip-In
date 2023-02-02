import { StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.white,
        height: 50,
        marginHorizontal: width(10),
        borderRadius: 6,
        marginTop: height(2),
        paddingHorizontal:width(5),
        fontSize: font(2.3),
        borderWidth:1,
        borderColor:colors.grey,
        color:colors.darkGreen,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'  
    },
    text:{
      fontSize: font(1.9),
    },
    arrowView:{
    }
});
export default styles