import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import GridView from 'react-native-super-grid';
import CampaignView from './CampaignView';
import FlatListDemo from './FlatListDemo';

var {height, width} = Dimensions.get('window');

var jsonCourse = require("./courses");
var jsonCampaign = require("./campaigns");

var campaignId = jsonCampaign.campaigns[0].id;

var coursesNum = 0;
var studentsNum = 0;
var wordsNum = 0;
var viewsNum = 0;
var createdNum = 0;
var editsNum = 0;

for(var i in jsonCourse.courses){
  if (campaignId == jsonCourse.courses[i].campaignId){
    coursesNum += 1;
    studentsNum += jsonCourse.courses[i].editors;
    wordsNum += jsonCourse.courses[i].wordsAdded;
    viewsNum += jsonCourse.courses[i].views;
    createdNum += jsonCourse.courses[i].created;
    editsNum += jsonCourse.courses[i].recentEdits;
  }
}

export default class BackgroundImage extends Component{
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
          Active Campaigns
        </Text>
        {/* <GridView
            items={items}
            style={styles.gridView}
            renderItem={item => (
            <View style={[styles.itemContainer,]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
            </View>
            )}
        /> */}
        <FlatListDemo />
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
      paddingTop: 0,
      flex: 5,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
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
      paddingTop:60,
    },
  });
