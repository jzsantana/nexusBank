import { StyleSheet } from "react-native";
{/* <style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style> */}

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#141414',
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        flexDirection: 'column',
        padding: 35,
    },    
    // container: {
    //     width: '100%',
    //     height: '100%',
    //     display:'flex',
    //     backgroundColor: '#141414',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    
    texto:{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        fontSize: 40,
        // fontFamily: 'Archivo_600SemiBold_Italic',
    },
    foto:{
        width: 270,
        height: 270,
        alignSelf: "center"
    },
    containerFoto:{
        margin: 0,
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        // height: '100%'
    }, 
    containerLogo:{
        flex:1,
        width: '100%',
        marginTop: 15,
    },
    containerApresentacao:{
        // width: '100%',
        fontStyle: 'normal',
        marginTop: 90,
        fontSize: 38,
        fontWeight: 'bold',
        flex:3,
        // backgroundColor: '#f04',
        display: 'flex',
        gap: 20,
    },
    button:{
        backgroundColor: '#fff',
        padding: 5,
        width: 140,
        height: 40,
        color: '#000',
        marginTop: 25,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBotao:{
        marginTop: 50,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // height: '50%',
        // width: '100%',
        // backgroundColor: '#f5a',
        gap: 25,
    }
    
})


export default styles