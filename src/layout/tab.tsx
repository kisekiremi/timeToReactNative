import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

// HomeTab
import HomeContainer from '../pages/home'
import ActivityContainer from '../pages/activity'
import MessageContainer from '../pages/message'
import ProfileContainer from '../pages/profile'

//  Stack - OutSide
import SysInfo from '../views/sysInfo'

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTintColor: '#333',
        headerStyle: { backgroundColor: '#fafafa' },
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case '首页':
              return <Ionicons size={24} color={color} name={focused ? 'home' : 'home-outline'} />
            case '动态':
              return <AntDesign size={24} color={color} name={focused ? 'star' : 'staro'} />
            case '消息':
              return <AntDesign size={24} color={color} name={focused ? 'message1' : 'message1'} />
            case '我的':
              return <AntDesign size={24} color={color} name={focused ? 'meho' : 'meh'} />
          }
        },
        headerRight: () =>
          route.name === '消息' ? (
            <TouchableOpacity onPress={() => alert('settings !')}>
              <Ionicons name="md-settings" size={22} style={{ marginRight: 15 }} />
            </TouchableOpacity>
          ) : route.name === '动态' ? (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => alert('发动态')}>
              <Text style={{ fontSize: 16, color: '#333' }}>发动态</Text>
            </TouchableOpacity>
          ) : null
      })}
    >
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="首页" component={HomeContainer}></Tab.Screen>
      </Tab.Group>
      <Tab.Group screenOptions={{ headerShown: true }}>
        <Tab.Screen name="动态" component={ActivityContainer}></Tab.Screen>
      </Tab.Group>
      <Tab.Group screenOptions={{}}>
        <Tab.Screen name="消息" component={MessageContainer}></Tab.Screen>
      </Tab.Group>
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="我的" component={ProfileContainer}></Tab.Screen>
      </Tab.Group>
    </Tab.Navigator>
  )
}

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeTab} />
      </Stack.Group>

      <Stack.Group screenOptions={{}}>
        <Stack.Screen name="系统通知" component={SysInfo} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const App = () => {
  return <NavigationContainer>{AppStack()}</NavigationContainer>
}

export default () => {
  return <SafeAreaProvider>{App()}</SafeAreaProvider>
}