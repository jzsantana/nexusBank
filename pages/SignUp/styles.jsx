import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#9DB1F8',
        display:'flex',
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
        },
    input:{
        width: '80%',
        height: 40,
    },
    containerContent:{
        borderTopStartRadius:100,
        width: '100%',
        height: '100%',
        backgroundColor: '#9DB1F8',
        display: 'flex',
        padding: 15,
    },
    input:{
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        zIndex: 0,
    },
    containerInputs:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 15
    },
    btnEntrar: {
        marginTop: 25,
        padding: 5,
        width: 200,
        height: 40,
        backgroundColor: '#111111',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center'
    },
    btnEntrarTexto:{
        fontSize: 18,
         color: '#fff'
    }

})

export default styles