// import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { StyleSheet, View, Image} from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function Splash({navigation}) {

    // const navigation = useNavigation()
    // criando a função que gera a splash screen
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000)
    }, [])
    
    return (
      <View  animation='fadeInUp' delay={500} style={styles.container}>
        <Animatable.View animation='fadeInUp' delay={500}>
        <Image 
            source={require('../../assets/LogoSplash.png')}/>
        </Animatable.View>
      </View>
    )
    
  }

const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: '#141414',
       justifyContent: 'center',
       alignItems: 'center',
   }
})