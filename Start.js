import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  FlatList,
  TouchableHighlight,
  Dimensions } from 'react-native';
import { List, ListItem, } from "react-native-elements";

console.disableYellowBox = true;

var { height, width } = Dimensions.get('window');

var jsonCourse = require("./courses");
var jsonUsers = require("./users");

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        title= "Start"
        source={require('./assets/logo.png')}
        style={{ width: 40, height: 40 }}
      />
    );
  }
}

export default class Start extends React.Component {

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
      title: 'Start',
      headerRight: <Image
        title= "Start"
        source={require('./assets/logo.png')}
        style={{ width: 40, height: 40, marginRight:30,}}
      />
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');

    var userExists = null;

    for (var i in jsonUsers.users) {
      if (name == jsonUsers.users[i].id){
        userExists = jsonUsers.users[i].id;
        break;
      }
    }

    // initialize an empty json object to mimic our json file and fill it with only courses from that specific user
    var userCourses = '{"courses":[]}';
    var userJsonObj = JSON.parse(userCourses);

    for (var i in jsonCourse.courses) {
      for (var j in jsonUsers.users){
        for (var k in jsonUsers.users[j].courses){
          if(jsonCourse.courses[i].id == jsonUsers.users[j].courses[k]){
            userJsonObj['courses'].push({"id":jsonCourse.courses[i].id,"title":jsonCourse.courses[i].title});
          }
        }
        // stop after user is found
        break;
      }
    }

    if (userExists == null){
      return (
          <View style={styles.container}>
          <Text style={styles.textLarge}>
              Welcome!
          </Text>
          <Text style={styles.textMedium}>
              {JSON.stringify(name)}
          </Text>
          <Text style={styles.textSmall}>
             Looks like you haven't joined a course yet.
          </Text>
          <Text style={styles.textSmall}>
             Take a look at the WikiEdu Campaigns!
          </Text>
          <Button style={styles.button}
             title="Find your Course"
             color="#878CCC"
             accessibilityLabel="Instructor Account"
             onPress={()=>this.props.navigation.navigate('CampaignView')}
          />
          </View>
          );
    } else {
      return (
          <View style={styles.container}>
          <Text style={styles.textLarge}>
              Welcome!
          </Text>
          <Text style={styles.textMedium}>
              {JSON.stringify(name)}
          </Text>
          <Text style={styles.textSmall}>
             Looks like you're signed up for a few courses!
          </Text>
          <Text style={styles.textSmall}>
             Take a look at other WikiEdu Campaigns!
          </Text>
          <Button style={styles.button}
             title="Find your Course"
             color="#878CCC"
             accessibilityLabel="Find your Course"
             onPress={()=>this.props.navigation.navigate('CampaignView')}
          />
          <Text style={styles.textLarge}>
            Your Courses
          </Text>
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, width:width, flex:2,}}>
          <FlatList
            data={userJsonObj.courses}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('TestView', {id: item.id,})}
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
        );
      }
    }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
button: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop:5,
},
textLarge: {
  fontSize:40,
  color: '#878CCC',
  padding:10,
},
textMedium: {
  fontSize:20,
  color: '#878CCC',
  padding:5,
},
textSmall: {
  fontSize:16,
  color:'#000',
  padding:5,
},
});
