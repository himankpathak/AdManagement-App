
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
      <TouchableOpacity style={styles.buttonStyle} onPress={this.props.cbutton.action}>
        <View style={styles.imgcontainer}>
            <Image style={styles.imgSize} source={this.props.cbutton.img}/>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.textStyle}>
              {this.props.cbutton.title}
            </Text>
          </View>
      </TouchableOpacity>
    );
  }
}

export default CustomButton
