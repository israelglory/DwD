import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { primaryColor } from '../constants/colors';
import { avatar, category, search, homeBanner} from '../constants/images';
import SingleCourse from "../components/singleCourse";
import { courses } from "../constants/data";
import { SearchBar } from "react-native-screens";
import SearchBox from "../components/searchBox";

const Home = () => {
    ///const courses = 

    return (
        <ScrollView  style={styles.sectionContainer}>

            <View>
            {/* Avartar with Category */}
            <View style={styles.categorySection}>
                <Image source={category}  style = {styles.categoryImg}/>
                <Image source={avatar}  style = {styles.categoryImg}/>
            </View>
            {/* Greetings and Description */}
            <Text style = {styles.titile}>Hello, Habibah</Text>
            <Text style = {styles.desc}>What do you want to learn?</Text>

            {/* Search Box */}
            <SearchBox />

            {/* Home Banner */}
            <Image source={homeBanner} style={styles.homeBanner} />

            {/* Course Section */}
            <View style={styles.courseSection}>
                <Text style={styles.titile}>Courses</Text>
                <Text style={styles.desc}>View All</Text>
            </View>

            {/* Course List */}
            {
                courses.map((course, index) => (
                    <SingleCourse key={index} courseTitle={course.courseTitle} courseImg={course.courseImg} courseRating={course.courseRating} courseTime={course.courseTime} />
                ))
            }
          
        </View>
        </ScrollView>
        
    );
}   

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    categorySection: {
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        paddingTop: 30,
       
    },
    categoryImg: { 
        width: 30,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    avatarImg: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 100,
    },
    titile: {
        fontSize: 24,
        fontWeight: '700',
        color: 'black',
        paddingTop: 14,
        paddingBottom: 16,
    },
    desc: {
        fontSize: 18,
        fontWeight: '600',
        color: 'grey',
    },

    homeBanner: {
        width: '100%', 
        height: 200, 
        resizeMode: 'contain', 
        marginTop: 38,
    },
    courseSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    
});

export default Home;