
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import SellNav from "./containers/SellNav"
import BuyNav from "./containers/BuyNav"
import ChooseScreen from "./containers/choose_section/chooseScreen"


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
  SellNav: {
    screen: SellNav,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  BuyNav: {
    screen: BuyNav,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  }
});


export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
