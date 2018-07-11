
import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from './../styles';
import TitleBar from './../components/titlebar/TitleBar';

export default class MyNotificationsScreen extends React.Component {
  constructor(props){
    super(props);
    this.toggleDraw = this.props.navigation.toggleDrawer.bind(this);
    this.t_bar2={
      title:"Notifications",
      action:this.toggleDraw
    };

  }

  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../components/img/right-arrow.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.maincontainer}>
        <TitleBar isMedia={false} t_bar={this.t_bar2}/>
            <View style={styles.subcontainer}>
                <Text>
                Notifications will appear here!
                </Text>
            </View>
      </View>
    );
  }
}