import { useState } from 'react'
import { Text, View } from 'react-native'
import styles from './style'


export default function Home (){
 
    const nome = 'Júlia'

    return (
      <View style={[{backgroundColor: '#F6F6F6'}, styles.containerPrincipal]}>
        
        <View>
            <Text style={{color: '#fff'}}>Olá, {nome}</Text>
        </View>

        <View style={styles.card}>

        </View>

      </View>
    )

}