import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Auth from './screens/Auth';
// import Profile from './screens/Profile';
// import Disciplines from './screens/Disciplines';
// import Groups from './screens/Groups';
// import Queues from './screens/Queues';
// import Queue from './screens/Queue';
import { disciplinesReducer } from './reducers/disciplines'
// import DisciplineAdd from './screens/DisciplineAdd';
import { groupsReducer } from './reducers/groups';
// import GroupAdd from './screens/GroupAdd';
import { queuesReducer } from './reducers/queues';
// import AddQueue from './screens/AddQueue';
import { usersReducer } from './reducers/users';
import MainNavigator from './navigation/MainNavigator';


// const Stack = createNativeStackNavigator();


const rootReducer = combineReducers({
  disciplines: disciplinesReducer,
  groups: groupsReducer,
  queues: queuesReducer,
  users: usersReducer
});

const store = createStore(rootReducer);

export default function App() {
  // const [isAuth, setAuth] = useState(false)

  // const userId = useSelector(state => state.users)
  // console.log(userId)

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
        <MainNavigator />
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
