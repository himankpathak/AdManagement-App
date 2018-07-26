
import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
  ScrollView,
} from 'react-native';

import styles from './styles';
import TitleBar from './../../components/titlebar/TitleBar';
import CustomButton from './../../components/customButton/CustomButton';
import RecyclerView from './../../components/RecyclerListView/RecyclerView';

import {
  Hoshi,
} from 'react-native-textinput-effects';

//var ImagePicker = require('react-native-image-picker');

  var SQLite = require('react-native-sqlite-storage');
  var db = SQLite.openDatabase({name:'test.db', createFromLocation:'~sqlitemain.db'});

export default class AddBid extends Component {
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
          title:"Bid on Ads",
          imgLeft:require('./../../assets/img/left-arrow.png'),
          action:this.newBack.bind(this),
        };
        this.createButton={
            title:"Submit Ad for Review",
            img:require('./../../assets/img/submit_icon.png'),
            action:this.submit.bind(this),
            Buttoncss:{backgroundColor: '#dfe6e9'}
        };
    }
    newBack(){
      this.props.navigation.navigate("Home_Buyer");
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

  render() {
    return (
      <View style={styles.maincontainer}>
      <TitleBar isMedia={false} t_bar={this.t_bar1}/>
            <View style={styles.subcontainer}>
              <RecyclerView/>
            </View>
      </View>
    );
  }
}
