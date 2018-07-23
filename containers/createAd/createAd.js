
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
import ImagePicker from 'react-native-image-picker';

import {
  Hoshi,
} from 'react-native-textinput-effects';

//var ImagePicker = require('react-native-image-picker');

  var SQLite = require('react-native-sqlite-storage');
  var db = SQLite.openDatabase({name:'test.db', createFromLocation:'~sqlitemain.db'});

export default class CreateAd extends Component {
  constructor(props) {
        super(props);
        this.state={
          year:null,
          month:null,
          day:null,
          avatarSource:null,
          adNameValue:"",
          adDValue:"",
        };
        this.t_bar1={
          title:"Create New Ad",
          imgLeft:require('./../../assets/img/left-arrow.png'),
          action:this.newBack.bind(this),
        };
        this.createButton={
            title:"Submit Ad for Review",
            img:require('./../../assets/img/submit_icon.png'),
            action:this.submit.bind(this),
            Buttoncss:{backgroundColor: '#dfe6e9'}
        };
        this.dateOpener=this.dateOpener.bind(this);
        this.mainImage=this.mainImg.bind(this);
    }
    newBack(){
      this.props.navigation.navigate("Home");
    }
    submit(){
      console.log(this.state.adNameValue);
      this.pushDB();
      // db.transaction((tx) => {
      //   tx.executeSql('DELETE FROM adList;');
      // });
    }

    async pushDB(){
      var date=this.state.day+"/"+this.state.month+"/"+this.state.year;
      db.transaction((tx) => {
        tx.executeSql('INSERT INTO adList (adName, description, dateCreated, adImage) VALUES\
        ("'+this.state.adNameValue+'", "'+this.state.adDValue+'","'+date+'","'+this.state.dataImg+'");');
      });

    }

    closeDatabase = () => {
      if (db) {
        console.log("Closing database ...");
        db.close().then((status) => {
          console.log("Database CLOSED");
        }).catch((error) => {
          this.errorCB(error);
        });
      } else {
          console.log("Database was not OPENED");
      }
    }

    mainImg(){

    var options = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
    };

    /**
    * The first arg is the options object for customization (it can also be null or omitted for default options),
    * The second arg is the callback which sends object: response (more info below in README)
    */
    ImagePicker.showImagePicker(options, (response) => {
    // console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      //let source = { uri: response.uri };

      // You can also display the image using data:
      let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source,
        dataImg: response.data
      });
    }
    });

  }

  async dateOpener(){
    {
  try {
    const {action, year, month, day} = await DatePickerAndroid.open({
      date: new Date()
    });
    this.setState({year:year,month:month+1,day:day});
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
                  onChangeText={(text) => { this.setState({adNameValue: text})}}
                />
                </View>
                <View style={styles.subPart}>
                <Hoshi label={'Description'}
                  borderColor={'#3498db'}
                  maskColor={'#F9F7F6'}
                  style={styles.input}
                  multiline = {true}
                  numberOfLines = {4}
                  onChangeText={(text) => { this.setState({adDValue: text})}}
                  />

                </View>
                <View style={styles.subPart}>
                  <Button onPress={this.dateOpener} title="Select Date"/>
                  {this.state.year==null? <Text>Selected date here!</Text>
                  : <Text>{this.state.day}/{this.state.month}/{this.state.year}</Text>}

                </View>
                <View style={styles.subImage}>
                <Button onPress={this.mainImage} title="Upload Image"/>
                  <Text>Upload Image here</Text>
                  <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
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
