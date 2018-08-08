
import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
} from 'react-native';

import styles from './styles';
import {
  Hoshi,
} from 'react-native-textinput-effects';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name:'test.db', createFromLocation:'~sqlitemain.db'})

export default class ModalScreen extends Component {
  constructor(props){
    super(props);
    var adNo = this.props.navigation.getParam('adNo', -1);
    var bidAmtPrev = this.props.navigation.getParam('bidAmt', 0);
    this.state={adNo:adNo, bidAmtPrev:bidAmtPrev, bidAmt:-1, msg:''};
  }

  submitBid(){
    if(this.state.bidAmt>this.state.bidAmtPrev){
      this.pushDB();
      this.props.navigation.goBack();
    }
    else{
      this.setState({msg:"Please enter higher amount than current bid"});
    }

    // db.transaction((tx) => {
    //   tx.executeSql('DELETE FROM adList;');
    // });

  }

  async pushDB(){
    db.transaction((tx) => {
      tx.executeSql('UPDATE bidList SET bidAmt = '+this.state.bidAmt+' WHERE adNo='+this.state.adNo+';');
    });

  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.subcontainer}>
          <Text style={styles.textPrimary}>Current Bid: {this.state.bidAmtPrev}</Text>
          <Text style={styles.textSecond}>Bid higher amount than {this.state.bidAmtPrev} to place your bid!</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text style={{ fontSize: 26,padding:10 }}>Enter your Bid</Text>
          <Hoshi
            style={{marginTop: 4,}}
            label={'Bid Amt in Rs.'}
            borderColor={'#3498db'}
            onChangeText={(text) => { this.setState({bidAmt: text})}}
          />
        </View>
        <View style={styles.butcontainer}>
          <Button
            style={styles.butstyle}
            onPress={ this.submitBid.bind(this)}
            title="Confirm Bid"
          />
          <Button
            style={styles.butstyle}
            onPress={() => this.props.navigation.goBack()}
            title="Cancel"
          />
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.errormsg}>{this.state.msg}</Text>
        </View>
      </View>
    );
  }
}
