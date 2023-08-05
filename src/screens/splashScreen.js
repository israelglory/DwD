import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { logo } from '../constants/images';
import { primaryColor } from '../constants/colors';


const  SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          console.log('This will run after 2 seconds!')
          navigation.navigate('Intro');
        }, 2000);
    
        // Clear the timeout when the component unmounts to avoid potential issues
        return () => clearTimeout(timeout);
      }, [navigation]);
    return (
          <View style = {styles.sectionContainer}>
            <Image source={logo} style={styles.image} />
          </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: primaryColor,
        flex: 1,
       justifyContent: "center",
    },
    image: {
      alignSelf: "center",
      width: "20%",
      height: "20%",
      resizeMode: 'contain',
      },
  });
  
  export default SplashScreen;
  