
import React from 'react';
import RootNavigator from './src/navigation/rootnavigator'
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}