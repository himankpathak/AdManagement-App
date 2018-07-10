
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';
import TitleBar from './../../components/titlebar/TitleBar';

export default class Home_seller extends Component {
  constructor(props) {
        super(props);
        this.toggleDraw = this.props.navigation.toggleDrawer.bind(this);
        this.t_bar1={
          title:"Awesome App",
          action:this.toggleDraw
        };
    }

  render() {
    return (
      <View style={styles.maincontainer}>
      <TitleBar isMedia={false} t_bar={this.t_bar1}/>
            <View style={styles.subcontainer}>

            </View>
      </View>
    );
  }
}
