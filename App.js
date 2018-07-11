
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
import ChooseScreen from "./containers/choose_section/chooseScreen"
import CreateAd from "./containers/createAd/createAd"

class Hidden extends Component {
  render() {
    return null;
  }
}

const MyApp = createDrawerNavigator({
  ChooseScreen:{
    screen:ChooseScreen,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Home: {
    screen: Home_seller,
  },
  Profile: {
    screen: DetailsScreen,
  },
  Notifications: {
    screen: NotifScreen,
  },
  CreateNewAd: {
    screen: CreateAd,
    navigationOptions: {
      drawerLabel: "Create New Advert"
    }
  },
});


export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
