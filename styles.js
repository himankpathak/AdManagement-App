import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  recontainer: {
       justifyContent: "space-around",
       alignItems: "center",
       flex: 1,
       backgroundColor: "#00a1f1"
   },
   containerGridLeft: {
       justifyContent: "space-around",
       alignItems: "center",
       flex: 1,
       backgroundColor: "#ffbb00"
   },
   containerGridRight: {
       justifyContent: "space-around",
       alignItems: "center",
       flex: 1,
       backgroundColor: "#7cbb00"
   },
  icon: {
    width: 24,
    height: 24,
  },
  titlebar: {
      flex:1,
      flexDirection:'row',
      backgroundColor: '#3498db',
  },

  topbutton:{
      flex:2,
      alignItems: 'center',
      justifyContent:'center',
    },

  topbartext:{
      flex:6,
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

  container: {
        flex:10,
        flexDirection:'row',
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-around',
  },

  displayText: {
    paddingLeft:20,
    paddingRight:20,
  },
});

export default styles
