import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import GridView from 'react-native-super-grid';
import CampaignView from './CampaignView';

var {height, width} = Dimensions.get('window');

export default class BackgroundImage extends Component{
    render() {
        const resizeMode = 'center';
        const items = [
            { name: '843', code: 'Courses' }, { name: '17741', code: 'Students' },
            { name: '13M', code: 'Words Added' }, { name: '661M', code: 'Views' },
            { name: '16.6K', code: 'Created' }, { name: '3.19K', code: 'Uploads' },
          ];
    return (
    <View style={styles.container}>
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
        <CampaignView />
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
  });
