import { View, Image, Text,Dimensions} from 'react-native'
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
        <Animatable.View  animation='fadeIn' delay={500} style={{}}>
            
        </Animatable.View>
       </View>
    );
}

export default SignUp;