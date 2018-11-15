import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Start from'./Start'
import CourseView from './CourseView';
import Login from './Login';

console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    Login: Login,
    Start: Start,
    CourseView: CourseView,
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