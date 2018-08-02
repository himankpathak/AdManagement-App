
import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View
} from 'react-native';
import styles from './rlv_styles';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name:'test.db', createFromLocation:'~sqlitemain.db'})

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
        return ( <View {...this.props}>{this.props.children}
                <Text>Cell Id: {this._containerId}</Text></View> );
    }
}

class RecyclerView extends Component {
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
            index => {  return ViewTypes.FULL;  },
            (type, dim) => {
                switch (type) {
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
        console.log(this.state.dataProvider);
    }

    _generateArray(n) {
      db.transaction((tx) => {
      tx.executeSql('SELECT * FROM adList', [], (tx, results) => {
          var len = results.rows.length;
          if(len > 0) {

            var row;
            var sourceImg;
            var adList= new Array(len);
            for(let i = 0; i < len; i++){
              adList[i] = results.rows.item(i);

            }
            return adList
          }
        });
    });
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i;
        }
        return arr;
    }

    //Given type and data return the view component
    _rowRenderer(type, data) {

        return (  <CellContainer style={styles.recontainer}>
                        <Text>Data: {data}</Text>
                  </CellContainer>
                );
        }

  render() {
    return (
            <RecyclerListView layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />
    );
  }
}


export default RecyclerView
