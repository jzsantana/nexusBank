// import { useFonts, Archivo_100Thin, Archivo_200ExtraLight,
//     Archivo_300Light, Archivo_400Regular, Archivo_500Medium,
//     Archivo_600SemiBold, Archivo_700Bold, Archivo_800ExtraBold,
//     Archivo_900Black, Archivo_100Thin_Italic, Archivo_200ExtraLight_Italic,
//     Archivo_300Light_Italic, Archivo_400Regular_Italic, Archivo_500Medium_Italic,
//     Archivo_600SemiBold_Italic, Archivo_700Bold_Italic, Archivo_800ExtraBold_Italic,
//     Archivo_900Black_Italic, } from '@expo-google-fonts/archivo';
  
// import { useEffect } from 'react';
// import { Slot, SplashScreen} from 'expo-router'

// SplashScreen.preventAutoHideAsync()

// export default function Layout(){
//     const [fontsLoaded, fontError] = useFonts({
//         Archivo_100Thin, Archivo_200ExtraLight,
//         Archivo_300Light, Archivo_400Regular, Archivo_500Medium,
//         Archivo_600SemiBold, Archivo_700Bold, Archivo_800ExtraBold,
//         Archivo_900Black, Archivo_100Thin_Italic, Archivo_200ExtraLight_Italic,
//         Archivo_300Light_Italic, Archivo_400Regular_Italic, Archivo_500Medium_Italic,
//         Archivo_600SemiBold_Italic, Archivo_700Bold_Italic, Archivo_800ExtraBold_Italic,
//         Archivo_900Black_Italic,
//     })
    
//     useEffect(() => {
//         if(fontsLoaded || fontError){
//             SplashScreen.hideAsync();
//         }
//     }, [fontsLoaded, fontError])

//     if(!fontsLoaded && !fontError){
//         return null
//     }

//     return(
//         <Slot/>
//     )
// }