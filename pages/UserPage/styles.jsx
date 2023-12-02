import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#141414',
        width: '100%',
        height: '100%',
        display:'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 0,
        flexDirection: 'column',
        padding: 30,
    },
    containerNome:{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '50%',
        // marginTop: 15,
        padding: 2,
    },
    containerNomeTexto:{
        display: 'flex',
        justifyContent: 'flex-start'
    },
    containerCartao:{
        marginTop:55,
        backgroundColor: '#92AAFF',
        padding: 20,
        borderRadius: 9,
        height: 160,
        justifyContent: 'center',
        // alignItems: 'center',
        gap: 5
    },
    contentCartao:{
        width: '100%',
        display: "flex",
        justifyContent: 'space-between',
        flexDirection:'row',
        // gap: 50,
        alignItems:'center',
    },
    containerOptions:{
        width: '100%',
        height: '16%',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#f40',
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
        height:'40%',
        marginTop: 25,
        backgroundColor: '#f40',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerGeneralOptions:{
        width:'100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },
    containerOpcoesMaiores:{
        width: '50%',
        height: '70%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
})

export default styles