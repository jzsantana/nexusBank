import React from 'react'
import {NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './pages/Welcome/Welcome'
import Splash from './pages/Splash/Splash'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import UserPage from './pages/UserPage/UserPage'
import UserProfile from './pages/UserProfile/UserProfile'
import Loan from './pages/Loan/Loan'
import Cards from './pages/Cards/Cards'
import Transaction from './pages/Transaction/Transaction'
import Pix from './pages/Pix/Pix'
import Extract from './pages/Extrato/Extract'
import CreditCard from './pages/CreditCard/CreditCard'

const Stack = createNativeStackNavigator()

export default function Rotas (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false, statusBarColor: '#111111'}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false, statusBarColor: '#111111'}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false, statusBarColor: '#92AAFF'}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false, statusBarColor: '#92aaff'}}/>
        <Stack.Screen name="UserPage" component={UserPage} options={{headerShown: false, statusBarColor: '#111111'}}/> 
        <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown: false, statusBarColor: '#111111'} }/> 
        <Stack.Screen name="Loan" component={Loan} options={{headerShown: false, statusBarColor: '#111111'} }/> 
        <Stack.Screen name="Cards" component={Cards} options={{headerShown: false, statusBarColor: '#111111'} }/> 
        <Stack.Screen name="Transaction" component={Transaction} options={{headerShown: false, statusBarColor: '#111111'} }/> 
        <Stack.Screen name="Pix" component={Pix} options={{headerShown: false, statusBarColor: '#111111'} }/> 
        <Stack.Screen name="Extract" component={Extract} options={{headerShown: false, statusBarColor: '#111111'} }/> 
        <Stack.Screen name="CreditCard" component={CreditCard} options={{headerShown: false, statusBarColor: '#111111'} }/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
