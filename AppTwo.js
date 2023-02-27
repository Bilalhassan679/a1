import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigations/naviagation';
import MyStore from './src/redux/MyStore';
import { Provider } from 'react-redux';

function AppTwo() {

  return (
    <>
    <Provider store={MyStore}>

        <NavigationContainer >
          <StackNavigatior />
        </NavigationContainer>
        </Provider>

    </>
  );
}

export default AppTwo;

const styles = StyleSheet.create({
  
});