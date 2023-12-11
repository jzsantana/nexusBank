import {View, Text, Dimensions, Pressable, TextInput, Alert} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';
import { useState } from 'react';
import nexusAPI from '../../services/api';
import { useAuth } from '../Contexts/auth';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Transaction({navigation}){

    const [show, setShow] = useState(true)

    const { authToken, login } = useAuth();
    const [valor, setValor] = useState('')
    const [receiver, setReceiver] = useState('')
    const type_trans = 'TRANSFERENCIA'
    // const rec = parseInt(receiver)

    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    const handleTransfer = async () => {
        try{
            if(authToken){
            console.log(authToken)
            nexusAPI.defaults.headers.common.Authorization = `Token ${authToken}`;
            const clientResponse = await nexusAPI.get('auth/users/me/');
            const clientId = clientResponse.data.id;
            
            const accountResponse = await nexusAPI.get(`api/v1/account/${clientId}`);
            const accountId = accountResponse.data.id;
            console.log(accountId)

            const requestResponse = await nexusAPI.post(`api/v1/transaction/`, {
                id_cliente: accountId,
                valor: valor,
                transaction_type: type_trans,
                conta_receiver: receiver
              }, {
                headers: {
                  'Authorization': `Token ${authToken}`,
                  'Content-Type': 'application/json'
                }
              });
              Alert.alert(requestResponse.data)
            }
            
        }catch (error) {
            console.error('Erro ao obter dados do usuário:', error.response ? error.response.data : error.message);
        }
      };

    return(
        <View style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]}>
            <View style={styles.cardContainer}>
               <View style={{width: '90%', height: '40%', display: 'flex', justifyContent: 'center', gap: 10}}>
                <Text style={{color: '#fff'}}>Qual valor a ser tranferido?</Text>
                <TextInput 
                    style={styles.input} 
                    keyboardType='numeric' 
                    value={valor}
                    onChangeText={(e) => setValor(e)}
                    >

                </TextInput>
               
                <Text style={{color: '#fff'}}>Para quem você deseja transferir?</Text>
                <TextInput 
                    style={styles.input} 
                    keyboardType='numeric' 
                    value={receiver}
                    onChangeText={(e) => setReceiver(e)}
                >

                </TextInput>
               </View>

                <View style={{width: '90%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Pressable 
                        style={styles.buttonTransaction}
                        onPress={handleTransfer}
                    >
                            <Text style={{fontWeight: 500, fontFamily: 'Archivo-Bold'}}>Confirmar</Text>
                    </Pressable>
                </View>
                    
            </View>

        </View>       
    )
}
