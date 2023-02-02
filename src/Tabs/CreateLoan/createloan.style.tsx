import { StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    safeAreaView:{
        flex:1,
        backgroundColor:colors.white
    },
    view:{
      backgroundColor:colors.navy,
      height:height(15)
    },
    loanPicView:{
        position:'absolute',
        alignSelf:'center',
        top:height(8),
        zIndex:100
    },
    singleLoanView:{
        marginHorizontal:width(8),
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.borderGray,
        marginTop:height(13),
        justifyContent:'center',
        alignItems:'center',
        padding:height(5.4),
    },
    groupLoanView:{
        marginHorizontal:width(8),
        borderRadius:20,
        borderWidth:1,
        borderColor:colors.borderGray,
        justifyContent:'center',
        alignItems:'center',
        padding:height(6),
        marginTop:height(2),
    },
    singleLoan:{
        fontSize:28,
        color:colors.darkGreen
    },
    singleLoanDesc:{
        color:colors.pureBlack,
        fontSize:16
    },

});
export default styles