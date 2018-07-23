
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
import ShowDB from "./containers/showDB/showDB"
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
  Home_Seller: {
    screen: Home_seller,
    navigationOptions: {
      drawerLabel: "Home",
    }
  },
  Profile: {
    screen: DetailsScreen,
  },
  Notifications: {
    screen: NotifScreen,
  },
  ShowDB: {
    screen: ShowDB,
  },
  CreateNewAd: {
    screen: CreateAd,
    navigationOptions: {
      drawerLabel: "Create New Advert",
    }
  },
});


export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
