"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

export default function home() {
  const router = useRouter(); 

  const navigateHome =() =>{    
    router.push('/pages/homePage')
  }
  return (
    <Stack direction="row" spacing={2}>  
      <Button onClick={navigateHome}>Home</Button>

    </Stack>
  );
}
