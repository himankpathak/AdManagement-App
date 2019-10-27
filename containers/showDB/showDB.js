
import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';

import styles from './styles';
import TitleBar from './../../components/titlebar/TitleBar';
import MyFlatList from './../../components/flatList/FlatList';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name:'test.db', createFromLocation:'~sqlitemain.db'})

export default class ShowDB extends Component {
  constructor(props){
    super(props);
    this.t_bar={
      title:"Browse Adverts",
      imgLeft:require('./../../assets/img/left-arrow.png'),
      action:this.newBack.bind(this),
    };
    this.state={
      adData:[],
    };

    db.transaction((tx) => {
    tx.executeSql('SELECT adName,description,adImage,dateCreated,bidAmt FROM adList LEFT JOIN bidList on bidList.adNo = adList.id;', [], (tx, results) => {
        var len = results.rows.length;
        if(len > 0) {
          // exists owner name John
          var row;
          var adData=[];
          for(let i = 0; i < len; i++){
            row = results.rows.item(i);
            adData.push(row);
          }
        this.setState({adData:adData});
        }
      });
  });
  }

  newBack(){
    this.props.navigation.navigate("Home_Seller");
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <TitleBar isMedia={false} t_bar={this.t_bar}/>
        <View style={styles.subcontainer}>
          <Text style={styles.textPrimary}>Advertisement List</Text>
          <MyFlatList fl={this.state.adData}/>
        </View>
      </View>
    );
  }
}
