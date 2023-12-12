import { View, Text, Dimensions, Pressable, FlatList } from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import nexusAPI from '../../services/api';
import { useAuth } from '../Contexts/auth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Extract({ navigation }) {

  const { authToken } = useAuth();
  const [transactionSenderList, setTransactionSenderList] = useState([{}]);

  const fetchData = async () => {
    try {
      console.log('este é o token', authToken);
      if (authToken) {
        nexusAPI.defaults.headers.common.Authorization = `Token ${authToken}`;

        const clientResponse = await nexusAPI.get('auth/users/me/');
        const clientId = clientResponse.data.id

        const accountResponse = await nexusAPI.get(`api/v1/account/${clientId}`);
        // const list = setTransactionSenderList(transactionSenderList)

        const listExtract = accountResponse.data.transaction_sender.map(e => ({
          valor: e.valor,
          timestamp: e.timestamp,
          transaction_type: e.transaction_type,
          conta_receiver: e.conta_receiver,
        }));

        setTransactionSenderList(listExtract);
        
        console.log(listExtract[0].conta_receiver);

      }
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [authToken]);

  const ExtractCard = ({ item }) => {
    return (
      <View style={styles.cardsUser}>
        {console.log('oiiiiiiii', item)}
        <Text style={{color:'#000', fontSize: 10, fontFamily: 'Archivo-Bold'}}>R$ {item.valor}</Text>
        <Text style={{color:'#000', fontSize: 12, fontFamily: 'Archivo-Bold'}}>{item.conta_receiver}</Text>
        <Text style={{color:'#000', fontSize: 10, fontFamily: 'Archivo-Bold'}}>{item.timestamp}</Text>
        <Text style={{color:'#000', fontSize: 10, fontFamily: 'Archivo-Bold'}}>{item.transaction_type}</Text>
      </View>
    );
  }

  const [fontsLoaded] = useFonts({
    'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
  })
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={[styles.containerPrincipal, { width: windowWidth, height: windowHeight }]}>
      <View style={{ width: '100%', height: '10%', alignItems: 'center' }}><Text style={{ color: '#fff', fontFamily: 'Archivo-Bold', fontSize: 20 }}>Meu extrato</Text></View>
      <View style={styles.cardContainer}>

        {/* {
                transactionSenderList.map((e) => {
                  <View style={{width: '100%', backgroundColor: '#c70'}}>
                      <Item valor={e.valor} transaction_type={e.transaction_type} conta_receiver={e.conta_receiver} timestamp={e.timestamp}></Item>
                  </View>
                  
                })
              } */}
        {/* {transactionSenderList. === 0 ? (
                <Text>Nenhua transação disponível.</Text>
                ) : ( */}
        <FlatList
          style={styles.flatlist}
          data={transactionSenderList}
          renderItem={(Item) =>
            <View>
              <ExtractCard item={Item.item} />
            </View>
          }

        />
        {/* )} */}
      </View>
    </View>
  )
}
