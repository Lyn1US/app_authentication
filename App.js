import * as React from 'react';
import { Button, View, SafeAreaView, Image ,Text, TouchableOpacity, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

//import auth from '../firebase.js';
import Style from './Style.js';
import gmail from './Telas/gmail_icon.png';
import calendario from './Telas/calendario.png';

import HomeScreen from './Telas/HomeScreen.js';
import CadScreen from './Telas/CadScreen.js';

/*
function CadScreen ({navigation}) {


WebBrowser.maybeCompleteAuthSession();


      const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '52062048271-rmbk7j4b99g8je7bjpns8u7ltaloec88.apps.googleusercontent.com',
        iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: '52062048271-78nm36kj1jutb8sq9lab4ht2d9uq48bo.apps.googleusercontent.com',
      });

      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          
        }
      }, [response]);

      //navigation.navigate('Home');
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

}

*/

/*

const HomeScreen = ({navigation}) => {

  const date = new Date();

  return(
     <SafeAreaView style={Style.backgroundContainer}>

      <View style={Style.container}>
             
          <Text style={Style.titleText} > APP AUTHENTICATION </Text>

          <Text style={Style.welcomeText}  >Bem vindo(a)</Text>

          <Text style={Style.welcomeText}  >{"Data atual: " + date.toLocaleString(Date.now())}</Text>

          <View style={Style.timeView}  >
              <Image style={Style.labelImage} source={calendario} />
          </View>
          
      </View>

     </SafeAreaView>
 )

}
*/

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Cadastro">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cadastro" component={CadScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}