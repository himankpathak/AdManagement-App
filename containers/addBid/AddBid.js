
import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
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
          adListArr:[],
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

                  adList.push(<TouchableOpacity onPress={() => (this.moveToBid.bind(this))(i)} key={i} style={styles.subPart}><Text style={styles.textSecond}>{row.dateCreated} &gt;&gt; {row.adName} - {row.description}</Text>
                  <Image source={sourceImg} style={styles.uploadAvatar}/></TouchableOpacity>);

                }
              this.setState({adListArr:adList});
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
              <ScrollView>
                <Text style={styles.textPrimary}>Ad Listing</Text>
                {this.state.adListArr}
              </ScrollView>
            </View>
      </View>
    );
  }
}
