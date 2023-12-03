import {View, Text, Dimensions, Pressable} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UserProfile({navigation}){
    
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

                    </View>

                    <Pressable 
                        style={styles.buttonProfilePicture}
                        
                    >
                            <Text style={{fontWeight: 500, fontFamily: 'Archivo-Bold'}}>Trocar foto de perfil</Text>
                    </Pressable>
                </View>

                <View style={styles.containerInfos}>
                    <Text style={{color: 'white', fontSize: 15}}>Fulana de Tal</Text>
                    <Text style={{color: 'white', fontSize: 15}}>Seu saldo disponivel: </Text>
                </View>

            </View>

        </View>       
    )
}
