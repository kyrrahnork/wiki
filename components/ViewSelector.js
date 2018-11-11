import React from 'react';
import { Text, TouchableHighlight } from 'react-native';


export class ViewSelector extends React.Component {
  constructor(props) {
    super(props);
    this.currentView = 0;
  }
  shouldComponentUpdate(newProps) {
    return this.props.viewType !== newProps.viewType;
  }
  onPressHandler = () => {
    this.currentView = (this.currentView + 1) % 4;
    this.props.viewChange(this.currentView);
  };
  render() {
    return (
      <TouchableHighlight
        style={{
          width: 350,
          paddingTop: 20,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        containerViewStyle={{
            width:'100%',
        }}
        onPress={this.onPressHandler}>
        <Text style={{ color: 'white' }}>
          Tap to Change View Type: {this.props.viewType}
        </Text>
      </TouchableHighlight>
    );
  }
}
