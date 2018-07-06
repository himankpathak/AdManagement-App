/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Navigator,
  ScrollView,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  Modal,
  Text,
  View
} from 'react-native';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


type Props = {};
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>
      <View style={styles.titlebar}>
            <View style={styles.topbutton} >
              <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
              <Image style={{width:30, height: 40,}} source={require('./menu-icon.png')}/>
              </TouchableOpacity>
          </View>
          <View style={styles.topbartext}>
            <Text style={{ fontSize:30, color:'#000'}}>
                React Native App
            </Text>
          </View>
          <View style={styles.topbutton}>
            <TouchableOpacity onPress={() => this.chatLogin()}>
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

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./right-arrow.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  icon: {
    width: 24,
    height: 24,
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
