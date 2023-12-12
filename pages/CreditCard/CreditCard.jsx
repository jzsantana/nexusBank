import {View, Text, Dimensions, TextInput, Alert, TouchableOpacity} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { useAuth } from '../Contexts/auth';
import nexusAPI from '../../services/api';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CreditCard({navigation}){
    const { authToken } = useAuth()
    
    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    const creditRequest = async () => {
        try{
            if(authToken){
            console.log(authToken)
            nexusAPI.defaults.headers.common.Authorization = `Token ${authToken}`;
            const clientResponse = await nexusAPI.get('auth/users/me/');
            const clientId = clientResponse.data.id;
            
            const accountResponse = await nexusAPI.get(`api/v1/account/${clientId}`);
            const accountId = accountResponse.data.id;
            console.log(accountId)

            const requestResponse = await nexusAPI.post(`api/v1/credit/`, {
                id_cliente_conta: accountId
              }, {
                headers: {
                  'Authorization': `Token ${authToken}`,
                  'Content-Type': 'application/json'
                }
              });
              Alert.alert(requestResponse.data.message)
            }
            
        }catch (error) {
            console.error('Erro ao obter dados do usuário:', error.response ? error.response.data : error.message);
        }
    }
   
    return(
        <View style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]}>
            <View style={styles.cardContainer}>
               
                    <View style={styles.profilePicture}>
                        <Text style={{color: '#fff', fontFamily:'Archivo-Bold', fontSize: 15}}>Cartão de crédito NEXUS</Text>
                    </View>

                    <View style={styles.profilePictureContainer}>
                    
                        
                        <View style={{display: 'flex', flexDirection: 'column',
                                    width: '100%',gap: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 15}}>Você deseja solicitar um cartão de crédito Nexus?</Text>
                            
                        </View>

                        <TouchableOpacity 
                            style={styles.buttonProfilePicture} 
                            onPress={creditRequest}
                            >
                                <Text style={{fontWeight: 500, fontFamily: 'Archivo-Bold'}}>Solicitar</Text>
                        </TouchableOpacity>

                        
                    </View>
                    
                    
            </View>
        </View>       
    )
}
