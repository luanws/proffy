import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        ...styles,
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? '#8257e5' : color}
            />
          )
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? '#8257e5' : color}
            />
          )
        }}
      />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  style: {
    elevation: 0,
    shadowOpacity: 0,
    height: 64,
    flexDirection: 'row',
  },
  tabStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    flex: 0,
    width: 20,
    height: 20,
  },
  labelStyle: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 13,
    marginLeft: 16,
  },
})

export default StudyTabs