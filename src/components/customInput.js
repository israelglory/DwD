import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

import { primaryColor } from '../constants/colors';
import {search, email} from '../constants/images';

const CustomInput = ({title, hint, icon}) => {
    return (
        <View style = {{marginBottom:20}}>
            <Text style = {styles.title}>{title}</Text>
            <View style={styles.inputBox}>
                {icon != null ? <Image source={icon}  style = {styles.inputImg}/> : null}
                <TextInput placeholder={hint} placeholderTextColor="grey" style={styles.textInput} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: primaryColor,
        marginBottom: 13,
        lineHeight: 36,
    },
    inputImg: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
    },
    inputBox: {
        borderRadius: 14,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: primaryColor,
        paddingHorizontal: 20,
    },
    textInput: {
        marginLeft: 10, 
        flex: 1,
        color: "black",
        fontSize: 16,
        fontWeight: '500',
    },
});

export default CustomInput;