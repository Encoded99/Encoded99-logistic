import { Stack } from "expo-router";

import React from 'react';

const Layout = () => {


  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />


    
<Stack.Screen
  name="package"
  options={{
    headerShown:false
  }}
/>

<Stack.Screen
  name="status"
  options={{
    headerShown:false
  }}
/>


    </Stack>
  );
}

export default Layout;
