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
                <View style={styles.logo}>
                    <Image source={require('./../../assets/NEXUS.png')} style={styles.imgLogo}/>
                </View>

                <Animatable.View style={styles.containerForm} animation='fadeInUp' delay={500}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua agência"
                        keyboardType="numeric"
                    ></TextInput>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite sua conta"
                        keyboardType="numeric"

                    ></TextInput>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite sua senha"
                        keyboardType="numeric"
                    ></TextInput>

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