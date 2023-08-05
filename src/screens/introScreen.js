import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
} from 'react-native';
import { primaryColor, greyDot } from '../constants/colors';
import { splash1, splash2,splash3 } from '../constants/images';
import SingleIntro from '../components/singleIntro';

const IntroScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);

    const navigateNextIntro = () => {
        if (index == 0) {
            setIndex(1);
        } else if (index == 1) {
            setIndex(2);
        } else {
            navigation.navigate('Login');
        }
    }

    const onBack = () => {
        if (index == 0) {
            //navigation.navigate('Splash');
        } else if (index == 1) {
            setIndex(0);
        } else {
            setIndex(1);
        }
    }

    return (
        <View style={styles.sectionContainer}>

        <SingleIntro 
        title={ index == 0? "Welcome to DWD" : index == 1? "Choose Your Course" : "Get Certified" }
        desc={ index == 0? "Welcome as you learn a world changing skill to get a better job."  : index == 1? "Choose the course of your choice and gain industry knowledge and experience in it." : "Start learning and get certified after your training to get a lucrative job" }
        btntext={index == 0 ? "Next" : index == 1 ? "Next" : "Get Started" }
        onTap={() => {navigateNextIntro()}} 
        onBack={() => {onBack()}}
        onSkip={() => {navigation.navigate('Home')}}
        index={index} image={index == 0 ? splash1 : index == 1 ? splash2 : splash3} />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
    
    skip: {
        fontSize: 24,
        fontWeight: '400',
        color: primaryColor,
        textAlign: 'right',
        paddingRight: 30,
        paddingTop: 30,
        paddingBottom: 64,
    },
    image: {
       width: "90%",
       height: "30%",
        resizeMode: 'cover',
       padding: 0,
       margin: 0,
         alignSelf: "center",
       //backgroundColor: primaryColor,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: primaryColor,
        textAlign: 'center',
        paddingTop: 45,
        paddingBottom: 14,
    },
    desc: {
        fontSize: 18,
        fontWeight: '400',
        color: primaryColor,
        textAlign: 'center',
        paddingStart: 74,
        paddingEnd: 74,
        paddingBottom: 30,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: primaryColor,
        alignSelf: 'flex-end',
        marginEnd: 43,
        marginTop: 50,
      },
      btnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      dotRow: {
        paddingTop: 54,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        },
      dot: {
        width: 10,
        height: 10,
        borderRadius: 100,
        alignSelf: 'center',
        },
});

export default IntroScreen;