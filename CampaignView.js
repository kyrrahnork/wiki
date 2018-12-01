import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { List, ListItem, } from "react-native-elements";

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

  static navigationOptions = {
    //Page title and image
    title: 'Campaigns',
    headerRight: <Image
      title= "Start"
      source={require('./assets/logo.png')}
      style={{ width: 40, height: 40, marginRight:15,}}
    />
}

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
  textLarge: {
    fontSize: 30,
    color: '#878CCC',
    paddingTop: 60,
  },
});
