/* eslint-disable prettier/prettier */
import {Platform, StyleSheet} from 'react-native';
import {color} from './../constanst/color';

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgColor,
    paddingTop:Platform.OS ==='ios'?42:32,
    padding:20,
  },
  text:{
    fontSize:14,
    color:color.text,
  },
  row:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  section:{
    marginBottom:16,
  }
});
