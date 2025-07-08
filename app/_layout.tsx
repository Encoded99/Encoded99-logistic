import React, { useEffect } from 'react';
import { StyleSheet,} from 'react-native';

import { Slot } from 'expo-router';

import { ThemeProvider } from './theme-provider';




const _layout = () => {
 



  return (


    
  
        <ThemeProvider>
          <Slot />
        </ThemeProvider>


   
     
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default _layout;
