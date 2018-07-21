
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  subcontainer: {
        flex:10,
        padding:20,
        flexDirection:'column',
        backgroundColor: '#F5FCFF',
        justifyContent: 'flex-start',
  },
  subPart:{
    height:100,
    padding:20,
  },
  textPrimary:{
    fontSize:30,
  	color: '#0984e3',
  },
  textSecond:{
    fontSize:16,
  	color: '#0782e1',
  },
  uploadAvatar:{
    width:50,
    height:50,
  },
});

export default styles
