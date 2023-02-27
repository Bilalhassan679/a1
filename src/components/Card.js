import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const Card = (props) => {
  
  return (
    <View style={styles.container}>
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.text1}>{props?.name}</Text>
        <Text style={styles.text2}>{props?.price} PKR</Text>
      <TouchableOpacity style={styles.cardbutton} onPress={props.onPress}>
      <Text>{props.text}
      </Text>
      </TouchableOpacity>
      </View>
      <Image style={styles.image} resizeMode='contain'  source={props?.image}/>
    </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {

    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5, 
    marginRight: 5,
    marginTop: 10,
   
    
    
  },
  innerContainer:{
    width: '90%',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardbutton:{
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 5,
    marginTop: 10
  },
  text1:{
    fontSize: 20,
    color: 'black',
    textAlign: 'left'
  },
  text2:{
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  image:{
    width: 100,
    height: 100,
  }
})