
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  imgcontainer: {
        flex:3,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'
  },
  textcontainer: {
        flex:7,
        flexDirection:'row',
        alignItems:'center'
  },
  imgSize: {
    width: 30,
    height: 30,
  },
  textStyle: {
    fontSize:20,
  	color: '#2c3e50',
  	textAlign: 'center',
  },

  buttonStyle: {
    flexDirection:'row',
	  padding:10,
  	borderRadius:15,
  }
});

export default styles
