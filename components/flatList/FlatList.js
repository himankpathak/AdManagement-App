
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';

import styles from './fl_styles';
import {createDrawerNavigator } from 'react-navigation';

class MyFlatList extends Component {
  constructor(props) {
    super(props)
 }

 renderItem = ({item}) =>{
   var sourceImg = { uri: 'data:image/jpeg;base64,' + item.adImage };
   return(
     <TouchableOpacity onPress={item.mainFunc?() => item.mainFunc(item.keyNo):null}>
       <View style={styles.subItem1}>
        <Image source={sourceImg} style={styles.uploadAvatar}/>
        <View style={styles.subItem2}>
         <Text style={styles.textSecond}>{item.dateCreated} &gt;&gt;</Text>
         <Text style={styles.textSecond}>{item.adName} - {item.description}</Text>
         <Text style={styles.textSecond}>Current Bid: {item.bidAmt}</Text>
         </View>
       </View>
      </TouchableOpacity>
   );
 }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.fl}
          renderItem={this.renderItem}
          keyExtractor={(item,index) => index.toString()}
        />
      </View>

    );
  }
}

export default MyFlatList
