
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

export default class CreateAd extends Component {
  constructor(props) {
        super(props);
        this.toggleDraw = this.props.navigation.toggleDrawer.bind(this);
        this.t_bar1={
          title:"Create New Ad",
          imgLeft:require('./../../assets/img/add_new.png'),
          action:this.props.navigation.goBack
        };
        this.createButton={
            title:"Submit Ad for Review",
            img:require('./../../assets/img/submit_icon.png'),
            action:null,
            Buttoncss:{backgroundColor: '#dfe6e9'}
        };
    }

  render() {
    return (
      <View style={styles.maincontainer}>
      <TitleBar isMedia={false} t_bar={this.t_bar1}/>
            <View style={styles.subcontainer}>
              <ScrollView>
                <View style={styles.subPart}>
                  console.log("Hoshi1");
                </View>
                <View style={styles.subPart}>

                </View>
                <View style={styles.subPart}>

                </View>
                <View style={styles.subPart}>

                </View>
                <View style={styles.subPart}>
                    <CustomButton cbutton={this.createButton}/>
                </View>
              </ScrollView>
            </View>
      </View>
    );
  }
}
