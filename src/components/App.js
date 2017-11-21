import React from 'react';
import { LOGO } from '../images';
import { PROFILE_PIC } from '../images';
import { HEAR_ICON } from '../images';
import { COMMENT_ICON } from '../images';
import { SEND_ICON } from '../images';
import '../data/postsData.js';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.topBar}>
          <Image source={ LOGO } style={styles.logo} />
        </View>
        {global.postsData.map(function(post, index){
             return <View style={styles.post}>
               <View style={styles.topPost}>
                 <Image source={global.postsData[index].profilePic} style={styles.profilePic} />
                 <Text style={styles.userName}>
                   {global.postsData[index].userName}
                 </Text>
               </View>
               <View style={styles.wrapPostPic}>
                 <Image source={global.postsData[index].postPic} style={styles.postPic} />
               </View>
               <View style={styles.interactions}>
                 <Image source={HEAR_ICON} style={styles.interactionsIcon}/>
                 <Image source={COMMENT_ICON} style={styles.interactionsIcon}/>
                 <Image source={SEND_ICON} style={styles.interactionsIcon}/>
               </View>
               <View style={styles.wrapLikes}>
                 <Text style={styles.likes}>
                   {global.postsData[index].likesCount} likes.
                 </Text>
               </View>
               <View style={styles.description}>
                 <Text style={styles.userName}>
                   {global.postsData[0].userName}: {global.postsData[index].description}:
                 </Text>
               </View>
             </View>  ;
            })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#FFF',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 50,
    marginTop: 2
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius:50,
  },
  userName: {
    marginTop: 10,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  post: {
    marginTop: 30
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
     aspectRatio: 1.4,
     resizeMode: 'contain',
   },
   interactions: {
     flexWrap: 'wrap',
     alignItems: 'flex-start',
     flexDirection:'row',
     marginLeft: 15,
   },
   interactionsIcon: {
     height:30,
     width:30,
     marginRight: 5

   },
   wrapLikes: {
     marginLeft:20,
     marginTop:10
   },
   likes: {
     fontWeight: 'bold'
   },
   description: {
     flexWrap: 'wrap',
     alignItems: 'flex-start',
     flexDirection:'row',
     marginLeft: 15,
   }

});


export default App;
