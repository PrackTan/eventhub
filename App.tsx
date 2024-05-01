import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/Screen';
import AuthNavigator from './src/Navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  const [isShowPlash, setIsShowPlash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowPlash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return isShowPlash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
