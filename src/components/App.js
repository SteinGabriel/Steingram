import React from 'react';
import { LOGO } from '../images';
import { PROFILE_PIC } from '../images';
import '../data/postsData.js';
import {View, Text, StyleSheet, Image} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.topBar}>
          <Image source={ LOGO } style={styles.logo} />
        </View>
        <View style={styles.post}>
          <View style={styles.topPost}>
            <Image source={global.postsData[0].profilePic} style={styles.profilePic} />
            <Text style={styles.userName}>
              {global.postsData[0].userName}
            </Text>
          </View>
          <View style={styles.wrapPostPic}>
            <Image source={global.postsData[0].postPic} style={styles.postPic} />
          </View>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#FFF',
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 50
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius:50,
  },
  userName: {
    marginTop: 20,
    marginLeft: 5
  },
  post: {
    marginTop: 50
  },
  topPost: {
     flexWrap: 'wrap',
     alignItems: 'flex-start',
     flexDirection:'row',
     marginLeft: 20
   },
   wrapPostPic: {
     height: 300,
     flexDirection:'row',
     marginTop:5
   },
   postPic: {
     flex: 1,
     aspectRatio: 1.5,
      resizeMode: 'contain',
   }
});


export default App;
