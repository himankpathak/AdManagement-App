
import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';

import styles from './styles';
import TitleBar from './../../components/titlebar/TitleBar';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name:'test.db', createFromLocation:'~sqlitemain.db'})

export default class ShowDB extends Component {
  constructor(props){
    super(props);
    this.newBack = this.newBack.bind(this);
    this.t_bar={
      title:"Database Details",
      imgLeft:require('./../../assets/img/left-arrow.png'),
      action:this.newBack
    };
    this.state={
      adListArr:[],
    };

    db.transaction((tx) => {
    tx.executeSql('SELECT * FROM adList', [], (tx, results) => {
        var len = results.rows.length;
        if(len > 0) {
          // exists owner name John
          var row;
          var sourceImg;
          var adList=[];
          for(let i = 0; i < len; i++){
            row = results.rows.item(i);
            sourceImg = { uri: 'data:image/jpeg;base64,' + row.adImage };

            adList.push(<View key={i} style={styles.subPart}><Text style={styles.textSecond}>{row.dateCreated} &gt;&gt; {row.adName} - {row.description}</Text>
            <Image source={sourceImg} style={styles.uploadAvatar}/></View>);

          }
        this.setState({adListArr:adList});
        }
      });
  });
  }

  newBack(){
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <TitleBar isMedia={false} t_bar={this.t_bar}/>
        <View style={styles.subcontainer}>
          <Text style={styles.textPrimary}>Database Main</Text>
          {this.state.adListArr}
        </View>
      </View>
    );
  }
}
