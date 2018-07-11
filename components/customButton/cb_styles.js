
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
    width: 180,
    height: 180,
    left:25,
  },
  textStyle: {
    fontSize:40,
  	color: '#2c3e50',
  	textAlign: 'center',
    left:40,
  },

  buttonStyle: {
    flexDirection:'row',
	  padding:10,
    height:200,
  	backgroundColor: '#f39c12',
  	borderRadius:15
  }
});

export default styles
