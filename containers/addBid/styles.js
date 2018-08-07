
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
        justifyContent: 'space-around',
  },
  textPrimary:{
    fontSize:30,
  	color: '#0984e3',
  },
  overlay: {
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(0,0,0,0.5)'
   },
});

export default styles
