import React, { Component } from "react";
import { View, Text, FlatList, TouchableHighlight, Dimensions } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

var {height, width} = Dimensions.get('window');

var jsonCampaign = require("./campaigns");

class FlatListDemo extends Component {
  constructor(props) {
     super(props);

    this.state = {
      data:jsonCampaign,
    }
  } 


  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: "0%"
        }}
      />
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, width:width, }}>
        <FlatList
          data={this.state.data.campaigns}
          renderItem={({ item }) => (     
            <ListItem
              title={item.title}
              subtitle={item.id}
              containerStyle={{ borderBottomWidth: 0, height: height/6,}}
              
            />
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </List>
    );
  }
}

export default FlatListDemo;