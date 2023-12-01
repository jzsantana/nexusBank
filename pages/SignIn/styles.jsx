import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#9DB1F8',
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent: 'center',
        margin: 0,
        flexDirection: 'column',
        flex: 1
    },
    containerForm: {
        borderTopStartRadius:100,
        width: '100%',
        height: '80%',
        backgroundColor: '#141414',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        padding: 35
    },
    input:{
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    imgLogo:{
        height: 100,
        width: 100
    },
    logo:{
        height: '25%',
    },
    btnEntrar: {
        marginTop: 40,
        padding: 10,
        width: 200,
        height: 50,
        backgroundColor: '#9DB1F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    btnEntrarTexto:{
        fontSize: 18
    }

})

export default styles