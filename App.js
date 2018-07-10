
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import TitleBar from './components/titlebar/TitleBar';
import RecyclerView from "./components/RecyclerListView/RecyclerView";
import { createDrawerNavigator } from 'react-navigation';

import DetailsScreen from "./containers/DetailsScreen"
import NotifScreen from "./containers/Notif"
import Home_seller from "./containers/home_seller/Home_seller"

const MyApp = createDrawerNavigator({
  Home: {
    screen: Home_seller,
  },
  Details: {
    screen: DetailsScreen,
  },
  Notifications: {
    screen: NotifScreen,
  },
});


export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
