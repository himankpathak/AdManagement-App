
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

export default class Home_seller extends Component {
  constructor(props) {
        super(props);
        this.toggleDraw = this.props.navigation.toggleDrawer.bind(this);
        this.t_bar1={
          title:"Awesome App",
          action:this.toggleDraw
        };
        this.createButton={
            title:"Create New Ad",
            img:require('./../../assets/img/add_new.png'),
            action:this.addNewAd.bind(this),
            Buttoncss:{backgroundColor: '#dfe6e9'}
        };
        this.createButton2={
            title:"Show Database",
            img:require('./../../assets/img/right-arrow.png'),
            action:this.showdb.bind(this),
            Buttoncss:{backgroundColor: '#dfe6e9'}
        };
    }
  showdb(){
      this.props.navigation.navigate("ShowDB");
    }
  addNewAd(){
    this.props.navigation.navigate("CreateNewAd");
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
                  <Text style={styles.textPrimary}>No advertisement created yet!</Text>
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
