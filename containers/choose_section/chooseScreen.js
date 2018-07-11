
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
            title:"SELLER",
            img:require('./../../components/img/seller_icon.png'),
            action:this.switchSell,
          };
          this.cbutton2={
            title:"BUYER",
            img:require('./../../components/img/buyer_icon.png'),
            action:null,
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
          <CustomButton cbutton={this.cbutton1} />
        </View>
        <View style={styles.subcontainer}>
          <CustomButton cbutton={this.cbutton2} />
        </View>
      </View>
    );
  }
}
