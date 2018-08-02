
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import styles from './styles';
import TitleBar from './../../components/titlebar/TitleBar';
import CustomButton from './../../components/customButton/CustomButton';

export default class Home_buyer extends Component {
  constructor(props){
        super(props);
        this.toggleDraw = this.props.navigation.toggleDrawer.bind(this);
        this.t_bar1={
          title:"Awesome App",
          action:this.toggleDraw
        };
        this.createButton={
            title:"Bid on Ads",
            img:require('./../../assets/img/add_new.png'),
            action:this.addBid.bind(this),
            Buttoncss:{backgroundColor: '#dfe6e9'}
        };
        this.createButton2={
            title:"Show current bids",
            img:require('./../../assets/img/right-arrow.png'),
            action:this.showBid.bind(this),
            Buttoncss:{backgroundColor: '#dfe6e9'}
        };
    }
  addBid(){
    this.props.navigation.navigate("AddBid");
  }
  showBid(){
    this.props.navigation.navigate("ShowBid");
  }

  render() {
    return (
      <View style={styles.maincontainer}>
      <TitleBar isMedia={false} t_bar={this.t_bar1}/>
            <View style={styles.subcontainer}>
              <ScrollView>
                <View style={styles.subPart}>
                    <CustomButton cbutton={this.createButton}/>
                </View>
                <View style={styles.subPart}>
                </View>
                <View style={styles.subPart}>
                  <CustomButton cbutton={this.createButton2}/>
                </View>
              </ScrollView>
            </View>
      </View>
    );
  }
}
