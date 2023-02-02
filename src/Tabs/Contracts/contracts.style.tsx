import { StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    safeAreaView:{
        flex:1,
        backgroundColor:colors.white
    },
    topView: {
        position: 'absolute',
        top: height(8),
        paddingHorizontal:width(3),
        width:'100%',
    },
    itemView:{
        backgroundColor:colors.lightGreen,
        borderRadius:20,
        marginHorizontal:width(5),
        paddingHorizontal:width(10),
        paddingTop:20,
        paddingBottom:20,
        marginTop:10
    },
    itemText:{
        color:colors.white,
        fontSize:font(4),
        fontWeight:'bold'
    },
    itemText2:{
        color:colors.white,
        fontSize:font(2.3)
    },
    itemButton:{
        backgroundColor:colors.darkGreen,
        width:165,
        alignItems:'center',
        justifyContent:'center',
        padding:width(2.3),
        borderRadius:width(2),
        marginTop:height(2)
    },
    btnText:{
        color:colors.white
    }
});
export default styles