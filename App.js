import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Start from'./Start';
import CampaignView from './CampaignView';
import CourseView from './CourseView';
import Login from './Login';
import TestView from './TestView';
console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    Login: Login,
    Start: Start,
    CampaignView: CampaignView,
    CourseView: CourseView,
    TestView: TestView,
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