import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import * as screens from '../screens/index'

const iconsMap = {
  'Home': 'md-home',
  'Agriculture': 'ios-flower',
  'Q&A': 'ios-chatboxes',
  'Live Stock': 'ios-paw',
  'My Profile': 'ios-person',
}

const TabNavigation = createBottomTabNavigator({
  Home: screens.Home,
  Agriculture: screens.Agriculture,
  "Q&A": screens.QuestionAndAnswer,
  "Live Stock": screens.LiveStock,
  "My Profile": screens.MyProfile,
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const routeName = navigation.state.routeName
      return <Ionicons name={iconsMap[routeName]} size={20} color={tintColor}/>
    }
  }),
  tabBarOptions: {
    activeTintColor: '#F7B71D',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: '#000',
    }
  }
}
)

export { TabNavigation  }
