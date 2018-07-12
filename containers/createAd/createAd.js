
import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
  ScrollView,
  DatePickerAndroid,
} from 'react-native';

import styles from './styles';
import TitleBar from './../../components/titlebar/TitleBar';
import CustomButton from './../../components/customButton/CustomButton';

import {
  Hoshi,
} from 'react-native-textinput-effects';



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
        this.dateOpener=this.dateOpener.bind(this);
    }

  async dateOpener(){
    {
  try {
    const {action, year, month, day} = await DatePickerAndroid.open({
      date: new Date()
    });
    console.log(year);
  } catch ({code, message}) {
    console.warn('Cannot open date picker', message);
  }
}
  }

  render() {
    return (
      <View style={styles.maincontainer}>
      <TitleBar isMedia={false} t_bar={this.t_bar1}/>
            <View style={styles.subcontainer}>
              <ScrollView>
                <View style={styles.subPart}>
                <Hoshi
                  style={styles.input}
                  label={'Ad Name'}
                  maskColor={'#F9F7F6'}
                  borderColor={'#3498db'}
                />
                </View>
                <View style={styles.subPart}>
                <Hoshi label={'Description'}
                  borderColor={'#3498db'}
                  maskColor={'#F9F7F6'}
                  style={styles.input}
                  multiline = {true}
                  numberOfLines = {4}
                  />

                </View>
                <View style={styles.subPart}>
                  <Button onPress={this.dateOpener} title="Select Date"/>
                  <Text>Selected date here!</Text>
                </View>
                <View style={styles.subPart}>
                  <Text>Upload Image here</Text>
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
