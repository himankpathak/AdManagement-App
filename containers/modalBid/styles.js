
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
  },
  subcontainer: {
    padding:20,
    flexDirection:'column',
  },
  butcontainer: {
    padding:20,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  butstyle:{
    fontSize: 32,
  },
  textPrimary:{
    fontSize:30,
  	color: '#0984e3',
  },
  errormsg:{
    fontSize:25,
  	color: '#e74c3c',
  },
  textSecond:{
    fontSize:22,
  	color: '#0984e3',
  },
});

export default styles
