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
        bottom:heightPercentageToDP('10'),
        POSITION:'absolute',
        zIndex:1,   
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
    // dotFontBack:{
    //     marginTop:20,
    //     backgroundColor:'grey',
    //     borderRadius:50,
    //     height:40,
    //     justifyContent:'center',
    //     alignItems:'center',
    // }
})