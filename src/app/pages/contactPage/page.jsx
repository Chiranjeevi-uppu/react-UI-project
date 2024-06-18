"use client"
import React from 'react'
import Menu from '@/app/components/menu/page'
import Team from '@/app/components/team/page'
import OurProjects from '@/app/components/ourProjects/page'
import Contact from '@/app/components/Contact/page'
import Image from 'next/image'
import Link from 'next/link'
import Home from '@/app/components/home/page'
import { Divider } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function page() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();        
        console.log(formData);
      };
  return (
    <div>
      
      <div
        style={{height: '100px',display: 'flex',alignItems: 'center',justifyContent: 'center',gap: '30px',
        width: '100%'}}
        >
         <Home />         
         <Menu  />
         <Team />
         <OurProjects />
         <Contact />         
      </div>

      <div style={{background:'grey' , height:500 , backgroundImage:'url(/images/resort1.jpg)',backgroundPosition:'center',
        opacity:'0.7', display:'flex',justifyContent:'center',textShadow: 'rgba(0, 0, 0, 0.5)',alignItems:'center' , width:'100%'
      }}>
              <div> <h4 style={{color:'whitesmoke',alignContent:'center' , position:'relative' , bottom:50 , left:280}}> HOME  /  CONTACT</h4> </div>
              
              <h1 style={{alignContent:'center' ,color:'#B5C3BE' ,fontFamily: "'Pacifico', cursive",
                fontSize:'7em'
               }}>contact</h1>
               
         
      </div>

      <div style={{backgroundColor:'grey' , height:'500px' , display:'flex' }}>
          <div style={{backgroundColor:'#244946' , height:'100%' , width:'100%'}}>
            
              <p style={{padding:20 , textAlign:'justify' ,color:'#B5C3BE'}}>CONTACT NOW</p>
              <h1 style={{padding:20 , textAlign:'justify' ,color:'#B5C3BE'}}>Contact for More Details</h1>
              <p style={{padding:20 , textAlign:'justify' , color:'#B5C3BE'}}>
              Dear prospective Customers and Interested Individuals, We invite you to send us<br /><br /> your queries and
              questions to learn more about Kshethra Lifespaces sustainable<br /><br /> projects. We're here to provide you
              with detailed information and insights on our<br /><br /> holistic approach to farmland development. Feel free
              to reach out! 
              </p>
                        
          </div>

          <div style={{backgroundColor:'#244946', height:'100%',width:'100%'}}>               
          
    <form onSubmit={handleSubmit}>
      <div>
        
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
          style={{width:500 , height:50 , position:'relative' ,top:50 , left:70 , borderRadius:10 , border: '1px solid #ccc',}}
        />
      </div>
      <div>
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
          style={{width:500 , height:50 , position:'relative' ,top:80 , left:70, borderRadius:10,border: '1px solid #ccc',}}
        />
      </div>
      <div>
        
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder='phone'
          value={formData.phone}
          onChange={handleChange}
          required
          style={{width:500 , height:50 ,position:'relative' ,top:120 , left:70, borderRadius:10,border: '1px solid #ccc',}}
        />
      </div>
      <div style={{}}>       
        <textarea
          id="message"
          backgroundColor='grey'
          name="message"
          placeholder='message'
          value={formData.message}
          onChange={handleChange}
          required
          style={{width:500 , height:50 , position:'relative' ,top:150 , left:70, borderRadius:10 , border: '1px solid #ccc',}}
        />
      </div>
      <button type="submit" style={{width:250 , height:50 , position:'relative' ,top:180 , left:200, borderRadius:10,
        border: '1px solid #ccc', backgroundColor:'#EFB443' , fontFamily:'sans-serif' }}>Send message</button>
    </form>
          </div>         
      </div>

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
