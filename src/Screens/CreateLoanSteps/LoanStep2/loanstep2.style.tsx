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

});
export default styles