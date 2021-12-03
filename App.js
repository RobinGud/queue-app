import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './screens/Auth';
import Profile from './screens/Profile';
import Disciplines from './screens/Disciplines';
import Groups from './screens/Groups';
import Queues from './screens/Queues';
import Queue from './screens/Queue';
import { disciplinesReducer } from './reducers/disciplines'
import DisciplineAdd from './screens/DisciplineAdd';
import { groupsReducer } from './reducers/groups';
import GroupAdd from './screens/GroupAdd';
import { queuesReducer } from './reducers/queues';
import AddQueue from './screens/AddQueue';


const Stack = createNativeStackNavigator();


const rootReducer = combineReducers({
  disciplines: disciplinesReducer,
  groups: groupsReducer,
  queues: queuesReducer
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

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            {!isAuth ?
            <Stack.Screen 
              name="Auth" 
              options={{headerShown: false}}
            >
              { (props) => <Auth {...props} setAuth={setAuth} />}
            </Stack.Screen>
            :
            <>
            <Stack.Screen 
              name="Home" 
            >
              { (props) => <Profile {...props} setAuth={setAuth}/>}
            </Stack.Screen>
            <Stack.Screen 
              name="Disciplines" 
              component={Disciplines} 
              options={{
                title: 'Дисциплины'
              }}
            />
            <Stack.Screen name="AddDiscipline" component={DisciplineAdd} />
            <Stack.Screen name="AddGroup" component={GroupAdd} />
            <Stack.Screen name="Groups" component={Groups} />
            <Stack.Screen name="Queues" component={Queues} />
            <Stack.Screen name="AddQueue" component={AddQueue} />
            <Stack.Screen name="Queue" component={Queue} />
            </>
            }
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
