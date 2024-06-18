"use client"
import React from 'react'
import Menu from '@/app/components/menu/page'
import Team from '@/app/components/team/page'
import OurProjects from '@/app/components/ourProjects/page'
import Contact from '@/app/components/Contact/page'
import Image from 'next/image'
import Home from '@/app/components/home/page'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '@/app/components/footer/page'


export default function page() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

      const variants = {
        visible: {  scale: 1, opacity: 1},
        hidden: { scale: 0.8, opacity: 0},
      };
    
      const transition = {
        duration: 1,
        ease: "easeInOut",
      };;

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

      <div style={{background:'grey' , height:500 , backgroundImage:'url(/images/founders.jpg)',backgroundPosition:'center',
        opacity:'0.7', display:'flex',justifyContent:'center',textShadow: 'rgba(0, 0, 0, 0.5)',alignItems:'center' , width:'100%'
      }}>
              <div> <h4 style={{color:'whitesmoke',alignContent:'center' , position:'relative' , bottom:50 , left:50}}> HOME  / FOUNDERS</h4> </div>
              
              <h1 style={{alignContent:'center' , color:'white' ,fontFamily: "'Pacifico', cursive",
                fontSize:'4em' , position:'relative' , right:170
               }}>founders</h1>        
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
           <h1 style={{color:'#B5C3BE' , fontFamily:'sans-serif'}}> Snaptics Lifespaces ! </h1>
           <h2 style={{color:'#EFB443' , fontFamily:'sans-serif'}}>FOUNDER</h2>
           <p style={{color:'#B5C3BE' , fontFamily:'sans-serif' , paddingRight:10}} >
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

       <div>
        <Footer />
       </div>

    </div>
  )
}
