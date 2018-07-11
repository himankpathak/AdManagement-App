
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#050',
  },
  topacity: {
    flex: 1,
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row',
    backgroundColor: '#955',
  },
  imgcontainer: {
        flex:2,
        flexDirection:'row',
        backgroundColor: '#F5FCFF',
  },
  textcontainer: {
        flex:8,
        flexDirection:'row',
        backgroundColor: '#05FCEF',
  },
  imgSize: {
    width: 30,
    height: 30,
  },
  displayText: {
    fontSize:30,
    color:'#2c3e50',
  },
});

export default styles
