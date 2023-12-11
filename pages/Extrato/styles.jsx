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
        height: '80%',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 15
    },
    cardsUser:{
        width: '93%',
        height: '10%',
        backgroundColor: '#fff',
        display: "flex",
        // alignItems: 'center',
        // justifyContent:'space-between',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row'
    }
})

export default styles