import { View, Image, Text, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from "./styles"
import { useFonts } from 'expo-font';

// cadastrar-se
function SignUp() {
    const [fontsLoaded] = useFonts({
        'Archivo-Black': require('../../assets/fonts/Archivo-Black.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    return (
       <View style={styles.containerPrincipal} animation='fadeIn' delay={500}>
        <Animatable.View  animation='fadeIn' delay={500}>
            
        </Animatable.View>
       </View>
    );
}

export default SignUp;