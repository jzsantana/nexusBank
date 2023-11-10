import { View, Image, Text, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
// import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6Brands'

import { useFonts } from 'expo-font';

// cadastrar-se
function UserPage() {
    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    const nome = "Fulana";

    const saldo = '1000';

    return (
       <View style={styles.containerPrincipal} animation='fadeIn' delay={500}>
        <Animatable.View  animation='fadeIn' delay={500}>
            <View style={styles.containerNome}><Text style={[styles.containerNomeTexto, {color: 'white', fontFamily: 'Archivo-Bold', fontSize: 20}]}>Olá, {nome}.</Text></View>

            {/* Container com o 'carta' com o saldo e etc*/}
            <View style={styles.containerCartao}>
                <Text style={{color:'white', fontFamily: 'Archivo-Bold', fontSize: 16}}>Meu saldo:</Text>
                <Text style={{color:'white'}}>R$: {saldo}</Text>
            </View>

            <View style={styles.containerOptions}>
                <View style={[styles.optionsContainer,{display:'flex', justifyContent:'center', alignItems:'center'}]}><AntDesign name='wallet' size={40} color={'#fff'}/></View>
                <View style={[styles.optionsContainer,{display:'flex', justifyContent:'center', alignItems:'center'}]}><AntDesign name='wallet' size={40} color={'#fff'}/></View>
                <View style={[styles.optionsContainer,{display:'flex', justifyContent:'center', alignItems:'center'}]}><AntDesign name='wallet' size={40} color={'#fff'}/></View>
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