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
        marginTop: height(2)
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 0.06 * newWidth,
        padding:5,
        alignItems: 'center',
    },
    view: {
    },
    name: {
        fontSize: font(1.8),
        fontWeight: '700',
        color: colors.pureBlack
    },
    amount: {
        fontSize: font(1.8),
        fontWeight: '700',
        color: colors.pureBlack
    },
    date: {
        fontSize: font(1.6),
        fontWeight: '400',
        color: colors.pureBlack,
        marginRight:10
    },
    status: {
        fontSize: font(1.6),
        fontWeight: '400',
        color: colors.pureBlack,
        marginLeft:10
    },
    view2: {
        flexDirection: 'row',
    },
    view3:{
        borderWidth:1,borderRightWidth:0,borderTopWidth:0,borderBottomWidth:0,paddingRight:10,borderColor:colors.grey
    },
    itemSeparator:{
        height: 1,
        marginHorizontal: 0.06 * newWidth,
        backgroundColor: colors.grey,
        marginTop:height(1),
    },
    headerView:{
        marginHorizontal: 0.06 * newWidth,
        padding:5,
        flexDirection:'row',
        justifyContent:'flex-start',
        marginBottom:height(2)
    },
    headerText:{
        fontWeight:'500',
        fontSize:font(1.8),
        color:colors.darkGreen,
    },
    headerText2:{
        color:colors.darkGreen,
        fontSize:font(2.5),
        fontWeight:'500'
    },
    headerView2:{
        marginLeft:width(9)
    },
    bottomView:{
        width: '100%', 
        height: 60, 
        backgroundColor: colors.white, 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingBottom:height(4)
      },
      btnText:{
        fontSize:font(2),
        color:colors.white
      },
      button:{
        height:height(7),
        width:290,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        marginHorizontal:width(10),
        backgroundColor:colors.darkGreen
      }

});
export default styles