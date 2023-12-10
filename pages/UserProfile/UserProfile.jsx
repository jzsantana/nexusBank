import {View, Text, Dimensions, Pressable} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import { useAuth } from '../Contexts/auth';
import nexusAPI from '../../services/api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UserProfile({navigation}){
    
    const [userName, setUserName] = useState('');
    const [ numConta, setNumConta ] = useState('')
    const { authToken } = useAuth();

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
              setNumConta(accountResponse.data.account_number)
              
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
            <View style={styles.cardContainer}>
                <View style={styles.profilePictureContainer}>
                    <View style={styles.profilePicture}>
                    </View>

                    <Pressable 
                        style={styles.buttonProfilePicture}
                    >
                            <Text style={{fontWeight: 500, fontFamily: 'Archivo-Bold'}}>Trocar foto de perfil</Text>
                    </Pressable>
                </View>

                <View style={styles.containerInfos}>
                    <Text style={{color: 'white', fontSize: 15}}>{userName}</Text>
                    <Text style={{color: 'white', fontSize: 15}}>Conta: {numConta} </Text>
                </View>

            </View>

        </View>       
    )
}
