import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import H0 from './components/UI/H0';
import L1 from './components/UI/L1';
import H1 from './components/UI/H1';
import H2 from './components/UI/H2';
import L2 from './components/UI/L2';
import L3 from './components/UI/L3';

export default function App() {

  const [loaded] = useFonts({
    GilroyBold: require('./assets/fonts/Gilroy-Bold.ttf'),
    GilroyExtrabold: require('./assets/fonts/Gilroy-Extrabold.ttf'),
    GilroyLight: require('./assets/fonts/Gilroy-Light.ttf'),
    IBMPlexSans: require('./assets/fonts/IBMPlexSans.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontFamily: 'GilroyBold', fontSize: 30}}>Open up App.js to start working on your app! HELLO</Text> */}
      <H0>TEXXTa</H0>
      <H1>TEXXTa</H1>
      <H2>TEXXTa</H2>
      <L1>TEXXTa</L1>
      <L2>TEXXTa</L2>
      <L3>TEXXTa</L3>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
