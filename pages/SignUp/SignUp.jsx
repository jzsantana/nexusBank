import { View,Text,Dimensions, TextInput} from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// cadastrar-se
function SignUp() {
    const [fontsLoaded] = useFonts({
        'Archivo-Black': require('../../assets/fonts/Archivo-Black.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    return (
       <View style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]} animation='fadeIn' delay={500}>
        <Animatable.Text animation='fadeIn' delay={500} 
            style={{
                fontSize: 20, 
                fontWeight: 500
            }}
            >Cadastro</Animatable.Text>

        <Animatable.View  animation='fadeInUp' delay={500} style={styles.containerContent}>
                <View 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 10,
                        height: '10%'
                        }}>
                    <Text htmlFor="" style={{color: '#fff', fontWeight: 600, fontSize: 17}}>CPF</Text>
                    <TextInput
                            style={styles.input}
                            placeholder="Digite seu cpf"
                            keyboardType="numeric"
                    ></TextInput>
                </View>
                
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 10
                        }}
                    >
                        <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua conta"
                            keyboardType="default"
                        ></TextInput>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 10
                        }}
                    >
                        <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua conta"
                            keyboardType="default"
                        ></TextInput>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 10
                        }}
                    >
                        <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua conta"
                            keyboardType="default"
                        ></TextInput>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 10
                        }}
                    >
                        <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua conta"
                            keyboardType="default"
                        ></TextInput>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 10
                        }}
                    >
                        <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua conta"
                            keyboardType="default"
                        ></TextInput>
                    </View>
        </Animatable.View>
       </View>
    );
}

export default SignUp;