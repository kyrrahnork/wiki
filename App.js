import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Start from'./Start'
import InstructorView from './InstructorView';
import StudentView from './StudentView';
import Login from './Login';

console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    Login: Login,
    Start: Start,
    InstructorView: InstructorView,
    StudentView: StudentView,
  },
  {
    initialRouteName: 'Login'
  }
)

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
};