import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#9DB1F8',
        display:'flex',
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
       
        },
    input:{
        width: '80%',
        height: 40,
    },
    containerContent:{
        width: '100%',
        height: '90%',
        backgroundColor: '#111111',
        display: 'flex',
        // justifyContent: 'center',
        padding: 15,
        flex: 1
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
        height: 50,
        backgroundColor: '#9DB1F8',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center'
    },
    btnEntrarTexto:{
        fontSize: 18,
         color: '#fff'
    },
    containerForm:{
        backgroundColor: '#a70',
        width: '90%',
        height: '90%'
    }
})

export default styles