
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

import styles from './tb_styles';
import {createDrawerNavigator } from 'react-navigation';

class TitleBar extends Component {
  constructor(props) {
    super(props)
 }

  render() {
    return (
      <View style={styles.titlebar}>
            <View style={styles.topbutton} >
              <TouchableOpacity style={styles.tofullframe} onPress={() => this.props.t_bar.action()}>
              <Image style={styles.icon} source={this.props.t_bar.imgLeft?this.props.t_bar.imgLeft:require('./../../assets/img/menu-icon.png')}/>
              </TouchableOpacity>
          </View>
          <View style={styles.topbartext}>
            <Text style={styles.displayText}>
                {this.props.t_bar.title}
            </Text>
          </View>
          <View style={styles.topbutton}>
            <TouchableOpacity style={styles.tofullframe} onPress={() => console.log("press")}>
            <Image style={styles.icon} source={this.props.t_bar.imgRight?this.props.t_bar.imgRight:require('./../../assets/img/dots.png')}/>
            </TouchableOpacity>
          </View>
      </View>

    );
  }
}

export default TitleBar
