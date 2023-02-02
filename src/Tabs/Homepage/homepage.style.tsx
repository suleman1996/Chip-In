import { StyleSheet } from 'react-native'
import { height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    imgView: {
        height: 104,
        width: 104,
        borderRadius: 10,
        margin: 3,
    },
    topImg: {
        height: 104,
        width: 104,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    topView: {
        position: 'absolute',
        top: height(10),
        paddingHorizontal:width(3),
        zIndex:100,
    },


});
export default styles