"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';

export default function menu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateProfile =() =>{
    handleClose
    router.push('/pages/snapticsProfile')
  }
  const navigateVision =() =>{
    handleClose
    router.push('/pages/visionAndmission')
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
      >
        Snaptics story
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={navigateProfile}> Snaptics Profile</MenuItem>
        <MenuItem onClick={navigateVision}>vision & Mission</MenuItem>
        {/* <MenuItem onClick={handleClose}>Why snaptics</MenuItem> */}
      </Menu>
    </div>
  );
}

