import * as Font from 'expo-font';
import { useGlobal } from './context';
import React,{useEffect, useState,} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';





export const useFonts=()=>{

  const {setMode}=useGlobal()

    const [fontLoaded, setFontLoaded] = useState(false);
    
  


const loadFonts=async()=>{

  const storedMode=await AsyncStorage.getItem('mode') 
  setMode(storedMode || 'light');
 


     try{
      await Font.loadAsync({
        'IrishGrover': require('./assets/fonts/IrishGrover-Regular.ttf'),   
        'Inter-Regular': require('./assets/fonts/Inter_24pt-Regular.ttf'),
        'Inter-Bold': require('./assets/fonts/Inter_28pt-Bold.ttf'),
        'Inter-Semi-Bold': require('./assets/fonts/Inter_28pt-SemiBold.ttf'),
       
      })


    
     }

     catch(err){
    

     }
    finally{
      setFontLoaded(true)
    }
  
}


useEffect(()=>{
  loadFonts()

},[])


return{
  fontLoaded,
}
  
}