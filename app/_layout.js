import {Stack} from 'expo-router';
import { useCallback } from 'react';
import {useFonts} from 'expo-font';
import *as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


const Layout=()=>{

    const [fontLoaded]=useFonts({
    
    })

   
    return <Stack/>
}

export default Layout;