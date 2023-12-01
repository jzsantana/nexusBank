import { View, Image, Text, Pressable} from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
// import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import FontAwesome6Pro from 'react-native-vector-icons/FontAwesome6Pro'
// import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6Brands'

import { useFonts } from 'expo-font';
import { useState } from 'react';

// cadastrar-se
function UserPage() {

    const [show, setShow] = useState(true)

    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    const nome = "Fulana";
    const agencia = '0001'
    const conta = '102586'

    const saldo = '10000,00';

    return (
       <View style={styles.containerPrincipal} animation='fadeIn' delay={500}>
        <Animatable.View  animation='fadeIn' delay={500}>
            {/* Container com o 'carta' com o saldo e etc*/}
            <Animatable.View animation='fadeInUp' delay={200} style={styles.containerCartao}>
                <View style={styles.containerNome}><Text style={[styles.containerNomeTexto, {color: 'black', fontFamily: 'Archivo-Bold', fontSize: 20}]}>Olá, {nome}.</Text></View>
                
                
                <View style={{display:'flex', flexDirection:'row', gap: 10, alignItems:'center'}}>
                    <Text style={[styles.containerNomeTexto, {color: 'rgba(0, 0, 0, 0.4)', fontFamily: 'Archivo-Bold', fontSize: 11}]}>Agência</Text>
                    <Text style={[styles.containerNomeTexto, {color: 'black', fontFamily: 'Archivo-Bold', fontSize: 13}]}>{agencia}</Text>

                    <Text style={[styles.containerNomeTexto, {color: 'rgba(0, 0, 0, 0.4)', fontFamily: 'Archivo-Bold', fontSize: 11}]}>Conta</Text>    
                    <Text style={[styles.containerNomeTexto, {color: 'black', fontFamily: 'Archivo-Bold', fontSize: 13}]}>{conta}</Text>    
                </View>
               
                
                <View style={styles.contentCartao}>
                    <Text style={{padding: 2, color:'black', fontFamily: 'Archivo-Bold', fontSize: 18}}>Meu saldo:</Text>
                    
                    {
                        show ? <Text style={{padding: 2, color:'black', fontWeight:500, fontSize:16}}>R$: {saldo}</Text> :
                        <View style={{
                            width: '26%', 
                            height: 17,
                            backgroundColor: 'rgba(217, 217, 217, 0.65)', 
                            borderRadius:5,
                            marginLeft: 25
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

            <View style={styles.containerOptions}>
                <Pressable style={[styles.optionsContainer,{display:'flex', justifyContent:'center', alignItems:'center'}]}><MaterialIcons name='360' size={40} color={'#fff'}/></Pressable>
                <Pressable style={[styles.optionsContainer,{display:'flex', justifyContent:'center', alignItems:'center'}]}><MaterialIcons name='pix' size={40} color={'#fff'}/></Pressable>
                <Pressable style={[styles.optionsContainer,{display:'flex', justifyContent:'center', alignItems:'center'}]}><MaterialIcons name='pix' size={40} color={'#fff'}/></Pressable>
            </View>

            {/* <View style={styles.containerGeneral}>
                <View style={styles.containerOpcoesMaiores}></View>                        
                <View style={styles.containerOpcoesMaiores}></View>
                <View style={styles.containerOpcoesMaiores}></View>
                <View style={styles.containerOpcoesMaiores}></View>           
                <View style={styles.containerOpcoesMaiores}></View>
                <View style={styles.containerOpcoesMaiores}></View>
            </View>  */}
        </Animatable.View>
       </View>
    );
}

export default UserPage;