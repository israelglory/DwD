import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { primaryColor } from '../constants/colors';
import {search, logoBlack, pass, email } from '../constants/images';
import CustomInput from "../components/customInput";

const LoginScreen = ({navigation}) => {

    const goToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style = {styles.sectionContainer}>
            <Image source={logoBlack}  style = {styles.logoImg}/>
            <Text style = {styles.title}> Welcome Back </Text>
            <Text style = {styles.welcomeText}>Login to continue</Text>

            <CustomInput title="Email" hint="Enter your email" icon={email}/>
            <CustomInput title="Password" hint="Enter your password" icon={pass}/>

            <Text style = {styles.forgetPassword}>Forgot Password?</Text>
            
            <TouchableOpacity style = {styles.btn} onPress={() => goToHome()}>
                    <Text style={styles.btnText}>LOG IN</Text>
            </TouchableOpacity>

            <View style={styles.doesntHaveAccount}>
                <Text style={styles.doesntHaveAccountText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    logoImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 50,
    },
    title: {
        paddingTop: 30,
        fontSize: 28,
        fontWeight: 'bold',
        color: primaryColor,
        textAlign: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '400',
        color: primaryColor,
        textAlign: 'center',
    },
    forgetPassword: {
        color: primaryColor, 
        textAlign: 'right', 
        fontSize: 16, 
        fontWeight: '600', 
        marginBottom: 20,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: 60,
        borderRadius: 10,
        backgroundColor: primaryColor,
      },
      btnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      doesntHaveAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    signUpText: {
        fontSize: 18,
        fontWeight: '600',
        color: primaryColor,
    },
    doesntHaveAccountText: {
        fontSize: 18,
        fontWeight: '600',
        color: "grey",

    }
});

export default LoginScreen;