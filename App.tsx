/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'text-encoding-polyfill';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Web5} from '@tbd54566975/web5';

function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      const {web5, did: aliceDid} = await Web5.connect();
      console.log(web5, aliceDid);
    })();
  }, []);

  return <SafeAreaView></SafeAreaView>;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
