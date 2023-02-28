import { StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import { removeCartItem } from '../../redux/CartSlice'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const CartList = () => {
    const dispatch=useDispatch();
    const cartList=useSelector(state=>state.cartList)
    const navigation =useNavigation();
    const Header1 = () => {
        return (
          <TouchableOpacity style={styles.container1} onPress={()=>navigation.goBack()}>
            <Text style={styles.timelineTxt}>Back</Text>
            {/* <image source={require('../../')}/> */}
          </TouchableOpacity>
      
        )
      }
      const RemoveItem=(item)=>{
        dispatch(removeCartItem(item))
      }
  return (
    <>
    <Header1 />
   <View style={styles.container}>
  
   <FlatList 
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{width:'100%',paddingBottom:'20%'}}
     data={cartList}
     keyExtractor={(item,index)=>index.toString()}
     renderItem={({item,index})=>{
       return (
       <Card text={"Remove Cart"} name={item.name} price={item.price} image={item.image} onPress={()=>RemoveItem(index)} />
     )}

     }
   />
   </View>
   </>
  )
}

export default CartList

const styles = StyleSheet.create({
    timelineTxt:{
        fontSize:heightPercentageToDP('3'),
        fontWeight:'bold',
        fontFamily:'Roboto',
        color:'black'

    }
})