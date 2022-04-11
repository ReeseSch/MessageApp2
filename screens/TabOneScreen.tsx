import * as React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Test User 1</Text>
          <Text style={styles.text}>12:00 PM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Hello there</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'white'
  },
  container: {
    backgroundColor: 'dimgrey',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,  
    flex: 1,
    color: 'white',
    marginBottom: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    // backgroundColor: 'blue'
  },
  rightContainer: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center'
  }
})

