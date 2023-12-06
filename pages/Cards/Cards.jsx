import {View, Text, Dimensions, Pressable} from 'react-native'
import styles from './styles'
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Cards({navigation}){
    
    const [fontsLoaded] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf')
    })
    if(!fontsLoaded){
        return undefined;
    }

    return(
        <View style={[styles.containerPrincipal, {width: windowWidth, height: windowHeight}]}>
            <View style={{width: '100%', height: '10%', alignItems: 'center'}}><Text style={{color: '#fff', fontFamily: 'Archivo-Bold', fontSize: 20}}>Meus cartões</Text></View>
            <View style={styles.cardContainer}>
                
                <View style={styles.cardsUser}>
                    <Text style={{fontFamily: 'Archivo-Bold'}}>Nome da pessoa</Text>                    
                    <Text style={{fontFamily: 'Archivo-Bold'}}>Numero do cartao</Text>
                    <Text style={{fontFamily: 'Archivo-Bold'}}>Limite</Text>
                </View>

                <View style={styles.cardsUser}>
                    <Text style={{fontFamily: 'Archivo-Bold'}}>Nome da pessoa</Text>                    
                    <Text style={{fontFamily: 'Archivo-Bold'}}>Numero do cartao</Text>
                    <Text style={{fontFamily: 'Archivo-Bold'}}>Limite</Text>
                </View>
            </View>
        </View>       
    )
}
