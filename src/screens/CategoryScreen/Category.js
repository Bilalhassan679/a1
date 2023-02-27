import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../CategoryScreen/style'
import Card from '../../components/Card';
import { addCartItem } from '../../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Category = ({navigation}) => {
  const dispatch=useDispatch();
  const addedItems=useSelector(state=>state)
  const [cartList,setCartList]=useState([{
    id:1,
    name:'shoes 1',
    price:100,
    image:require('../../images/image2.png')
  },
  {
    id:2,
    name:'shoes 2',
    price:100,
    image:require('../../images/image2.png')
  },
  {
    id:3,
    name:'shoes 3',
    price:100,
    image:require('../../images/image2.png')
  },
  {
    id:4,
    name:'shoes 4',
    price:100,
    image:require('../../images/image2.png')
  },
  {
    id:5,
    name:'shoes 5',
    price:100,
    image:require('../../images/image2.png')
  },

]
  );
  
  const addItem=(item)=>{
    dispatch(addCartItem(item))
  }
  const Header1 = () => {
    return (
      <View style={styles.container1}>
        <Text style={styles.timelineTxt}>Redux App</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('CartList')}>
        <Text  style={styles.timelineTxt}>Cart {addedItems?.cartList?.length}</Text>
        </TouchableOpacity>
        {/* <image source={require('../../')}/> */}
      </View>
  
    )
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
      renderItem={({item})=>{
        return (
        <Card text={"Add To Cart"} name={item.name} price={item.price} image={item.image} onPress={()=>addItem(item)} />
      )}

      }
    />
    </View>
    </>
  )
}

export default Category
