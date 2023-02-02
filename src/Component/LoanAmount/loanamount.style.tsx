import { StyleSheet } from 'react-native'
import { height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    amountView: {
        backgroundColor: colors.darkGreen,
        borderRadius: width(3),
        marginHorizontal: width(11),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 23,
        paddingBottom: 40,
        marginTop: height(2)
    },
    amountInnerView: {
        borderRightWidth: 1,
        borderColor: 'rgba(158, 150, 150, .5)',
        paddingRight: 40,
    },
    amountInnerView2: {
        marginRight: 30,
        paddingLeft: 10
    },
    loanText2: {
        fontSize: 14,
        color: colors.white
    },
    loanAmount: {
        fontSize: 32,
        color: colors.white
    },
    interestText: {
        fontSize: 14,
        color: colors.interestColor,
        top: -16,
        fontWeight: 'bold'
    },
    interestAmount: {
        fontSize: 13,
        top: -16,
        color: colors.interestColor,
        fontWeight: 'bold'
    },
    amountView2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: width(13),
        marginTop:height(1.5),
        marginBottom:height(2.5)
    },
    totalAmount:{
        fontSize:12,
        color:colors.white,
    }
});
export default styles