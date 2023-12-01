import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from './pages/Welcome/Welcome'
import Splash from './pages/Splash/Splash'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import UserPage from './pages/UserPage/UserPage'
import UserProfile from './pages/UserProfile/UserProfile'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function MyTabs() {
  return(
    <Tab.Navigator
      initialRouteName="UserPage"
      screenOptions={{
        tabBarStyle:{
            backgroundColor: '#1d3557',
            paddingBottom: 1,
            paddingTop: 1,
            position: "absolute",
            borderTopColor: 'transparent',
            bottom: 10,
            left: 10,
            right: 10,
            elevation: 10,
            borderRadius: 10,
            height: 70,
          },
          tabBarActiveTintColor: '#f1faee',
          tabBarInactiveTintColor: '#a8dadc'
        }}
      >
        <Tab.Screen 
              name="UserPage"
              component={UserPage} 
              options={{
                  tabBarIcon: ({size, color})=> (<Feather name="user" size={size} color={color}/>)
                }}
          />
        <Tab.Screen 
              name="UserProfile"
              component={UserProfile} 
              options={{
                  tabBarIcon: ({size, color})=> (<Feather name="user" size={size} color={color}/>)
                }}
          />
      </Tab.Navigator>
  )
}

export default function Routers (){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/> */}
        <Stack.Screen name="UserPage" component={UserPage} options={{headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
