
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import DetailsScreen from "./DetailsScreen"
import NotifScreen from "./Notif"
import HomeBuyer from "./home_buyer/Home_buyer"
import AddBid from "./addBid/AddBid"
import SellNav from "./SellNav"

class Hidden extends Component {
  render() {
    return null;
  }
}

const BuyApp = createDrawerNavigator({
  Home_Buyer: {
    screen: HomeBuyer,
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
  AddBid: {
    screen: AddBid,
  },
});


export default class BuyNav extends Component {
  render() {
    return <BuyApp />;
  }
}
