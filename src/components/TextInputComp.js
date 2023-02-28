import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const TextInputComp = props => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.input}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: widthPercentageToDP('90'),
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
});
