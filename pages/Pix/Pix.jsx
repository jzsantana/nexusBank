import {View, Text, Dimensions, Pressable, TextInput, KeyboardAvoidingView} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Pix({navigation}){
    
    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    return(
        <View style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]}>
            <View style={styles.cardContainer}>
               <View style={{width: '90%', height: '40%', display: 'flex', justifyContent: 'center', gap: 10}}>
                <Text style={{color: '#fff'}}>Qual valor a ser tranferido?</Text>
                <TextInput style={styles.input} keyboardType='numeric'>

                </TextInput>
               
                <Text style={{color: '#fff'}}>Para quem você deseja realizar o PIX?</Text>
                <TextInput style={styles.input} keyboardType='numeric'>

                </TextInput>
               </View>

                <View style={{width: '90%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Pressable 
                        style={styles.buttonPix}
                        
                    >
                            <Text style={{fontWeight: 500, fontFamily: 'Archivo-Bold'}}>Confirmar</Text>
                    </Pressable>
                </View>
                    
            </View>

        </View>       
    )
}
