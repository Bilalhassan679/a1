import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const FlatListCom = props => {
  return (
    <View>
      <FlatList
        data={props.data}
        keyExtractor={Item => Item.id.toString()}
        renderItem={({item}) => {
          return props.renderItem(item);
        }}
      />
    </View>
  );
};

export default FlatListCom;

const styles = StyleSheet.create({});
