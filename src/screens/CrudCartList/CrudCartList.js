import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import TextInputComp from '../../components/TextInputComp';
import FlatListCom from '../../components/FlatListCom';

const CrudCartList = ({navigation}) => {
  const data = [
    {id: 0, name: 'Add Work'},
    {id: 1, name: 'Go to Gym'},
  ];
  const [input, setInput] = React.useState('');

  const RenderItem = item => {
    return (
      <View style={styles.renderlistCon}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.renderText}>{item?.name}</Text>
          <TouchableOpacity>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.backText}>BACK</Text>
          <View style={styles.todoContainer}>
            <Text
              style={{
                ...styles.backText,
                fontSize: heightPercentageToDP('3'),
              }}>
              TODO List
            </Text>
            <TextInputComp
              placeholder={'Add Todo List'}
              value={input}
              onChangeText={e => setInput(e)}
            />
            <Text
              style={styles.add}
              onPress={() => {
                setInput('');
              }}>
              Add
            </Text>
          </View>
          <FlatListCom data={data} renderItem={RenderItem} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default CrudCartList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  backText: {
    fontSize: heightPercentageToDP('4'),
    color: 'black',
    fontWeight: 'bold',
  },
  todoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    borderRadius: 5,
    width: widthPercentageToDP('90'),
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    backgroundColor: 'grey',
    borderWidth: 1,
    margin: 10,
    fontSize: heightPercentageToDP('2'),
    color: 'white',
    fontWeight: 'bold',
  },
  renderlistCon: {
    // padding: 10,
    backgroundColor: '#f9c2ff',
    margin: 5,
  },
  renderText: {
    fontSize: heightPercentageToDP('2'),
    color: 'black',
    fontWeight: 'bold',
  },
  delete: {
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    padding: 10,
    // width: widthPercentageToDP('50'),
    textAlign: 'center',
    color: 'red',
    fontSize: heightPercentageToDP('3'),
  },
});
