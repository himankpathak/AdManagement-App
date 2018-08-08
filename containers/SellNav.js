
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import DetailsScreen from "./DetailsScreen"
import NotifScreen from "./Notif"
import Home_seller from "./home_seller/Home_seller"
import ShowDB from "./showDB/showDB"
import CreateAd from "./createAd/createAd"
import BuyNav from "./BuyNav"

class Hidden extends Component {
  render() {
    return null;
  }
}

const SellApp = createDrawerNavigator({
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
  CreateNewAd: {
    screen: CreateAd,
    navigationOptions: {
      drawerLabel: "Create New Advert",
    }
  },
  ShowDB: {
    screen: ShowDB,
    navigationOptions: {
      drawerLabel: "Show Ads",
    }
  },
  BuyMode: {
    screen: BuyNav,
    navigationOptions: {
      drawerLabel: "Switch mode to Buyer",
    }
  },
});


export default class SellNav extends Component {
  render() {
    return <SellApp />;
  }
}
