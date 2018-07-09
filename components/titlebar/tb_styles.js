
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

  icon: {
    width: 25,
    height: 30,
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

  displayText: {
    fontSize:30,
    color:'#2f3640',
  },
  tofullframe:{
    padding:50,
  }
});

export default styles
