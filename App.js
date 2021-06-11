import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {persistedStore, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <View style={styles.appContainer}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor={'transparent'}
          />
          <Navigation />
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default App;
