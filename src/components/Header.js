import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Header = () => {
  return (
    <View style={styles.container}>
      <AntDesign name='leftcircleo' size={30} color={'black'}/>
      <Text style={styles.timelineTxt}>Timelines</Text>
      <Text style={styles.timelineTxt}>imag</Text>
      {/* <image source={require('../../assets/images/setting.png')}/> */}
    </View>

  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:20
    },
    timelineTxt:{
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'Roboto',
        color:'black'
    }
})