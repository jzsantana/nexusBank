import {View, Text, Dimensions, Pressable} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Loan({navigation}){
    
    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    return(
        <View style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]}>
            <View style={styles.cardContainer}>
                <View style={styles.profilePictureContainer}>
                    <View style={styles.profilePicture}>
                        <Text>Deseja solicitar um emprestimo?</Text>
                    </View>

                    <Pressable 
                        style={styles.buttonProfilePicture}
                        
                    >
                            <Text style={{fontWeight: 500, fontFamily: 'Archivo-Bold'}}>Solicitar</Text>
                    </Pressable>
                </View>
            </View>

        </View>       
    )
}