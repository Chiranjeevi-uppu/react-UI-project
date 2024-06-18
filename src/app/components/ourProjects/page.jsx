"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';

export default function ourProjects() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateworkStorkHills =() =>{
    handleClose
    router.push('/pages/workStorkHills')
  }

  // const navigateVision =() =>{
  //   handleClose
  //   router.push('/pages/workStorkHills')
  // }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Our Projects
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
        <MenuItem onClick={navigateworkStorkHills}>Woodstork Hills</MenuItem>
        {/* <MenuItem onClick={handleClose}>Boho Green Hills</MenuItem>
        <MenuItem onClick={handleClose}>Tuscany valley</MenuItem> */}
      </Menu>
    </div>
  );
}

