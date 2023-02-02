import { StyleSheet, Platform } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        backgroundColor: colors.lightGreen
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        marginTop: height(8),
        fontSize: font(4.3),
    },
    inputView:{
        marginTop: height(6),
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

});
export default styles