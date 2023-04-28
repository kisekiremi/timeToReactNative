import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// @ts-ignore
export default ({ name, page }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={name} component={page}></Stack.Screen>
    </Stack.Navigator>
  )
}
