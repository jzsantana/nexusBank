import {View, Text, Dimensions, TextInput, Alert, TouchableOpacity} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { useAuth } from '../Contexts/auth';
import nexusAPI from '../../services/api';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Loan({navigation}){
    const { authToken } = useAuth()
    const [ valor, setValor ] = useState("")
    const [ salario, setSalario ] = useState("")
    const [ parcelas, setParcelas ] = useState()
    const parcela = parseInt(parcelas)
    
    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    const loanRequest = async () => {
        try{
            if(authToken){
            console.log(authToken)
            nexusAPI.defaults.headers.common.Authorization = `Token ${authToken}`;
            const clientResponse = await nexusAPI.get('auth/users/me/');
            const clientId = clientResponse.data.id;
            
            const accountResponse = await nexusAPI.get(`api/v1/account/${clientId}`);
            const accountId = accountResponse.data.id;
            console.log(accountId)

            const requestResponse = await nexusAPI.post(`api/v1/loan/`, {
                valor_solicitado: valor,
                parcelas: parcela,
                salario: salario,
                id_cliente: accountId
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
                        <Text style={{color: '#fff', fontFamily:'Archivo-Bold', fontSize: 15}}>Deseja solicitar um emprestimo?</Text>
                    </View>

                    <View style={styles.profilePictureContainer}>
                    
                        
                        <View style={{display: 'flex', flexDirection: 'column',
                                    width: '100%',gap: 10}}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Valor</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite o valor requerido"
                                keyboardType="numeric"
                                value={valor}
                                onChangeText={(e) => setValor(e)}
                            ></TextInput>
                        </View>

                        <View style={{display: 'flex', flexDirection: 'column',
                                    width: '100%',gap: 10}}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Parcelas</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite a quantidade de parcelas"
                                keyboardType="numeric"
                                value={parcelas}
                                onChangeText={(e) => setParcelas(e)}
                                
                            ></TextInput>
                        </View>

                        <View style={{display: 'flex', flexDirection: 'column',
                                    width: '100%',gap: 10}}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Informe seu salário</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Informe seu salário"
                                keyboardType="numeric"
                                value={salario}
                                onChangeText={(e) => setSalario(e)}
                            ></TextInput>
                        </View>
                        <TouchableOpacity 
                            style={styles.buttonProfilePicture} 
                            onPress={loanRequest}
                            >
                                <Text style={{fontWeight: 500, fontFamily: 'Archivo-Bold'}}>Solicitar</Text>
                        </TouchableOpacity>

                        
                    </View>
                    
                    
            </View>
        </View>       
    )
}
