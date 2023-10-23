import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#9DB1F8',
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 0,
        flexDirection: 'column',
        // padding: 30,
        // flex: 1
    },
    containerForm: {
        // flex: 1,
        // borderTopEndRadius: 50,
        borderTopStartRadius:100,
        width: '100%',
        height: '90%',
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
        backgroundColor: '#f80',
        width: '100%',
        marginTop: 100
    },
    logo:{
        
    },
    btnEntrar: {
        marginTop: 100,
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