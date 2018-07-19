
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
  subPart:{
    height:100,
    padding:20,
  },
  textPrimary:{
    fontSize:30,
  	color: '#0984e3',
  },
  input: {
    marginTop: 4,
  },
  overlay: {
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(0,0,0,0.5)'
   },
   uploadAvatar:{
     width:200,
     height:200,
     padding:20,
   },
});

export default styles
