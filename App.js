import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Start from'./Start';
import CampaignView from './CampaignView';
import CampaignInfo from './CampaignInfo';
import Login from './Login';
import CourseInfo from './CourseInfo';
console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    Login: Login,
    Start: Start,
    CampaignView: CampaignView,
    CampaignInfo: CampaignInfo,
    CourseInfo: CourseInfo,
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
