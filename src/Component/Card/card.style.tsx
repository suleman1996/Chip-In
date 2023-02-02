import { StyleSheet } from 'react-native'
import { font, height, width } from '../../utilis/Dimensions/dimensions';
import colors from '../../utilis/Themes/Colors/colors';

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.lightGreen,
    borderRadius: width(6),
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    padding:height(1),
    marginHorizontal:width(4),
    marginTop:height(12),
    paddingRight:width(2),
    paddingLeft:width(6)
  },
  text: {
    fontSize: font(2.6),
    color: colors.pureBlack,
  },
  text2: {
    fontSize: 32,
    color: colors.pureBlack,
    fontWeight: 'bold',
    lineHeight:35
  },
  text3: {
    color: colors.white,
    fontSize:font(2.5)
  },
  //cardView
  cardView:{
    backgroundColor:colors.navy,
    borderRadius: width(6),
    padding:height(4),
    marginHorizontal:width(4),
    marginTop:height(2),
    justifyContent:'center',
    alignItems:'center',
  },
  cardText:{
    color:colors.white,
    fontSize:font(2.5)
  },
  cardText2:{
    color:colors.lightGreen,
    justifyContent:'center',
    alignItems:'center',
    fontSize:font(5)
  },
  //vertical Card
  verticalCard:{
    borderRadius: width(6),
    marginHorizontal:width(4),
    marginTop:height(2),
    paddingTop:height(2),
    paddingLeft:width(5),
    paddingRight:width(5),
    borderColor:colors.lightGreen,
    borderWidth:1,
    alignItems:"center",
  },
  verticalCardText:{
    color:colors.pureBlack,
    fontSize:font(2.5),
    fontWeight:'bold',
    marginTop:height(3),
  },
  verticalCardText2:{
    color:colors.pureBlack,
    fontSize:font(2.5),
    fontWeight:'bold',
  },
  verticalCardText3:{
    color:colors.lightGreen,
    marginTop:height(3),
  },
  verticalCardText4:{
    color:colors.lightGreen,
  },
  // LoanCard
  borrowBtn:{
    backgroundColor:colors.lightGreen,
    marginHorizontal:width(4),
    height:height(7),
    borderRadius:100,
    justifyContent:'center',
    marginTop:height(2),
},
lendingBtn:{
    backgroundColor:colors.lightGreen,
    marginHorizontal:width(4),
    height:height(7),
    borderRadius:100,
    justifyContent:'center',
    marginTop:height(1),
},
borrowMoneyView:{
    marginHorizontal:width(8),
    borderRadius:20,
    borderWidth:1,
    borderColor:colors.borderGray,
    marginTop:height(2),
    paddingBottom:height(2)
},
borrowText:{
    textAlign:'center',
    color:colors.white,
    fontSize:font(2),
}
});
export default styles