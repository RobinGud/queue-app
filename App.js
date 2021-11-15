import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './components/UI/Header';
import Span from './components/UI/Span';
import Button from './components/UI/Button';
import Input from './components/UI/Input';

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

  const foo = (e) => {
    console.log(e)
  }

  return (
    <View style={styles.container}>
      <Input email onInputChange={foo} label="Login"/>
      <Header>TEXXTa</Header>
      <Header h1>TEXXTa</Header>
      <Header h2>TEXXTa</Header>
      <Span>TEXXTa</Span>
      <Span l2>TEXXTa</Span>
      <Span l3>TEXXTa</Span>
      <Button small onPress={foo}/>
      <Button disabled onPress={foo}/>
      <Button secondary onPress={foo}/>
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
