import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './screens/Auth';
import Tutorial from './screens/Tutorial';
import Profile from './screens/Profile';
import Disciplines from './screens/Disciplines';
import Groups from './screens/Groups';
import Queues from './screens/Queues';
import Queue from './screens/Queue';
import { disciplinesReducer } from './reducers/disciplines'
import DisciplineAdd from './screens/DisciplineAdd';


const Stack = createNativeStackNavigator();


const rootReducer = combineReducers({
  disciplines: disciplinesReducer
});

const store = createStore(rootReducer);

export default function App() {
  const [isAuth, setAuth] = useState(false)

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
  
  if (!isAuth) {
    <Auth />
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Profile /> */}
        {/* < Tutorial /> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Profile} 
            />
            <Stack.Screen 
              name="Disciplines" 
              component={Disciplines} 
              options={{
                title: 'Дисциплины'
              }}
            />
            <Stack.Screen name="AddDiscipline" component={DisciplineAdd} />
            <Stack.Screen name="Groups" component={Groups} />
            <Stack.Screen name="Queues" component={Queues} />
            <Stack.Screen name="Queue" component={Queue} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
