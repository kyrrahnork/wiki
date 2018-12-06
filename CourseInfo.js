import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import GridView from 'react-native-super-grid';

console.disableYellowBox = true;

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

export default class CourseInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: jsonCourse,
    }
  }

  static navigationOptions = {
    //Page title and image
    title: 'Course Details',
    headerRight: <Image
      title= "Tests"
      source={require('./assets/logo.png')}
      style={{ width: 40, height: 40, marginRight:15,}}
    />
}

  render() {
    const {navigation} = this.props;
    const campaignId = navigation.getParam('id', '86');

    for (var i in jsonCourse.courses) {
      if (campaignId == jsonCourse.courses[i].id) {
        coursesNum += jsonCourse.courses[i].id;
        studentsNum += jsonCourse.courses[i].editors;
        wordsNum += jsonCourse.courses[i].wordsAdded;
        viewsNum += jsonCourse.courses[i].views;
        createdNum += jsonCourse.courses[i].created;
        editsNum += jsonCourse.courses[i].recentEdits;
      }
    }

    const resizeMode = 'center';
    const items = [
      { name: coursesNum, code: 'CourseId' }, { name: studentsNum, code: 'Students' },
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
        Course Statistics
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
