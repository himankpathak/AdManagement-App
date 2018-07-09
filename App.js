
import React, { Component } from 'react';
import {
  Navigator,
  ScrollView,
  TouchableOpacity,
  Button,
  Image,
  Text,
  View
} from 'react-native';

import styles from './styles';
import TitleBar from './components/titlebar/TitleBar';

import { createDrawerNavigator } from 'react-navigation';

import RecyclerView from "./components/RecyclerListView/RecyclerView";

class HomeScreen extends Component {
  constructor(props) {
        super(props);
        this.toggleDraw = this.props.navigation.toggleDrawer.bind(this);
        this.t_bar1={
          title:"Awesome App",
          action:this.toggleDraw
        };
        this.t_bar2={
          title:"Notifications",
          action:this.toggleDraw
        };
    }

  render() {
    return (
      <View style={styles.maincontainer}>
      <TitleBar isMedia={false} t_bar={this.t_bar1}/>

            <View style={styles.container}>
                  <RecyclerView />
            </View>
      </View>
    );
  }
}

class DetailsScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./components/img/right-arrow.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.maincontainer}>
        <TitleBar isMedia={false} t_bar={this.t_bar2}/>
            <View style={styles.container}>
                <Text>
                Notifications will appear here!
                </Text>
            </View>
      </View>
    );
  }
}

const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
