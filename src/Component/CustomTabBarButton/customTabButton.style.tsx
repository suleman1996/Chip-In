import { StyleSheet } from 'react-native'
import { width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    btn: {
        top: -25,
        justifyContent: "center",
        alignItems: 'center',
    },
    View: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.darkGreen,
        borderWidth:width(1.2),
        borderColor:colors.white
    }
});
export default styles