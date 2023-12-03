import { useWindowDimensions, StyleSheet } from "react-native"



const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#111111',
        width: window,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        backgroundColor: '#000',
        width: '80%',
        height: '50%',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    profilePictureContainer:{
        width: '90%',
        height: '50%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },
    buttonProfilePicture:{
        padding: 6,
        backgroundColor:'#92AAFF',
        borderRadius: 5,
        width: '65%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    profilePicture:{
        width: '50%',
        height: '75%',
        backgroundColor: '#fff',
        borderRadius: 100
    }, 
    containerInfos:{
        width: '90%',
        height: '25%',
        padding: 5,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles