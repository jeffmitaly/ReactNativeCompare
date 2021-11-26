import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  DemoScreen
} from "../../screens"

export type FirstParamList = {
  demo: undefined
}

const Stack = createStackNavigator<FirstParamList>()
export const First = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="demo" component={DemoScreen} />
    </Stack.Navigator>
  )
}
