import { View, Image, Text, TouchableOpacity, TextInput, Pressable, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import { useFonts } from 'expo-font';


// Entrar
function SignIn({navigation}) {
    const [fontsLoaded] = useFonts({
        'Archivo-Black': require('../../assets/fonts/Archivo-Black.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }



    return (
        <KeyboardAvoidingView style={styles.containerPrincipal} animation='fadeIn' delay={500}>
            <Animatable.View  animation='fadeIn' delay={500}>
                <View style={{height:'25%'}}></View>

                <Animatable.View style={styles.containerForm} animation='fadeInUp' delay={500}>
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
                

                    <Pressable 
                        style={styles.btnEntrar}
                        onPress={() => {navigation.navigate('UserPage')}}
                        >
                        <Text style={[{fontFamily: 'Archivo-Black', color: '#141414'}, styles.btnEntrarTexto]}>Login</Text>
                    </Pressable>
                
                    
                </Animatable.View>
            </Animatable.View>
       </KeyboardAvoidingView> 
    );
}

export default SignIn;