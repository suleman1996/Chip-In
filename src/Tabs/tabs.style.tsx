import { StyleSheet} from 'react-native'
import colors from '../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
  shadow:{
    shadowColor:colors.smoke,
    shadowOffset:{
        width:0,
        height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  },
  tabView:{
    alignItems:'center',justifyContent:'center'
  },

});
export default styles