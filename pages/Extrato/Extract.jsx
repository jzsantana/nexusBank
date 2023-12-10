import {View, Text, Dimensions, Pressable} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import nexusAPI from '../../services/api';
import { useAuth } from '../Contexts/auth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Extract({navigation}){

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log('este é o token',authToken);
            if (authToken) {
               nexusAPI.defaults.headers.common.Authorization = `Token ${authToken}`;
    
              const clientResponse = await nexusAPI.get('auth/users/me/');
              const clientId = clientResponse.data.id
              setUserName(clientResponse.data.name);
    
              const accountResponse = await nexusAPI.get(`api/v1/account/${clientId}`);
              const accountId = accountResponse.data.id

              const debitResponse = await nexusAPI.get(`api/v1/debit/${accountId}`)
              setDebitNum(debitResponse.data.debit_card_number)

              const creditResponse = await nexusAPI.get(`api/v1/credit/${accountId}`)
              setCreditNum(creditResponse.data.credit_card_number)
              setUserLimite(creditResponse.data.limite)
              setActiveCredit(creditResponse.data.active)
              
              
            }
          } catch (error) {
            console.error('Erro ao obter dados do usuário:', error.response ? error.response.data : error.message);
          }
        };
    
        fetchData();
      }, [authToken]);


    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    return(
        <View style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]}>
            <View style={{width: '100%', height: '10%', alignItems: 'center'}}><Text style={{color: '#fff', fontFamily: 'Archivo-Bold', fontSize: 20}}>Meus cartões</Text></View>
            <View style={styles.cardContainer}>
                {
                    <View style={styles.cardsUser}>
                        <Text style={{fontFamily: 'Archivo-Bold'}}>{userName}</Text>                    
                        <Text style={{fontFamily: 'Archivo-Bold'}}>{debitNum}</Text>
                    </View>
                }
            </View>
        </View>       
    )
}
