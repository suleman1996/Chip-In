import { StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    view:{
     marginLeft:width(4),
     marginBottom:height(1.5),
     marginTop:height(1.5),
     top:-20
    },
    text:{
        color:colors.grey,
        fontSize:font(2)
    },
    text2:{
       color:colors.darkGreen,
       fontSize:font(2.2) 
    },
    separtorLine:{
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        marginLeft:width(4),
        top:-20
    },
    iconView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    icon:{
        marginHorizontal:width(8)
    }

});
export default styles