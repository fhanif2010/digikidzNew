/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { decode, encode } from 'base-64';
import { SafeAreaView } from 'react-native'

// REDUX ============

import { Provider } from 'react-redux';
import { store, persisStore } from './Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';

// Screen  =============

import Navigation from './Navigation'




// import InsertOrganitation from './Screen/Users/insertOrganitation'
import { Dark } from './Utils/';


if (!global.btoa) { global.btoa = encode }

if (!global.atob) { global.atob = decode }
console.disableYellowBox = true;



const App = () => {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persisStore}>
        <SafeAreaView
          style={{ flex: 1 }}
        >
         <Navigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>

  );
};



export default App;
