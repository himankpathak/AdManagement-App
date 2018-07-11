
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
      <TouchableOpacity style={[styles.buttonStyle, this.props.cbutton.Buttoncss]} onPress={this.props.cbutton.action}>
        <View style={styles.imgcontainer}>
            <Image style={[styles.imgSize, this.props.cbutton.Imgcss]} source={this.props.cbutton.img}/>
          </View>
          <View style={styles.textcontainer}>
            <Text style={[styles.textStyle, this.props.cbutton.Textcss]}>
              {this.props.cbutton.title}
            </Text>
          </View>
      </TouchableOpacity>
    );
  }
}

export default CustomButton
