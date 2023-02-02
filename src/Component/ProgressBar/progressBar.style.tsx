import { StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    mainView: {
         flexDirection:'row',
         marginTop:21
        // justifyContent: 'center',
    },
    innerView: {
        width: '100%',
        // marginVertical: 10,
        borderRadius: 12,
        borderWidth: 1,
    },
    innerView2: {
        // marginVertical: 10,
        borderRadius: 12,
        position: 'absolute',
        bottom: 20,
    },
    innerView3: {
        bottom: 10,
    },
    innerView4: {
        // flexDirection:'row',
    }
});
export default styles