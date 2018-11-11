import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Start from'./Start'
import InstructorView from './InstructorView';
import StudentView from './StudentView';

console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    Start: Start,
    InstructorView: InstructorView,
    StudentView: StudentView,
  },
  {
    initialRouteName: 'Start'
  }
)

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
};