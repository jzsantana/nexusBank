import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './pages/Welcome/Welcome'
import Splash from './pages/Splash/Splash'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'

const Stack = createNativeStackNavigator()

export default function Routers (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
