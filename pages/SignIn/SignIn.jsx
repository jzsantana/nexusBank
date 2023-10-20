import { View, Image, Text, TouchableOpacity, TextInput} from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import { useFonts } from 'expo-font';


function SignIn() {
    const [fontsLoaded] = useFonts({
        'Archivo-Black': require('../../assets/fonts/Archivo-Black.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    return (
       <View style={styles.containerPrincipal} animation='fadeIn' delay={500}>
        <Animatable.View  animation='fadeIn' delay={500}>

            <View>
                <Image source={require('./../../assets/NEXUS.png')} style={styles.logo}/>
            </View>

            <View>

                <TextInput style={styles.input}></TextInput>
            </View>
        </Animatable.View>
       </View>
    );
}

export default SignIn;