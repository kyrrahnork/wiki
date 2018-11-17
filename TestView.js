import React from 'react';
import { StyleSheet, Text, Dimensions, View, } from 'react-native';

console.disableYellowBox = true;

var {height, width} = Dimensions.get('window');

export default class Start extends React.Component {
    state = {
      userType: 'Instructor'
    }
  
  static navigationOptions = {
      // headerTitle instead of title
      // headerTitle: <LogoTitle />,
      header: null,
  }
  
  render() {
    return (
      <View style={styles.container}>
  
        <Text style={styles.textLarge}>
            Welcome!
        </Text>
        <Text style={styles.textSmall}>
            Your click worked!!!.
        </Text>  
      </View>
    );
  }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLarge: {
        fontSize:40,
        color: '#878CCC',
        padding:10,
    },
    textSmall: {
        fontSize:16,
        color:'#000',
        padding:5,
    }
  });