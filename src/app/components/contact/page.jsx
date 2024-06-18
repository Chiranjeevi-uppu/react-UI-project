"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter(); 

  const navigateContact =() =>{
    // handleClose
    router.push('/pages/contactPage')
  }
  return (
    <Stack direction="row" spacing={2}>  
      <Button onClick={navigateContact}>Contact</Button>

    </Stack>
  );
}
