import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { List, ListItem, } from "react-native-elements";
import GridView from 'react-native-super-grid';


var { height, width } = Dimensions.get('window');

var jsonCampaign = require("./campaigns");

export default class BackgroundImage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: jsonCampaign,
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
    const resizeMode = 'center';
    return (
      <View style={styles.container}>
        <Text style={styles.textLarge}>
          Active Campaigns
        </Text>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, width:width, }}>
        <FlatList
          data={this.state.data.campaigns}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('CourseView', {id: item.id,})}
            >
              <ListItem
                title={item.title}
                subtitle={item.id}
                containerStyle={{ borderBottomWidth: 0, height: height/6,}}
              />

            </TouchableHighlight>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 55,
    margin: 0,
  },
  itemName: {
    flex: 2,
    fontSize: 20,
    color: '#878CCC',
    fontWeight: '300',
    margin: 0,
  },
  itemCode: {
    flex: 2,
    fontWeight: '200',
    fontSize: 12,
    color: '#000',
    margin: 0,
  },
  campaignView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLarge: {
    fontSize: 30,
    color: '#878CCC',
    paddingTop: 60,
  },
});
