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
        height: '95%',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 15,
        padding: 5
    },
    input:{
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    buttonPix:{
        padding: 10,
        backgroundColor:'#92AAFF',
        borderRadius: 8,
        width: '65%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})

export default styles