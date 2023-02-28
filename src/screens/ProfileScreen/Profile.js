import {  Button, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
      <Text>Profile</Text>
      <Button title='CrudList' onPress={()=>{navigation.navigate('CrudCartList')}}></Button>
    </View>
  )
}

export default Profile
