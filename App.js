import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Start from'./Start'
import CourseView from './CourseView';
import Login from './Login';
import Test from './TestView';

console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    Login: Login,
    Start: Start,
    CourseView: CourseView,
    Test: Test,
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