import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Auth from '../screens/Auth'
import Profile from '../screens/Profile'
import Disciplines from '../screens/Disciplines'
import Groups from '../screens/Groups'
import Queues from '../screens/Queues'
import Queue from '../screens/Queue'
import DisciplineAdd from '../screens/DisciplineAdd'
import GroupAdd from '../screens/GroupAdd'
import AddQueue from '../screens/AddQueue'
import EditProfile from '../screens/EditProfile';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const [isAuth, setAuth] = useState(false)
    const userId = useSelector(state => state.users.currentUserId)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!userId ?
                <Stack.Screen 
                    name="Auth" 
                    options={{headerShown: false}}
                >
                    {(props) => <Auth {...props} setAuth={setAuth} />}
                </Stack.Screen>
                :
                <>
                    <Stack.Screen name="Home" >
                        {(props) => <Profile {...props} setAuth={setAuth}/>}
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
                    <Stack.Screen name="EditProfile" component={EditProfile} />
                </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
