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

var jsonCourse = require("./courses");
var jsonCampaign = require("./campaigns");

var campaignId = jsonCampaign.campaigns[0].id;
var coursesNum = 0;
var studentsNum = 0;
var wordsNum = 0;
var viewsNum = 0;
var createdNum = 0;
var editsNum = 0;

for (var i in jsonCourse.courses) {
  if (campaignId == jsonCourse.courses[i].campaignId) {
    coursesNum += 1;
    studentsNum += jsonCourse.courses[i].editors;
    wordsNum += jsonCourse.courses[i].wordsAdded;
    viewsNum += jsonCourse.courses[i].views;
    createdNum += jsonCourse.courses[i].created;
    editsNum += jsonCourse.courses[i].recentEdits;
  }
}

export default class BackgroundImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: jsonCourse,
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
    const items = [
      { name: coursesNum, code: 'Courses' }, { name: studentsNum, code: 'Students' },
      { name: wordsNum, code: 'Words Added' }, { name: viewsNum, code: 'Views' },
      { name: createdNum, code: 'Created' }, { name: editsNum, code: 'Edits' },
    ];
    return (
      <View style={styles.container}>
      <Text style={styles.textLarge}>
        Campaign Statistics
      </Text>
      <GridView
          items={items}
          style={styles.gridView}
          renderItem={item => (
          <View style={[styles.itemContainer,]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
          </View>
          )}
        />
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, width:width, flex:2,}}>
        <FlatList
          data={this.state.data.courses}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('TestView')}
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
  gridView: {
    paddingTop: 25,
    flex: 3,
    marginBottom: 0,
  },
  // listView:{
  //   borderTopWidth: 0,
  //   borderBottomWidth: 0,
  //   width:width,
  // },
  // listItem:{
  //   flex: 3,
  //   width:width,
  //   height: height/6,
  //   borderBottomWidth: 0,
  // },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 55,
    margin:0,
  },
  itemName: {
    flex: 2,
    fontSize: 20,
    color: '#878CCC',
    fontWeight: '300',
    margin:0,
  },
  itemCode: {
    flex: 2,
    fontWeight: '200',
    fontSize: 12,
    color: '#000',
    margin:0,
  },
  campaignView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLarge: {
    fontSize:30,
    color: '#878CCC',
    paddingTop:10,
  },
});
