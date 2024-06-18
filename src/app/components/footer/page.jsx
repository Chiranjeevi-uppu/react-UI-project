"use client"
import React from 'react'
import Link from 'next/link'
import { Divider } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function footer() {
  return (
    <div>

      <div className='footer' style={{backgroundColor:'#f8cf00' ,height:500 , display:'flex'}}>
          <div style={{backgroundColor:'#244946' , width:'100%',gap:40 , overflow:'hidden' , padding:20 , textAlign:'justify'}}>
                <h2 style={{color:'white'}}>About snaptics</h2>
                <p style={{color:'#B5C3BE'}}>Kshethra Lifespaces is a prominent realty enterprise, redefining modern living through 
                   innovative design and versatile projects, including flagship Managed Farmlands projects
                   spanning South Indian states for a seamless urban-nature blend.With a seasoned team,
                   we prioritize world-class amenities,elevating lifestyles,and promising value appreciation.
                </p>
          </div>
          <div style={{backgroundColor:'#244946' , width:'100%',gap:20, overflow:'hidden', padding:20 , textAlign:'justify'}}>
                <h2 style={{color:'white'}}>Links</h2>
             <div><Link href={'#'} style={{color:'#B5C3BE'}}>Snaptics story</Link></div> <br/>
             <div><Link href={'#'} style={{color:'#B5C3BE'}}>vision & mission</Link></div> <br/> 
             <div><Link href={'#'} style={{color:'#B5C3BE'}}>Why snaptics</Link></div> <br/>
             <div><Link href={'#'} style={{color:'#B5C3BE'}}>Team</Link></div> <br/>
             
             <div style={{position:'relative' , display:'flex' , top:65 , gap:20}}>
                <button onClick={'#'} style={{color:'#B5C3BE', background: 'none', border: 'none', cursor: 'pointer' }}>
                <FacebookIcon />
                </button>
                <button onClick={'#'} style={{color:'#B5C3BE', background: 'none', border: 'none', cursor: 'pointer' }}>   
                <InstagramIcon />
                </button> 
             </div>

          </div>
          <div style={{backgroundColor:'#244946' , width:'100%',gap:20, overflow:'hidden', padding:20 , textAlign:'justify'}}>
                <h2 style={{color:'white'}}>Managed Farmlands</h2>
                <div><Link href={'#'} style={{color:'#B5C3BE'}}>Wood Stook Hills</Link></div> <br/>
             <div><Link href={'#'} style={{color:'#B5C3BE'}}>Boho green Hills</Link></div> <br/> 
             <div><Link href={'#'} style={{color:'#B5C3BE'}}>Westwoods</Link></div> <br/>
             <div><Link href={'#'} style={{color:'#B5C3BE'}}>Tuscany Valley</Link></div> <br/>
          </div>
          <div style={{backgroundColor:'#244946' , width:'100%',gap:20, overflow:'hidden', padding:20 , textAlign:'justify'}}>
                <h2 style={{color:'white'}}>Contact</h2>
                <h3 style={{position:'relative' , left:25 ,color:'#B5C3BE'}}>Corporate Office:</h3>
                <p style={{position:'relative' , left:25 , color:'#B5C3BE'}}>                
                Level 3, 'Vrindavan' 22, KV Jayaram<br/><br/>,MCHS Layout,Jakkur Road–560064<br/><br/> Karnataka, India.
                </p>   
                <Divider  sx={{color:'#B5C3BE'}}/> 
                <p style={{position:'relative' , left:25 ,color:'#B5C3BE'}}>+911122334455</p> 
                
                <Divider />
                <p style={{position:'relative' , left:25 ,color:'#B5C3BE'}}>chirunithin3@gmail.com</p>
                <CallIcon sx={{position:'relative',bottom:90 ,color:'#EFB443'}}/>
                <EmailIcon sx={{position:'relative',bottom:35 ,right:25,color:'#EFB443'}}/>
                <LocationOnIcon sx={{position:'relative',bottom:183 ,right:50,color:'#EFB443'}} />

          </div>
      </div>

    </div>
  )
}
