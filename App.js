import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

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
      <Text style={{ fontFamily: 'GilroyBold', fontSize: 30}}>Open up App.js to start working on your app! HELLO</Text>
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
