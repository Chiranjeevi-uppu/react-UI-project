"use client"
import React from 'react'
import Menu from '@/app/components/menu/page'
import Team from '@/app/components/team/page'
import OurProjects from '@/app/components/ourProjects/page'
import Contact from '@/app/components/Contact/page'
import Home from '@/app/components/home/page'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import { useState } from 'react'
import Footer from '@/app/components/footer/page'

export default function workStorkHills () {

  const [content, setContent] = useState({
    heading: "CUSTOMERS",
    subheading: "Customes review about out projects",
  });
  const [key, setKey] = useState(0);

  const handleContentChange = (newHeading, newSubheading) => {
    setContent({
      heading: newHeading,
      subheading: newSubheading,
    });
    setKey(prevKey => prevKey + 1);
  };

  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }
  const transition = {
    duration: 1,
    ease: "easeInOut",
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
              <div> <h4 style={{color:'whitesmoke',alignContent:'center' , position:'relative' , bottom:70 , left:200}}> HOME  / WOODSTORK HILLS</h4> </div>
              
              <h1 style={{alignContent:'center' , color:'white' ,fontFamily: "'Pacifico', cursive",
                fontSize:'4em' , position:'relative' , right:170
               }}>Woodstork hills</h1>        
      </div>
      
      <div style={{backgroundColor:'#244946' , height:500 , display:'flex', width:'100%'}}>
      <div style={{  height:'500px', gap:20 , display:'flex'}}>

      <motion.div
      style={{backgroundColor: 'white',height: '430px',width: '1000px',top: 20,left: 10,borderRadius: 10,
        overflow: 'hidden',position: 'relative',
      }}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
        <div
        style={{
          position: 'relative',      
          width: '100%',
          height: '100%',
        }}
      >
        <Image src="/images/resort1.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover' />
      </div>      
    </motion.div>

          <div>
           <p style={{color:'#B5C3BE' , fontFamily:'sans-serif'}}>WELCOME TO</p>
           <h1 style={{color:'#EFB443' , fontFamily:'sans-serif'}} > Snaptics Lifespaces ! </h1>
           <p style={{color:'#B5C3BE' , fontFamily:'sans-serif'}}>
           Snaptics Lifespaces is a prominent realty enterprise, redefining modern living through innovative design and
           versatile projects, including flagship Managed Farmlands projects spanning South Indian states for a seamless 
           urban-nature blend. <br /> <br />
           With a seasoned team, we prioritize world-class amenities, elevating lifestyles, and promising value appreciation.
            Join us at Kshethra Lifespaces to experience visionary living where innovation meets reality.
            Snaptics Lifespaces is a prominent realty enterprise, redefining modern living through innovative design and
           versatile projects, including flagship Managed Farmlands projects spanning South Indian states for a seamless 
           urban-nature blend. <br /> <br />
           With a seasoned team, we prioritize world-class amenities, elevating lifestyles, and promising value appreciation.
            Join us at Kshethra Lifespaces to experience visionary living where innovation meets reality.
            Snaptics Lifespaces is a prominent realty enterprise, redefining modern living through innovative design and
           versatile projects, including flagship Managed Farmlands projects spanning South Indian states for a seamless 
           urban-nature blend. <br /> <br />
           With a seasoned team, we prioritize world-class amenities, elevating lifestyles, and promising value appreciation.
            Join us at Kshethra Lifespaces to experience visionary living where innovation meets reality.
            urban-nature blend. <br /> <br />
         
           </p>
           </div>
        </div>       
       </div>       
      
       <div style={{backgroundColor:'#f1f0f0' , height:380  , width:'100%' , flexDirection:'row'}}>
       <div style={{left:110 ,top:1150,backgroundColor:'white' ,zIndex:10,
               height:120 , width:120 , position:'absolute' , borderRadius:'50%'}}>
            <Image src='/svg/rocket.svg' width={100} height={100} style={{position:'relative' , left:10}}/>
        </div>
        <div style={{left:440 ,top:1150,backgroundColor:'white' ,zIndex:10,
               height:120 , width:120 , position:'absolute' , borderRadius:'50%'}}>
        <Image src='/svg/home1.svg' width={100} height={100} style={{position:'relative', left:10}}/>
        </div>
        <div style={{left:780 ,top:1150,backgroundColor:'white' ,zIndex:10,
               height:120 , width:120 , position:'absolute' , borderRadius:'50%'}}>
        <Image src='/svg/rocket.svg' width={100} height={100} style={{position:'relative', left:10}}/>
        </div>
        <div style={{right:100 ,top:1150,backgroundColor:'white' ,zIndex:10,
               height:120 , width:120 , position:'absolute' , borderRadius:'50%'}}>
        <Image src='/svg/home1.svg' width={100} height={100} style={{position:'relative', left:10}}/>
        </div>
        <div style={{display:'flex' , gap:40 , padding:20 , position:'relative' , top:130}} >        
           <div style={{display:'flex', flexDirection:'row',padding:30,backgroundColor:'white',height:150 ,overflow:'hidden', width:'30%' ,position:'relative'  ,bottom:30, borderRadius:10 }}>
             <h2 style={{position:'relative' , top:30}}>Festyland (Children's Outdoor Play Area)</h2>
           </div>
           <div style={{display:'flex', flexDirection:'row',padding:30 ,backgroundColor:'white',height:150 ,overflow:'hidden', width:'30%',position:'relative',bottom:30, borderRadius:10}}>
           <h2 style={{position:'relative' , top:30}}>Stay @ Blue Bellagio (Model House)</h2>
           </div>
           <div style={{display:'flex', flexDirection:'row',padding:30,backgroundColor:'white',height:150,overflow:'hidden', width:'30%',position:'relative' ,bottom:30, borderRadius:10}}>
           <h2 style={{position:'relative' , top:30}}>Wonka (Children's Indoor Activities)</h2>
           </div>
           <div style={{display:'flex', flexDirection:'row',padding:30,backgroundColor:'white',height:150,overflow:'hidden', width:'30%',position:'relative' ,bottom:30, borderRadius:10}}>
           <h2 style={{position:'relative' , top:30}}>Dynamo Corner (Open Gym)</h2>
           </div>
        </div>
      </div>

      <div style={{display:'flex' , backgroundColor:'#244946' , height:600 , width:'100%' , overflow:'hidden' , flexDirection:'row'}}>
         <div style={{display:'flex' , gap:10 , position:'relative' ,top:30 , left:570 }}>
               <StarIcon sx={{color:'#EFB443'}}/>
               <StarIcon sx={{color:'#EFB443'}}/> 
               <StarIcon sx={{color:'#EFB443'}}/> 
               <StarIcon sx={{color:'#EFB443'}}/> 
               <StarIcon sx={{color:'#EFB443'}}/>
          </div>

          <div style={{display: 'flex',backgroundColor:'#244946',height: 450,width: '90%',position: 'relative',
        top: 120,right: 70,padding: 30,overflow: 'hidden',flexDirection: 'column',
      }}
    >
      <motion.h2
        key={key}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{color:'#B5C3BE'}}
      >
        {content.subheading}
      </motion.h2>

      <div style={{display: 'flex',position: 'relative',left: 380,top: 80,}}>
        
        <motion.div  onClick={() => handleContentChange("CHIRANJEEVI", "In an increasingly connected world where everyone’s opinions are shared with a click, reviews are more powerful than ever. Statistics show that 95% of consumers now read online reviews, and as many as 88% trust them as much as personal recommendations.")}  
        whileHover={{ scale: 1.1 }} style={{backgroundColor: '#EFB443',zIndex: 10,height: 100,width: 100,position: 'absolute',borderRadius: '50%',justifyContent: 'center',
          }}
        >
          <div
            style={{backgroundColor: 'orange',zIndex: 10,alignItems: 'center',top: 10,left: 10,height: 80,width: 80,
              position: 'absolute',borderRadius: '50%',overflow:'hidden'}}>
            <Image src="/images/chiranjeevi.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover' />
          </div>
        </motion.div> 
        <motion.div onClick={() => handleContentChange("JOHN CENA", "Yet, acquiring these gold nuggets of advocacy can often feel as daunting as striking gold. So how do you motivate your customers to share their fantastic experiences and pen them into persuasive, positive reviews?")}  
        whileHover={{ scale: 1.1 }} style={{left:110,backgroundColor: '#EFB443',zIndex: 10,height: 100,width: 100,position: 'absolute',borderRadius: '50%',justifyContent: 'center',
          }}
        >
          <div
            style={{backgroundColor: 'orange',zIndex: 10,alignItems: 'center',top: 10,left: 10,height: 80,width: 80,
              position: 'absolute',borderRadius: '50%', overflow:'hidden'}}>
            {/* image */}
            <Image src="/images/johncena.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover' />
          </div>
        </motion.div>
        <motion.div onClick={() => handleContentChange("ROMAN REIGNS", "In this article, we’ll show you real-life examples of positive customer reviews. These review examples not only laud excellent customer experiences but are powerful tools that boost your online reputation and catalyze business success.")}  
        whileHover={{ scale: 1.1 }} style={{left:220,backgroundColor: '#EFB443',zIndex: 10,height: 100,width: 100,position: 'absolute',borderRadius: '50%',justifyContent: 'center',
          }}
        >
          <div
            style={{backgroundColor: 'orange',zIndex: 10,alignItems: 'center',top: 10,left: 10,height: 80,width: 80,
              position: 'absolute',borderRadius: '50%' , overflow:'hidden'}}>
            <Image src="/images/roman.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover' />
          </div>
        </motion.div>

      </div>

      <center>
        
        <motion.h1
          key={`${key}-heading`} 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative', top: 180 ,color:'#B5C3BE'}} 
        >
          {content.heading}
        </motion.h1>
      </center>
    </div>
      </div>

    <div>
      <Footer />
    </div>
      
    </div>
  )
}
