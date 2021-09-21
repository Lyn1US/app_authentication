import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

import Style from '../Style.js';
import calendario from './calendario.png';

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

export default HomeScreen;