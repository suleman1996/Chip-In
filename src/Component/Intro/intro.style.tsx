import { StyleSheet, Platform,} from 'react-native'
import { font, height ,windowWidth} from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:colors.lightGreen
    },
    skip: {
        height: 32,
        width: 64,
        padding: 6,
        backgroundColor: 'rgba(255,255,255,0.32)',
        borderRadius: 32,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: Platform.OS == 'ios' ? 60 : 30,
        marginHorizontal: 15
    },
    textskip: {
        color: '#ffffff',
        textAlign: 'center'
    },
    image: { 
        width:windowWidth
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color:colors.white,
    },
    title1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color:colors.white,
    },
    text: {
        textAlign: 'center',
        fontSize: font(2),
        marginTop:height(4),
        color: colors.white,
        
    },
});
export default styles