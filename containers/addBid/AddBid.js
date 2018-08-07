
import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import TitleBar from './../../components/titlebar/TitleBar';
import CustomButton from './../../components/customButton/CustomButton';
import MyFlatList from './../../components/flatList/FlatList';

import {
  Hoshi,
} from 'react-native-textinput-effects';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name:'test.db', createFromLocation:'~sqlitemain.db'});

export default class AddBid extends Component {
  constructor(props) {
        super(props);
        this.state={
          adData:[],
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

        db.transaction((tx) => {
          tx.executeSql('SELECT adName,description,adImage,dateCreated,bidAmt,adNo FROM adList LEFT JOIN bidList on bidList.adNo = adList.id;', [], (tx, results) => {
              var len = results.rows.length;
              if(len > 0) {
                var row;
                var adData=[];
                for(let i = 0; i < len; i++){
                  row = results.rows.item(i);
                  row.keyNo=i;
                  row.mainFunc=(i) => (this.moveToBid.bind(this))(i);
                  adData.push(row);
                }
              this.setState({adData:adData});
              }
            });
        });

    }
    moveToBid(i){
      this.props.navigation.navigate('MyModal',{adNo:i+1});
    }
    newBack(){
      this.props.navigation.navigate("Home_Buyer");
    }

  render() {
    return (
      <View style={styles.maincontainer}>
        <TitleBar isMedia={false} t_bar={this.t_bar1}/>
          <View style={styles.subcontainer}>
              <Text style={styles.textPrimary}>Ad Listing</Text>
              <MyFlatList fl={this.state.adData}/>
          </View>
      </View>
    );
  }
}
