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
        width: '95%',
        height: '80%',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 15,
        
    },
    cardsUser:{
        flex: 1,
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        display: "flex",
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    flatlist:{
        width: '100%',
        width: '100%',
        display: 'flex',

    }
})

export default styles