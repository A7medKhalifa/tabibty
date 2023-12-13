import React from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { Store } from 'src/redux/store';
import { StatusBar } from 'react-native';
import RootStackScreens from 'navigation';

const App = () => {
  return (
    <Provider store={Store().store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <RootStackScreens />
        <Toast topOffset={50} />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App