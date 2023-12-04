import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#9DB1F8',
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input:{
        width: '80%',
        height: 40,
    },
    containerContent:{
        borderTopStartRadius:100,
        width: '100%',
        height: '90%',
        backgroundColor: '#141414',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
        padding: 35
    },
    input:{
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
})

export default styles