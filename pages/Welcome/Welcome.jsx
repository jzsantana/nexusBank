import { View, Image, Text, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import { useFonts } from 'expo-font';


export default function Welcome({navigation}) {
    // criando as fontes que estarõ no projeto, uso elas com style inline
    const [fontsLoaded] = useFonts({
        'Archivo-Black': require('../../assets/fonts/Archivo-Black.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    return (
      <View style={styles.containerPrincipal}  animation='fadeIn' delay={500}>
        <Animatable.View  animation='fadeIn' delay={500} >

            {/* O logo do banco */}
            <View style={styles.containerLogo}>
                <Image source={require('./../../assets/NEXUS.png')} style={styles.logo}/>
            </View>
            {/* Aqui é o container onde será posto a imagem redonda com os espirais */}
            <View style={styles.containerFoto}>
                <Image  source={require('./../../assets/circleSpiral.png')} style={styles.foto} 
                />
            </View>
            {/* Aqui é container onde será posto o texto acima dos botoes */}
            <View style={styles.containerApresentacao}>
                <Text style={[{fontFamily: 'Archivo-Black'}, styles.texto]}>SUA{'\n'}REVOLUÇÃO{'\n'}FINANCEIRA</Text>
               
                <View style={styles.containerBotao}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {navigation.navigate('SignUp')}}
                        ><Text style={{fontFamily: 'Archivo-Black'}}>CRIAR CONTA</Text></TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {navigation.navigate('SignIn')}}
                        ><Text style={{fontFamily: 'Archivo-Black'}}>ENTRAR</Text></TouchableOpacity>
                </View>
            </View>
        </Animatable.View>
      </View>
    );
  }
