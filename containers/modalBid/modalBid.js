
import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  Hoshi,
} from 'react-native-textinput-effects';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name:'test.db', createFromLocation:'~sqlitemain.db'})

export default class ModalScreen extends Component {
  constructor(props){
    super(props);
    var adNo = this.props.navigation.getParam('adNo', -1);
    console.log(adNo);
    this.state={adNo:adNo, bidAmt:0};
  }

  submitBid(){
    console.log("submit entered");
    console.log(this.state.adNo);
    console.log(this.state.bidAmt);
    this.pushDB();
    // db.transaction((tx) => {
    //   tx.executeSql('DELETE FROM adList;');
    // });
    this.props.navigation.goBack();
  }

  async pushDB(){
    db.transaction((tx) => {
      console.log("inside sql");
      console.log(this.state.bidAmt);
      tx.executeSql('UPDATE bidList SET bidAmt = '+this.state.bidAmt+' WHERE adNo='+this.state.adNo+';');
    });

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center',padding:50 }}>
        <Text style={{ fontSize: 30 }}>Enter your Bid</Text>
        <Hoshi
          style={{marginTop: 4,}}
          label={'Bid Amt in Rs.'}
          maskColor={'#F9F7F6'}
          borderColor={'#3498db'}
          onChangeText={(text) => { this.setState({bidAmt: text})}}
        />
        <Button
          onPress={ this.submitBid.bind(this)}
          title="Confirm Bid"
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Cancel"
        />
      </View>
    );
  }
}
