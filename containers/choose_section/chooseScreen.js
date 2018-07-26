
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
          this.cbutton1={
            title:"SELLER",
            img:require('./../../assets/img/seller_icon.png'),
            action:this.switchSell.bind(this),
            Buttoncss:{backgroundColor: '#f39c12',height:200,},
            Imgcss:{width: 180,height: 180,left:25,},
            Textcss:{fontSize:40,left:40,},
          };
          this.cbutton2={
            title:"BUYER",
            img:require('./../../assets/img/buyer_icon.png'),
            action:this.switchBuy.bind(this),
            Imgcss:{width: 180,height: 180,left:25,},
            Textcss:{fontSize:40,left:40,},
          };

    }
  switchSell(){
    Alert.alert('Switching to seller mode');
    this.props.navigation.navigate("SellNav");
  }
  switchBuy(){
    Alert.alert('Switching to buyer mode');
    this.props.navigation.navigate("BuyNav");
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
