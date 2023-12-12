import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: '#111111', 
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        backgroundColor: '#000',
        width: '90%',
        height: '50%',
        borderRadius: 15,
        gap: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    profilePictureContainer:{
        width: '90%',
        height: '65%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
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
        width: '85%',
        height: '8%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        width: '100%',
        height: 38,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
})

export default styles