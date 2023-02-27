import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import AppTwo from './AppTwo';
import MyStore from './src/redux/MyStore';



function App() {
//  useEffect(()=>{
//   Orientation.lockToPortrait(); 
//  },[])
  return (

          <AppTwo  />

  );
}

export default App;