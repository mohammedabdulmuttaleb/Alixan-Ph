import React from 'react';
import { StyleSheet,
    StatusBar,
    Text,View,
    ScrollView,
    Image, TextInput,
    Button,
    Linking,
    Platform,
    FlatList,
    TouchableOpacity,
    ListView,
    WebView,
    BackAndroid,
    Navigator,
    BackHandler
} from "react-native";
import {DrawerNavigator, DrawerItems} from "react-navigation";
//import {backbutton} from "./backbutton";


export default class Main extends React.Component {





    placesubmithandler=()=>{
        alert("caution are you sure to adding")
    };
    render(){


        return(
            // <View>
            <WebView
                style={style.WebViewStyle}
                source={{uri: 'http://alipic.ml'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}  />
        );
    }
}

const style= StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        //flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',

    },
    buttoncontainer:{
        width: "30%"
    },
    input:{
        width: "60%"
    },
    text: {
        fontSize: 24,
        marginBottom: 18
    },
    listItem: {
        marginBottom: 8
    },
    listItemText: {
        textDecorationLine: 'underline'
    },
    WebViewStyle:
        {
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
            marginTop: (Platform.OS) === 'ios' ? 20 : 0
        }
});