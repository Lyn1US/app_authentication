import React, {useEffect} from 'react';
import {View, Text, Button ,SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

//import auth from '../firebase.js';
import Style from '../Style.js';
import gmail from './gmail_icon.png';

WebBrowser.maybeCompleteAuthSession();


const CadScreen = ({navigation}) => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '52062048271-rmbk7j4b99g8je7bjpns8u7ltaloec88.apps.googleusercontent.com',
        iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: '52062048271-78nm36kj1jutb8sq9lab4ht2d9uq48bo.apps.googleusercontent.com',
      });

      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          navigation.navigate('Home')
        }
      }, [response]);



   return(
       <SafeAreaView style={Style.backgroundContainer}>

        <View style={Style.container}>
               
            <Text style={Style.titleText} > APP AUTHENTICATION </Text>

            <View style={Style.inputContainer}>
                <Text style={Style.inputLabel} >Email: </Text>
                <TextInput style={Style.input} />
            </View>

            <View style={Style.inputContainer}>
                <Text style={Style.inputLabel} >Senha: </Text>
                <TextInput secureTextEntry={true} style={Style.input} />
            </View>

            <TouchableOpacity 
                disabled={!request}
                onPress={() => {
                    promptAsync();
                }}
                style={Style.gmailButton}>
                <Image style={Style.image} source={gmail} />
            </TouchableOpacity>

           

            <TouchableOpacity style={Style.loginButton}>
                <Text style={Style.loginButtonTxt} >Login</Text>
            </TouchableOpacity>
            
        </View>

       </SafeAreaView>
   )

   /**
    * 
    * 
            <TouchableOpacity style={Style.gmailButton}>
                <Image style={Style.image} source={gmail} />
            </TouchableOpacity>
    */

}

export default CadScreen;