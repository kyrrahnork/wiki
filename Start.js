import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

console.disableYellowBox = true;

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/logo.png')}
        style={{ width: 40, height: 40 }}
      />
    );
  }
}

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
      Looks like you haven't joined a course yet.
    </Text>
    <Text style={styles.textSmall}>
      Take a look at the WikiEdu Campaigns!
    </Text>

    <Button style={styles.button}
      title="Find your Course"
      color="#878CCC"
      accessibilityLabel="Instructor Account"
      onPress={()=>this.props.navigation.navigate('CourseView')}
    />

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
button: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop:5,
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
