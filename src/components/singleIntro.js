import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { primaryColor, greyDot } from '../constants/colors';
import { splash1 } from '../constants/images';

const SingleIntro = ({title, desc, btntext, onTap, index, image, onBack, onSkip }) => {
    return (
        <View style={styles.sectionContainer}>

            { index != 2 ? <TouchableOpacity onPress={() => onSkip()}><Text style={styles.skip}>Skip</Text></TouchableOpacity> : <View style={styles.skip}></View>}

            <Image source={image} style={styles.image} />

            <View style = {styles.dotRow}>
                <View style={{marginRight: 10,backgroundColor:index == 0? primaryColor : greyDot, ...styles.dot}}></View>
                <View style={{marginRight: 10,backgroundColor:index == 1? primaryColor : greyDot, ...styles.dot, }}></View>
                <View style={{backgroundColor:index == 2? primaryColor : greyDot, ...styles.dot}}></View>
            </View>

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.desc}>{desc}</Text>
            
            <View style= {styles.buttonsRow}>

                {index != 0 ?<TouchableOpacity title="Back" style = {styles.textButton} onPress={() => onBack()}>
                    <Text style={{color:primaryColor, fontWeight: 'bold', fontSize: 20}}>Back</Text>
                </TouchableOpacity> : <View></View>}


                <TouchableOpacity title="Next" style = {styles.btn} onPress={() => onTap()}>
                    <Text style={styles.btnText}>{btntext}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
       // justifyContent: "center",
      // alignContent: "center",
        topPadding: 56,
       // paddingTop: 30,
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
        height: "50%",
        resizeMode: 'contain',
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
        //backgroundColor: primaryColor,
        alignSelf: 'center',
        },
        textButton: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: primaryColor,
            },

    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
       
        marginLeft: 50,
        marginRight: 30,
    }
});

export default SingleIntro;