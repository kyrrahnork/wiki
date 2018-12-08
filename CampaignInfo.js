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
import GridView from 'react-native-super-grid';


var { height, width } = Dimensions.get('window');

var jsonCourse = require("./courses");
var jsonCampaign = require("./campaigns");

// initialize the variables
var coursesNum = 0;
var studentsNum = 0;
var wordsNum = 0;
var viewsNum = 0;
var createdNum = 0;
var editsNum = 0;

export default class BackgroundImage extends React.Component {

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

  static navigationOptions = {
    //Page title and image
    title: 'Campaign Details',
    headerRight: <Image
      title= "Start"
      source={require('./assets/logo.png')}
      style={{ width: 40, height: 40, marginRight:15,}}
    />
  }

  render() {
    const {navigation} = this.props;
    const campaignId = navigation.getParam('id', '86');

    // initialize an empty json object to mimic our json file and fill it with only courses from that specific campaign
    var campaignCourses = '{"courses":[]}';
    var jsonObj = JSON.parse(campaignCourses);

    for (var i in jsonCourse.courses) {
      if (campaignId == jsonCourse.courses[i].campaignId) {
        coursesNum += 1;
        studentsNum += jsonCourse.courses[i].editors;
        wordsNum += jsonCourse.courses[i].wordsAdded;
        viewsNum += jsonCourse.courses[i].views;
        createdNum += jsonCourse.courses[i].created;
        editsNum += jsonCourse.courses[i].recentEdits;
        jsonObj['courses'].push({"id":jsonCourse.courses[i].id,"campaignId":jsonCourse.courses[i].campaignId,"title":jsonCourse.courses[i].title});
      }
    }

    for (var i in jsonCampaign.campaigns) {
      if (campaignId == jsonCampaign.campaigns[i].id) {
        var campaignName = jsonCampaign.campaigns[i].title;
        break;
      }
    }

    const resizeMode = 'center';
    const items = [
      { name: coursesNum, code: 'Courses' }, { name: studentsNum, code: 'Students' },
      { name: wordsNum, code: 'Words Added' }, { name: viewsNum, code: 'Views' },
      { name: createdNum, code: 'Created' }, { name: editsNum, code: 'Edits' },
    ];

    //reset the variables after each instance
    coursesNum = 0;
    studentsNum = 0;
    wordsNum = 0;
    viewsNum = 0;
    createdNum = 0;
    editsNum = 0;

    return (
      <View style={styles.container}>
      <Text style={styles.textLarge}>
        {campaignName}
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
          data={jsonObj.courses}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('CourseInfo', {id: item.id,})}
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
  textLarge: {
    fontSize:30,
    color: '#878CCC',
    paddingTop:10,
    textAlign:'center',
  },
});
