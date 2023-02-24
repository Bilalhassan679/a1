import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
const Home = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../images/image2.png')}
            resizeMode="contain"
            style={{
              zIndex: -1,
              width: widthPercentageToDP('60'),
              height: heightPercentageToDP('25'),
              // backgroundColor: 'red',
            }}
          />
        </View>
        <View>
          <View style={styles.container0}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginHorizontal: 20,
                marginTop: 20,
              }}>
              Series Name
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'black',
                marginHorizontal: 20,
              }}>
              Awekening
            </Text>
            </View>
          <View style={styles.dotFontBack}>
            <Entypo name="dots-two-vertical" size={25} style={styles.dotFont} />
          </View>
          </View>
        {/* <Text>hlksajdfl</Text> */}
        <View
          style={{
            marginLeft:20,
            height: 1,
            width: '90%',
            backgroundColor:'red',
            marginTop:heightPercentageToDP('1'),
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View   style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'black',
                marginHorizontal: 20,
              }}>
          <View style={{flexDirection:'row'}}>
        <Entypo name="github" size={20} color={'black'} style={styles.dotFont} />
        <Text style={{fontSize:15,marginTop:5}}>Next Up:</Text>
          </View>    
        </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
