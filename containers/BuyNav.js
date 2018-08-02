
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import { createDrawerNavigator , createStackNavigator } from 'react-navigation';

import DetailsScreen from "./DetailsScreen"
import NotifScreen from "./Notif"
import HomeBuyer from "./home_buyer/Home_buyer"
import AddBid from "./addBid/AddBid"
import ShowBid from "./showBid/showBid"
import SellNav from "./SellNav"
import ModalBid from "./modalBid/modalBid"

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
  ShowBid: {
    screen: ShowBid,
  },
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: BuyApp,
    },
    MyModal: {
      screen: ModalBid,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class BuyNav extends Component {
  render() {
    return <RootStack />;
  }
}
