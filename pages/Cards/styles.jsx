import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#111111', 
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        backgroundColor: '#000',
        width: '90%',
        height: '60%',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 15
    },
    cardsUser:{
        width: '90%',
        height: '30%',
        backgroundColor: '#fff',
        display: "flex",
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
        padding: 10
    }
})

export default styles