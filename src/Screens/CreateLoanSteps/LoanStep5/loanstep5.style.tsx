import { Dimensions, StyleSheet } from 'react-native'
import { font, height, width } from '../../../utilis/Dimensions/dimensions';
import colors from '../../../utilis/Themes/Colors/colors';

const newWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.white
    },
    topView: {
        backgroundColor: colors.navy,
    },
    stepView: {
        flexDirection: 'row',
        marginHorizontal: 0.06 * newWidth,
    },
    loanText: {
        fontSize: font(3),
        color: colors.white,
        marginLeft: width(11),
        marginTop: height(1)
    },
    contentView:{
        marginHorizontal: 0.06 * newWidth,
        marginBottom:20
    },
    content:{
        fontSize:font(1.8),
        color:colors.pureBlack,
        textAlign:'justify',
        lineHeight:21
    },
    uncheckView:{
        marginHorizontal: 0.06 * newWidth,
        flexDirection:'row'
    },
    uncheckView2:{
        marginHorizontal: 0.06 * newWidth,
        flexDirection:'row',
        marginTop:height(1.5),
        marginBottom:height(1.5)
    },
    uncheckText:{
        marginHorizontal:width(5),
        fontSize:16,
        color:colors.pureBlack,
        fontWeight:'700'
    }
});
export default styles