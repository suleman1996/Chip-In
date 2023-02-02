import { Dimensions, StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const newWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.navy
    },
    customView: {
        backgroundColor: colors.navy,
        height: height(8),
        width: '100%',
        position: 'relative',
        top: 0,
        left: 0
    },
    mainView2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: 0.06 * newWidth,
        margin: 10
    },
    View: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: colors.grey
    },
    text: {
        color: colors.white,
        fontSize: font(2),
        marginLeft: width(3)
    },
    text2: {
        fontWeight: 'bold',
        fontSize: font(2)
    },
    view1: {
        flexDirection: "row",
        alignItems: 'center',
    },
    iconView: {
        flexDirection: "row"
    },
    notificationIcon: {
        marginRight: width(3)
    },
    text3:{
        color: colors.white,
        fontSize: font(1.9),
        marginLeft: width(4),
    }
});
export default styles