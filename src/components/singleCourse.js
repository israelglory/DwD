import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';
import { primaryColor } from '../constants/colors';
import {photo,design, star,clock } from '../constants/images';

const SingleCourse = ({courseTitle, courseImg, courseRating, courseTime, }) => {
    return (
        <>
            <View style={styles.sectionContainer}>

            {/* Course Image */}
            <Image source={courseImg}  style = {styles.courseImg}/>

            {/* Course Tittle, Time and Star */}
            <View style={styles.course}>

                {/* Course Tittle */}
                <Text style = {styles.courseTitle}>{courseTitle}</Text>

                {/* Course Time and Star Section*/}
                <View style={styles.courseDescSection}>
                {/* Course Star */}
                    <View style={{paddingRight:10, ...styles.courseDesc}}>
                        <Image source={star}  style = {styles.icon}/>
                        <Text style = {styles.courseDescText}>{courseRating}</Text>
                    </View>
                    {/* Course Time  */}
                    <View style={styles.courseDesc}>
                        <Image source={clock}  style = {styles.icon}/>
                        <Text style = {styles.courseDescText}>{courseTime}</Text>
                    </View>

                </View>

            </View>
                
        </View>
        </>
        
    );  
}

const styles = StyleSheet.create({
    sectionContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    course:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 26,
    },

    courseImg: {
        width: 68,
        height: 68,
        resizeMode: 'contain',
    },
    courseTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    courseDescSection: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
    },
    courseDesc: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    courseDescText: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'grey',
        paddingLeft: 5,
    },


});

export default SingleCourse;