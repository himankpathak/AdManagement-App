import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>
      <View style={styles.titlebar}>
            <View style={styles.topbutton} >
              <TouchableOpacity onPress={() => this.props.navigator.pop()}>
              <Image style={{width:30, height: 40,}} source={require('./menu-icon.png')}/>
              </TouchableOpacity>
          </View>
          <View style={styles.topbartext}>
            <Text style={{ fontSize:30, color:'#000'}}>
                React Native App
            </Text>
          </View>
          <View style={styles.topbutton}>
            <TouchableOpacity onPress={() => this.props.navigator.pop()}>
            <Image style={{width:30, height: 40, }} source={require('./right-arrow.png')}/>
            </TouchableOpacity>
          </View>
      </View>

            <View style={styles.container}>
                  <ScrollView style={styles.displayText}>
                    <Text style={{fontSize:36}}>{`
\u2022 data with scroll view
\u2022 data with scroll view
\u2022 data with scroll view
\u2022 data with scroll view
\u2022 data with scroll view
                  `}
                    </Text>
                  </ScrollView>
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#000',
  },

  titlebar: {
      flex:1,
      flexDirection:'row',
      backgroundColor: '#3498db',
      paddingTop:20,
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
        flex:9,
        flexDirection:'row',
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-around',
  },

  displayText: {
    paddingLeft:20,
    paddingRight:20,
  },
});
