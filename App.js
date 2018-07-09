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
  Dimensions,
  NativeModules,
  Modal,
  Text,
  View
} from 'react-native';

import styles from './styles';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";


type Props = {};
const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2
};
let containerCount = 0;

class CellContainer extends React.Component {
    constructor(args) {
        super(args);
        this._containerId = containerCount++;
    }
    render() {
        return <View {...this.props}>{this.props.children}<Text>Cell Id: {this._containerId}</Text></View>;
    }
}

class HomeScreen extends Component {
  constructor(args) {
        super(args);

        let { width } = Dimensions.get("window");

        //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
        //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
        let dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });

        //Create the layout provider
        //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
        //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
        //If you need data based check you can access your data provider here
        //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
        //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
        this._layoutProvider = new LayoutProvider(
            index => {
                if (index % 3 === 0) {
                    return ViewTypes.FULL;
                } else if (index % 3 === 1) {
                    return ViewTypes.HALF_LEFT;
                } else {
                    return ViewTypes.HALF_RIGHT;
                }
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.HALF_LEFT:
                        dim.width = width / 2;
                        dim.height = 160;
                        break;
                    case ViewTypes.HALF_RIGHT:
                        dim.width = width / 2;
                        dim.height = 160;
                        break;
                    case ViewTypes.FULL:
                        dim.width = width;
                        dim.height = 140;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            }
        );

        this._rowRenderer = this._rowRenderer.bind(this);

        //Since component should always render once data has changed, make data provider part of the state
        this.state = {
            dataProvider: dataProvider.cloneWithRows(this._generateArray(300))
        };
    }

    _generateArray(n) {
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i;
        }
        return arr;
    }

    //Given type and data return the view component
    _rowRenderer(type, data) {
        //You can return any view here, CellContainer has no special significance
        switch (type) {
            case ViewTypes.HALF_LEFT:
                return (
                    <CellContainer style={styles.containerGridLeft}>
                        <Text>Data: {data}</Text>
                    </CellContainer>
                );
            case ViewTypes.HALF_RIGHT:
                return (
                    <CellContainer style={styles.containerGridRight}>
                        <Text>Data: {data}</Text>
                    </CellContainer>
                );
            case ViewTypes.FULL:
                return (
                    <CellContainer style={styles.recontainer}>
                        <Text>Data: {data}</Text>
                    </CellContainer>
                );
            default:
                return null;
        }}

  render() {
    return (
      <View style={styles.maincontainer}>
      <View style={styles.titlebar}>
            <View style={styles.topbutton} >
              <TouchableOpacity style={{padding:50}} onPress={() => this.props.navigation.toggleDrawer()}>
              <Image style={{width:30, height: 30, }} source={require('./menu-icon.png')}/>
              </TouchableOpacity>
          </View>
          <View style={styles.topbartext}>
            <Text style={{ fontSize:30, color:'#2f3640'}}>
                Awesome App
            </Text>
          </View>
          <View style={styles.topbutton}>
            <TouchableOpacity style={{padding:50}} onPress={() => console.log("press")}>
            <Image style={{width:25, height: 30, }} source={require('./dots.png')}/>
            </TouchableOpacity>
          </View>
      </View>

            <View style={styles.container}>
                  <RecyclerListView layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />
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
      <View style={styles.maincontainer}>
      <View style={styles.titlebar}>
            <View style={styles.topbutton} >
              <TouchableOpacity style={{padding:50}} onPress={() => this.props.navigation.goBack()}>
              <Image style={{width:30, height: 30, }} source={require('./left-arrow.png')}/>
              </TouchableOpacity>
          </View>
          <View style={styles.topbartext}>
            <Text style={{ fontSize:30, color:'#2f3640'}}>
                Notifications
            </Text>
          </View>
          <View style={styles.topbutton}>
            <TouchableOpacity style={{padding:50}} onPress={() => console.log("press")}>
            <Image style={{width:25, height: 30, }} source={require('./dots.png')}/>
            </TouchableOpacity>
          </View>
      </View>

            <View style={styles.container}>
                <Text>
                Notifications will appear here!
                </Text>
            </View>
      </View>
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
