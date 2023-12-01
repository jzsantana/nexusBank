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
        marginTop: 15,
        padding: 2,
    },
    containerNomeTexto:{
        display: 'flex',
        justifyContent: 'flex-start'
    },
    containerCartao:{
        marginTop:55,
        backgroundColor: '#92AAFF',
        padding: 30,
        borderRadius: 9,
        height: 150,
        justifyContent: 'center',
        gap: 10
    },
    contentCartao:{
        display: "flex",
        flexDirection:'row',
        gap: 12,
        alignItems:'center',
    },
    containerOptions:{
        width: '100%',
        height: '25%',
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 25,
        
    },
    optionsContainer:{
        width: '25%',
        // height: '25%',
        backgroundColor: 'gray',
        borderRadius: 8,
        padding:10,
    },
    // containerOpcoesMaiores:{
    //     width: '12%',
    //     height: '2%',
    //     backgroundColor: 'purple',
    // },
    // containerGeneral:{
    //     width: '100%',
    //     height:'40%'
    // }
   
})

export default styles