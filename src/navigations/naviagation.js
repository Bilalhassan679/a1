

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';
import MybottomTabs from './bottomnavigation';
const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  return (
    <> 
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
        }}>
        <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
        <Stack.Screen
          name="Profile"
          component={screens.Profile}
        />  
        <Stack.Screen
          name="Home"
          component={screens.Home}
        /> 
         <Stack.Screen
        name="Category"
        component={screens.Category}
      />
         <Stack.Screen
        name="Setting"
        component={screens.Setting}
      />
         <Stack.Screen
        name="CartList"
        component={screens.CartList}
      />
         <Stack.Screen
        name="CrudCartList"
        component={screens.CrudCartList}
      />
      </Stack.Navigator>
    </>
  );
}