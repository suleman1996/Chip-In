import { Dimensions, StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

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
        marginHorizontal: 0.06 * newWidth
    },
    loanText: {
        fontSize: font(3),
        color: colors.white,
        marginLeft: width(11),
        marginTop: height(2)
    },
    inputField: {
        backgroundColor: colors.white,
        height: 50,
        marginHorizontal: width(10),
        borderRadius: 6,
        marginTop: height(2),
        paddingHorizontal: width(5),
        fontSize: font(1.9),
        borderWidth: 1,
        borderColor: colors.grey,
        color: colors.darkGreen
    },
    inputView: {
        marginTop: height(2),
    },
    inputView2:{
        marginTop: height(2),
        flexDirection: 'row',
        marginHorizontal: width(10),
        paddingHorizontal: width(5),
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 6,
        alignItems:'center',
    },
    inputStyle: {
        flex: 1,
        color:colors.darkGreen
    }

});
export default styles