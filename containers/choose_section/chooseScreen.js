
import React, { Component } from 'react';
import {
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Text,
  View
} from 'react-native';

import styles from './styles';
import CustomButton from './../../components/customButton/CustomButton';

export default class ChooseScreen extends React.Component {
  constructor(props){
    super(props);
          this.nav = this.props.navigation.navigate.bind(this);
          this.switchSell=this.switchSell.bind(this);
          this.cbutton1={
            title:"Awesome App",
          };

    }
  switchSell(){
    Alert.alert('Switching to seller mode');
    this.nav("Home");
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.subcontainer}>
          <Text>HEYYY</Text>
          <CustomButton cbutton={this.cbutton1} />
        </View>
        <View style={styles.subcontainer}>
          <Text>HEYYY 2</Text>
          <TouchableOpacity style={styles.topacity} onPress={this.switchSell}>
              <View style={styles.imgcontainer}>
                <Image style={styles.imgSize} source={require('./../../components/img/menu-icon.png')}/>
              </View>
              <View style={styles.textcontainer} >
                <Text style={styles.displayText}>
                  {this.cbutton1.title}
                </Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
