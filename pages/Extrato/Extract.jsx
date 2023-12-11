import {View, Text, Dimensions, Pressable, FlatList} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import nexusAPI from '../../services/api';
import { useAuth } from '../Contexts/auth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Extract({navigation}){

    const { authToken } = useAuth();
    // const [ activeCredit, setActiveCredit ] = useState('')
    // const [ date, setDate ] = useState('')
    // const [ valor, setValor ] = useState('')
    // const [ tipo, setTipo ] = useState('')
    const [transactionSenderList, setTransactionSenderList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log('este é o token',authToken);
            if (authToken) {
               nexusAPI.defaults.headers.common.Authorization = `Token ${authToken}`;
    
              const clientResponse = await nexusAPI.get('auth/users/me/');
              const clientId = clientResponse.data.id
    
              const accountResponse = await nexusAPI.get(`api/v1/account/${clientId}`);
              setTransactionSenderList(accountResponse.data.transaction_sender);
              console.log(transactionSenderList);
                // setDate(accountResponse.data.transaction_sender.timestamp)
                // setValor(accountResponse.data.transaction_sender.valor)
                // setTipo(accountResponse.data.transaction_sender.transaction_type)
              
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
            <View style={{width: '100%', height: '10%', alignItems: 'center'}}><Text style={{color: '#fff', fontFamily: 'Archivo-Bold', fontSize: 20}}>Meu extrato</Text></View>
            <View style={styles.cardContainer}>
{/*             
            {transactionSenderList.length === 0 ? (
                <Text>Nenhua transação disponível.</Text>
                ) : (
                <FlatList
                    style={{width: '100%'}}

                    data={transactionSenderList}
                    keyExtractor={(i) => i.id.toString()}
                    renderItem={({ item }) => (
                    <View style={styles.cardsUser}>
                        <Text style={{color:'#f40'}}>{item.valor}</Text>
                        <Text style={{color:'#f40'}}>{item.transaction_type}</Text>
                        <Text style={{color:'#f40'}}>{item.conta_receiver}</Text>
                        <Text style={{color:'#f40'}}>{item.timestamp}</Text>
                    </View>
                    )}
                />
                )} */}
            </View>
        </View>       
    )
}
