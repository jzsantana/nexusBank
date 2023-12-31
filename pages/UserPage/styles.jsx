import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#141414',
        display:'flex',
        margin: 0,
        flexDirection: 'column',
        padding: 30,
    },
    containerNome:{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '50%',
        padding: 2,
    },
    containerNomeTexto:{
        display: 'flex',
        justifyContent: 'flex-start'
    },
    containerCartao:{
        marginTop:45,
        backgroundColor: '#92AAFF',
        padding: 20,
        borderRadius: 9,
        height: 160,
        justifyContent: 'center',
        gap: 5
    },
    contentCartao:{
        width: '100%',
        display: "flex",
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    containerOptions:{
        width: '100%',
        height: '16%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 28,
        gap: 8
    },
    optionsContainer:{
        width: '35%',
        height: '85%',
        backgroundColor: 'black',
        borderRadius: 8,
    },
    containerGeneral:{
        width: '100%',
        height:'35%',
        marginTop: 25,
        display: 'flex',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    containerGeneralOptions:{
        width:'100%',
        height: '55%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    containerOpcoesMaiores:{
        width: '50%',
        height: '80%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    containerBotton:{
        marginTop: 25,
        width: '100%',
        height: 50,
        backgroundColor: '#92AAFF',
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'      
    }
})

export default styles