
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

import styles from './cb_styles';

class CustomButton extends Component {
  constructor(props) {
    super(props)
 }

  render() {
    return (
      <View style={styles.maincontainer}>
      <TouchableOpacity style={styles.topacity}>
          <View style={styles.imgcontainer}>
            <Image style={styles.imgSize} source={require('./../img/menu-icon.png')}/>
          </View>
          <View style={styles.textcontainer} >
            <Text style={styles.displayText}>
              {this.props.cbutton.title}
            </Text>
          </View>
      </TouchableOpacity>
      </View>
    );
  }
}

export default CustomButton
