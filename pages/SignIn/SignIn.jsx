import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import { useFonts } from 'expo-font';
import nexusAPI from '../../services/api';

import { useState } from 'react';
import { useAuth } from '../Contexts/auth';

// Entrar
function SignIn({navigation}) {
    const { login } = useAuth();
    const [passwordInput, setPasswordInput] = useState('')
    const [cpfInput, setCpfInput] = useState('')

    const [fontsLoaded] = useFonts({
        'Archivo-Black': require('../../assets/fonts/Archivo-Black.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
        const response = await nexusAPI.post('auth/token/login', {
            cpf: cpfInput,
            password: passwordInput,
        });

        const { auth_token } = response.data;
        login(auth_token);
            navigation.navigate('UserPage');

        } catch (error) {
        console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
        }
    };
  

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