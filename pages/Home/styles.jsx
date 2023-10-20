import { StyleSheet } from "react-native";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display:'flex',
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerPrincipal:{
        backgroundColor: '#141414',
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        flexDirection: 'column',
        padding: 30
    },
    texto:{
        color: '#fff',
        fontSize: 35,
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
        marginTop: 0,
    },
    containerApresentacao:{
        fontFamily: 'Archivo Black',
        fontStyle: 'normal',
        marginTop: 25,
        fontSize: 38,
        fontWeight: 'bold',
        flex:3,
        padding: 10

    },
    button:{
        backgroundColor: '#fff',
        padding: 5,
        width: 130,
        height: 35,
        fontSize: 15,
        color: '#000',
        marginLeft: 25,
        marginTop: 25,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    containerBotao:{
        marginTop: 50,
        display: 'flex',
        flexDirection: "row",
        flex: 4,
        height: 100,
        width: '100%',
        
    }
    
})


export default styles