import { View,Text,Dimensions, TextInput, SafeAreaView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import { useFonts } from 'expo-font';

import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { Pressable } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// cadastrar-se
function SignUp() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Pessoa Fisica', value: 'PF'},
        {label: 'Pessoa Juridica', value: 'PJ'}
    ]);
    const [fontsLoaded] = useFonts({
        'Archivo-Black': require('../../assets/fonts/Archivo-Black.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }    

    return (
       <SafeAreaView style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]} animation='fadeIn' delay={500}>
        <Animatable.Text animation='fadeIn' delay={500} 
            style={{
                fontSize: 20, 
                fontWeight: 500
            }}
            >Cadastro</Animatable.Text>

        <ScrollView  animation='fadeInUp' delay={500} style={styles.containerContent}>
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
                        style={styles.containerInputs}
                    >
                        <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Nome Completo</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite seu nome completo"
                            keyboardType="default"
                        ></TextInput>
                    </View>

                    <View
                        style={styles.containerInputs}
                    >
                        <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite seu e-mail"
                            keyboardType="default"
                        ></TextInput>
                    </View>

                    <View
                        style={{ display: 'flex', flexDirection: 'row',
                            width: '100%', height: '10%', gap: 35
                        }}
                    >
                        <View 
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '45%',
                                height: '90%',
                                gap: 10
                            }}
                        >
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Tipo de Conta</Text>
                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    zIndex={1000}
                                    placeholder='Tipo de conta'
                                    style={{borderWidth: 0, width: '100%', height:'60%'}}
                                    dropDownDirection="TOP"
                                    dropDownContainerStyle={{
                                        borderWidth: 0,
                                        width: '100%'
                                    }}
                                />
                        </View>
                            
                        <View 
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '45%',
                                height: '65%',
                                gap: 10
                            }}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Data de nascimento</Text>
                    
                            <TextInput 
                                style={{height: '100%', width: '100%', backgroundColor: '#fff', borderRadius: 10, padding: 5}}
                                placeholder="Digite a data"
                                keyboardType="numeric">
                            </TextInput>
                        </View>
                    </View>


                    <View style={{ display: 'flex', flexDirection: 'row',
                            width: '95%', height: '10%', gap: 10
                        }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            gap: 10
                        }}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Telefone</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite seu numero de telefone"
                                keyboardType="numeric"
                            ></TextInput>
                        </View>

                        <View style={{
                             display: 'flex',
                             flexDirection: 'column',
                             width: '50%',
                             gap: 10
                        }}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>CEP</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite sua conta"
                                keyboardType="default"
                                ></TextInput>
                        </View>
                    </View>    
                    
                    <View style={{ display: 'flex', flexDirection: 'row',
                            width: '95%', height: '10%', gap: 10
                        }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            gap: 10
                        }}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Bairro</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite seu bairro"
                                keyboardType="numeric"
                            ></TextInput>
                        </View>

                        <View style={{
                             display: 'flex',
                             flexDirection: 'column',
                             width: '50%',
                             gap: 10
                        }}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Cidade</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite sua cidade"
                                keyboardType="default"
                                ></TextInput>
                        </View>
                    </View>
                    
                    <View style={{ display: 'flex', flexDirection: 'row',
                            width: '95%', height: '10%', gap: 10
                        }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            gap: 10
                        }}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Estado</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite seu bairro"
                                keyboardType="numeric"
                            ></TextInput>
                        </View>

                        <View style={{
                             display: 'flex',
                             flexDirection: 'column',
                             width: '50%',
                             gap: 10
                        }}>
                            <Text style={{color: '#fff', fontWeight: 600, fontSize: 17}}>número da residencia</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite sua cidade"
                                keyboardType="default"
                                ></TextInput>
                        </View>
                    </View>
                    
                    <View 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 10,
                            height: '10%'
                            }}>
                        <Text htmlFor="" style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Endereço</Text>
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
                            gap: 10,
                            height: '10%'
                            }}>
                        <Text htmlFor="" style={{color: '#fff', fontWeight: 600, fontSize: 17}}>Senha</Text>
                        <TextInput
                                style={styles.input}
                                placeholder="Digite seu cpf"
                                keyboardType="numeric"
                        ></TextInput>
                    </View>

                    <Pressable 
                        style={styles.btnEntrar}
                        
                        >
                        <Text style={[{fontFamily: 'Archivo-Black', color: '#141414'}, styles.btnEntrarTexto]}>Login</Text>
                    </Pressable>
            </ScrollView>
       </SafeAreaView>
    );
}

export default SignUp;