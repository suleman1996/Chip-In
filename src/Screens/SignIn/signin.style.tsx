import { StyleSheet} from 'react-native'
import { font, height, width} from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        backgroundColor:colors.lightGreen
    },
    image:{
        width:320,
        height:300,
        alignSelf:'center',
        marginTop:height(2)
    },
    signinText:{
        fontSize:font(4),
        color:colors.white,
        textAlign:'center'
    },
    inputField: {
        backgroundColor: colors.white,
        height: 50,
        marginHorizontal: width(10),
        borderRadius: 6,
        marginTop: height(2),
        paddingHorizontal: width(8),
        fontSize: font(2.3),
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    inputView:{
        marginTop:height(2),
    },
    signinText2:{
        color:colors.white,
        fontSize:font(2)
    },
    textView:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
        marginTop:height(5)
    },
    signinText3:{
        fontSize:font(2),
        color:colors.white,
        paddingLeft:width(1),
        fontWeight:'bold',
    }
});
export default styles