import { View, Image, Text, Pressable, Dimensions} from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from '../Home/Home';

import { useFonts } from 'expo-font';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// cadastrar-se
function UserPage({navigation}) {

    const [show, setShow] = useState(true)

    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    const nome = "Júlia";
    const agencia = '0001'
    const conta = '102586'

    const saldo = '1000,00';

    return (
       <View style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]} animation='fadeIn' delay={500}>
        <Animatable.View  animation='fadeIn' delay={500} >
            {/* Container com o 'carta' com o saldo e etc*/}
            <Animatable.View animation='fadeInUp' delay={200} style={styles.containerCartao}>
                <View style={styles.containerNome}><Text style={[styles.containerNomeTexto, {color: 'black', fontFamily: 'Archivo-Bold', fontSize: 20}]}>Olá, {nome}.</Text></View>
                
                
                <View style={{display:'flex', flexDirection:'row', gap: 10, alignItems:'center'}}>
                    <Text style={[styles.containerNomeTexto, {color: 'rgba(0, 0, 0, 0.4)', fontFamily: 'Archivo-Bold', fontSize: 11}]}>Agência</Text>
                    <Text style={[styles.containerNomeTexto, {color: 'black', fontFamily: 'Archivo-Bold', fontSize: 13}]}>{agencia}</Text>

                    <Text style={[styles.containerNomeTexto, {color: 'rgba(0, 0, 0, 0.4)', fontFamily: 'Archivo-Bold', fontSize: 11}]}>Conta</Text>    
                    <Text style={[styles.containerNomeTexto, {color: 'black', fontFamily: 'Archivo-Bold', fontSize: 13}]}>{conta}</Text>    
                </View>
               
                <Text style={{color:'black', fontFamily: 'Archivo-Bold', fontSize: 16}}>Meu saldo:</Text>
                <View style={styles.contentCartao}>
                    <Text style={{color:'black', fontFamily: 'Archivo-Bold', fontSize: 16}}>R$</Text>
                    {
                        show ? <Text style={{ color:'black', fontWeight:500, fontSize:16}}>{saldo}</Text> :
                        <View style={{
                            width: '60%', 
                            height: 18,
                            backgroundColor: 'rgba(217, 217, 217, 0.65)', 
                            borderRadius:5,
                        }}
                            ></View>
                    }
                    
                    <Pressable 
                        style={{
                            marginLeft: 2, 
                            width: 20, 
                            height: 20, 
                            backgroundColor: 'transparent',
                            display:'flex',
                            marginLeft: 26
                            }}
                        
                            onPress={() => setShow(!show)}
                        ><MaterialCommunityIcons name='eye-outline' size={20}/></Pressable>
                </View>
                
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={200}  style={styles.containerOptions}>
                <Pressable 
                    style={[
                        styles.optionsContainer,
                        {display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center'
                        }]}>
                    <MaterialCommunityIcons name='cash-fast' size={38} color={'#92AAFF'}/>
                    <Text style={{color: '#92AAFF', fontWeight:500, fontSize: 13}}>PIX</Text>
                </Pressable>

                <Pressable 
                    style={[
                        styles.optionsContainer,
                        {display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center'
                        }]}>
                    <MaterialCommunityIcons name='bank-transfer' size={38} color={'#92AAFF'}/>
                    <Text style={{color: '#92AAFF', fontWeight:500, fontSize: 13}}>Transferencia</Text>
                </Pressable>

                <Pressable 
                    style={[
                        styles.optionsContainer,
                        {display:'flex',
                        justifyContent:'center', 
                        alignItems:'center'
                        }]}>
                    <MaterialCommunityIcons name='file-document-multiple-outline' size={38}  color={'#92AAFF'}/>
                    <Text style={{color: '#92AAFF', fontWeight:500, fontSize: 13}}>Extrato</Text>
                </Pressable>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={200}  style={styles.containerGeneral}>
                <View style={styles.containerGeneralOptions}>
                    <Pressable 
                        style={styles.containerOpcoesMaiores}
                        onPress={() => (navigation.navigate('UserProfile'))}   
                    >
                        <MaterialCommunityIcons name='hand-extended-outline' size={32} color='#92AAFF'/>
                        <Text style={{color: '#92AAFF'}}>Emprestimo</Text>
                    </Pressable>   

                    <Pressable style={styles.containerOpcoesMaiores}>
                        <MaterialCommunityIcons name='credit-card-multiple-outline' size={32} color='#92AAFF'/>
                        <Text style={{color: '#92AAFF'}}>Cartoes</Text>    
                    </Pressable>
                </View>
                
                <View style={styles.containerGeneralOptions}>
                    <Pressable style={styles.containerOpcoesMaiores}>
                        <MaterialCommunityIcons name='barcode-scan' size={32} color='#92AAFF'/>
                        <Text style={{color: '#92AAFF'}}>Pagar</Text>
                    </Pressable>
                        
                    
                    <Pressable style={styles.containerOpcoesMaiores}>
                        <MaterialCommunityIcons name='piggy-bank-outline' size={32} color='#92AAFF'/>
                        <Text style={{color: '#92AAFF'}}>Poupança</Text>    
                    </Pressable>  
                </View>
            </Animatable.View> 

            <Animatable.View animation='fadeInUp' delay={200} style={styles.containerBotton}>
                <Pressable
                    onPress={() => (navigation.navigate('UserProfile'))}  
                >
                    <Text style={{fontWeight: 500, fontFamily:'Archivo-Bold', fontSize: 15}}>Meu perfil</Text>
                </Pressable>
            </Animatable.View>
        </Animatable.View>
       </View>
    );
}

export default UserPage;