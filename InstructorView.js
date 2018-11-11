import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import GridView from 'react-native-super-grid';
import CampaignView from './CampaignView';

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
      paddingTop: 10,
      flex: 5,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginBottom: 0,
    },
    itemContainer: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 8,
      height: 85,
    },
    itemName: {
      flex: 3,
      fontSize: 30,
      color: '#878CCC',
      fontWeight: '300',
    },
    itemCode: {
      flex: 3,
      fontWeight: '200',
      fontSize: 16,
      color: '#000',
    },
    campaignView:{
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
