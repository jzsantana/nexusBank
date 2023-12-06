import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import { useFonts } from 'expo-font';
import nexusAPI from '../../services/api';
// import { useUser } from '../../services/UserContext';
import { useState } from 'react';

// Entrar
function SignIn({navigation}) {
    const [cpfInput, setCpfInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    // const { setCpf, setPassword } = useUser()

    const [fontsLoaded] = useFonts({
        'Archivo-Black': require('../../assets/fonts/Archivo-Black.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    async function handleLogin() {
        try{
            await nexusAPI.post(`auth/token/login`, 
            {
                cpf:cpfInput,
                password: passwordInput
            },).then(
                function(response){
                    nexusAPI.defaults.headers.Authorization = `Token ${response.data.auth_token}`
                }
            )
            navigation.navigate('UserPage');
        }
        catch(error){
            console.log('erro', error)
        }
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
                        <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>CPF</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu cpf"
                            keyboardType="numeric"
                            value={cpfInput}
                            onChangeText={(e) => setCpfInput(e)}
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
                            value={passwordInput}
                            onChangeText={(e) => setPasswordInput(e)}
                            secureTextEntry={true}
                        ></TextInput>
                    </View>
                
                    <Pressable 
                        style={styles.btnEntrar}
                        onPress={handleLogin}
                        >
                        <Text style={[{fontFamily: 'Archivo-Black', color: '#141414'}, styles.btnEntrarTexto]}>Login</Text>
                    </Pressable>
                </Animatable.View>
            </Animatable.View>
       </KeyboardAvoidingView> 
    );
}

export default SignIn;