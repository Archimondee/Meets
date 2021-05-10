import AppNavigator from 'navigations/AppNavigator';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './store';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
