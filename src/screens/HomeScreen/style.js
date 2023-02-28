import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center'
    },
    container0:{
        borderRadius:10,
        borderColor:'silver',
        borderWidth:1,
        backgroundColor:'white',
        height:heightPercentageToDP('15'),
        width:widthPercentageToDP('90'),
    },
    container1:{
       flexDirection:'row',
         justifyContent:'space-between',
  
    },
    dotFont:{
        marginTop:5,
        marginRight:10
        // fontSize:20,
    },
    newTimeLine:{
        marginTop:heightPercentageToDP('1'),
        padding:18,
        borderRadius:5,
        borderColor:'silver',
        borderWidth:1,
        backgroundColor:'black',
        width:widthPercentageToDP('90'),
    },
    innerNewTimeLine:{
        flexDirection:'row'
    },
    newTimeLineText:{
        marginLeft:widthPercentageToDP('2'),
        marginTop:heightPercentageToDP('0.5'),
        fontWeight:'bold',
        fontSize:heightPercentageToDP('2.5'),
        color:"white"
    },
    container2:{
        marginTop:10,
        borderRadius:10,
        borderColor:'silver',
        borderWidth:1,
        backgroundColor:'white',
        height:heightPercentageToDP('15'),
        width:widthPercentageToDP('90'),
    }
})