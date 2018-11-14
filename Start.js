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
    headerTitle: <LogoTitle />,
}

render() {


  return (
    <View style={styles.container}>

    <Button style={styles.button}
          title="Instructor Account"
          color="#841584"
          accessibilityLabel="Instructor Account"
          onPress={()=>this.props.navigation.navigate('InstructorView')}
    />

      <Button style={styles.button}
          title="Student Account"
          color="#841584"
          accessibilityLabel="Student Account"
          onPress={()=>this.props.navigation.navigate('StudentView')}
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
}
});
