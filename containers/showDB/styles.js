
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
  textPrimary:{
    fontSize:30,
  	color: '#0984e3',
  },
  uploadAvatar:{
    width:200,
    height:200,
    padding:20,
    paddingBottom:50,
  },
});

export default styles
