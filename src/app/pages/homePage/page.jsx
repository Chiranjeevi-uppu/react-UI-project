"use client"
import React from 'react'
import { useState , useEffect } from 'react'
import Image from 'next/image'
import Home from '@/app/components/home/page'
import Divider from '@mui/material/Divider';
import Menu from '@/app/components/menu/page'
import Team from '@/app/components/team/page'
import OurProjects from '@/app/components/ourProjects/page'
import Contact from '@/app/components/Contact/page'
import Footer from '@/app/components/footer/page'

const images = [
    '/images/resort1.jpg',
    '/images/resort2.jpg',
    '/images/resort3.jpg',
    '/images/resort4.jpg',
    '/images/resort5.jpg',
    '/images/resort6.jpg',   
  ];

export default function page() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imagesToShow = images.slice(currentImageIndex, currentImageIndex + 3);

    const previousImages = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(prevIndex => prevIndex - 3);
        }
      };

      const nextImages = () => {
        if (currentImageIndex + 3 <images.length) {
            setCurrentImageIndex(prevIndex => prevIndex + 3);
        }
      };

          //background images
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex(prevImage => (prevImage + 1) % images.length);
        }, 3000); 
    
        return () => clearInterval(interval);
      }, [images.length]);

  return (
    <div>
     
         <div
        style={{height: '100px',display: 'flex',alignItems: 'center',justifyContent: 'center',gap: '30px',
        width: '100%',position: 'absolute',zIndex: 2,pointerEvents: 'auto',}}
        >
         <Home />         
         <Menu  />
         <Team />
         <OurProjects />
         <Contact />         
      </div>     
      <Divider sx={{position:'absolute' , zIndex:5 , top:'100px', width:'100%' , color:'white'}}/>
    <div  style={{height: '600px', width:'100%' , overflow:'hidden' , position:'relative'}}>
      <style jsx>{`
        @keyframes zoomEffect {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.6);
          }
        }

        .background-image::after {
          content: '';
        //   background-image: url('/images/resort1.jpg');
          background-image: url(${images[currentImageIndex]}); 
          background-size: cover;
          background-position: center;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          animation: zoomEffect 1.5s forwards; transform-origin: center;
        }
      `}</style>
      <div className="background-image"></div>
      
    </div>

      <div style={{backgroundColor:'#244946' , height:'500px' , display:'flex' , gap:20}}>
        
            <div style={{backgroundColor:'white' , height:'430px' , width:'400px' , position:'absolute' ,
                 top:'650px', left:40 , borderRadius:10 , overflow: 'hidden'}}>
              
               <Image src="/images/resort1.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover'/>
            </div>

            <div style={{height:'430px' , width:'800px' , position:'absolute' ,
                 top:'650px' , right:20 }}>
               
               <p style={{padding:'10px' , color:'#B5C3BE'}}>WELCOME TO</p>

               <h1 style={{padding:'10px' , fontWeight:700 , fontFamily:'sans-serif',color:'#EFB443'}}> Snaptics Lifespaces ! </h1>

               <p style={{padding:'10px',color:'#B5C3BE' , fontFamily:'sans-serif'}}>
               Snaptics Lifespaces is a prominent realty enterprise, redefining modern living through innovative design and
               versatile projects, including flagship Managed Farmlands projects spanning South Indian states for a seamless 
               urban-nature blend. <br /> <br />
               With a seasoned team, we prioritize world-class amenities, elevating lifestyles, and promising value appreciation.
                Join us at Kshethra Lifespaces to experience visionary living where innovation meets reality.
               </p>
            </div>       
      </div>
   {/* about */}
      <div style={{ display:'flex',flexDirection:'column',backgroundColor:'#f1f0f0' , height:'200px' ,alignItems:'center' , justifyContent:'center'}}>
         <center style={{ color:'#244946'}}>ABOUT</center>
         <center><h1 style={{ color:'#244946' , alignItems:'center'}}>SNAPTICS LIFESPACES</h1></center>
      </div>
      
      <div style={{backgroundColor:'#244946' , height:'500px' , display:'flex' }}>
          <div style={{backgroundColor:'#244946' , height:'100%' , width:'100%'}}>
              <Image src='/svg/plant.svg' width={100} height={100} style={{position:'relative',top:50 , left:250}}/>
              <center><h1 style={{position:'relative' , top:30 , padding:30 ,color:'#B5C3BE' , fontFamily:'sans-serif'}}>
              Crafting Inspired Realty Projects
              for Elevated Living
              </h1></center>
              <p style={{position:'relative' ,bottom:15 , padding:30 , textAlign:'justify' , color:'#B5C3BE' , fontFamily:'sans-serif'}}>
               Kshethra Lifespaces stands as a prominent and diverse realty enterprise,<br/><br/> distinguished by its 
               innovative approach to design, implementation,and<br/><br/>infrastructure across a spectrum of real estate ventures. Embracing versatility<br/><br/> and distinction,
               we proudly present a range of unique projects that redefine<br/><br/> the concept of modern living.
              </p>
          </div>

          <div style={{backgroundColor:'#244946', height:'100%',width:'100%'}}>
              
               <Image src='/svg/family.svg' width={100} height={100} style={{position:'relative',top:50 , left:250}}/>             
               <center><h1 style={{position:'relative' , top:30 , padding:30 ,color:'#B5C3BE' , fontFamily:'sans-serif'}}>
              Crafting Inspired Realty Projects
              for Elevated Living
              </h1></center>
              <p style={{position:'relative' ,bottom:15 , padding:30 , textAlign:'justify', color:'#B5C3BE' , fontFamily:'sans-serif'}}>
               Kshethra Lifespaces stands as a prominent and diverse realty enterprise,<br/><br/> distinguished by its 
               innovative approach to design, implementation,and<br/><br/>infrastructure across a spectrum of real estate ventures. Embracing versatility<br/><br/> and distinction,
               we proudly present a range of unique projects that redefine<br/><br/> the concept of modern living.
              </p>
          </div>         
      </div>
    {/* -------- */}
      <div style={{backgroundColor:'white' , height:'500px' , display:'flex' }}>
          <div style={{ height:'100%' , width:'100%' , overflow:'hidden'}}>
             <h1 style={{padding:30 ,color:'#244946' , fontFamily:'sans-serif'}}>
             Managed Farmlands -
             Where Dreams Take Root
             </h1>
             <p style={{alignItems:'justify' , padding:30 ,color:'#244946' , fontFamily:'sans-serif' }}>
             Under the banner of "Managed Farmlands," Kshethra Lifespaces has already <br/><br/>
             emerged as a trailblazer, meticulously curating distinctive living experiences.<br/><br/> Our flagship projects, 
             namely Woodstork Hills, Boho Green Hills, Westwoods,<br/><br/> Advaya Bali, and Tuscany Valley, epitomize
             our dedication to diverse<br/><br/> architectural themes and thoughtfully planned development strategies.
             </p>
          </div>

          <div style={{ height:'100%',width:'100%',overflow:'hidden'}}>
              <div style={{backgroundColor:'orange', height:430,width:430 ,
                 position:'relative' , top:30 , left:60 , borderRadius:'50%',overflow: 'hidden'}}>
                 <Image src="/images/resort2.jpg" alt="resort" layout='fill' objectFit='cover'/>
              </div>            
          </div>         
      </div>
   
      <div className='Gallaries' style={{backgroundColor:'#f1f0f0', height:600 , overflow:'hidden' }}>
        <div style={{backgroundColor:'#f1f0f0', height:200 }}>
             <div className='logo' style={{backgroundColor:'#f44216', height:50 , width:50 , borderRadius:'50%',
                  position:'relative',left:630 , top:10 , overflow:'hidden'}}>
                <Image src="/images/genie.jpg" alt="resort" layout='fill' objectFit='cover'/>
             </div>
             <center><p style={{position:'relative',color:'#244946' , fontFamily:'sans-serif'}}>VISUAL STORIES</p></center>
             <center><h1 style={{color:'#244946' , fontFamily:'sans-serif'}}>PROJECT GALLERIES</h1></center>
        </div>
    
       <div style={{ textAlign: 'center' }}>
           <div style={{ marginBottom: '20px' , position:'relative' ,left:10 , top:310 , gap:20 , display:'flex'}}>
             
             <div  className='logo' style={{backgroundColor:'#f44216', height:25 , width:25 , borderRadius:'50%',
                  position:'relative',left:630 , top:40}} onClick={previousImages}>
                 
             </div>

             <div  className='logo' style={{backgroundColor:'#f44216', height:25 , width:25 , borderRadius:'50%',
                  position:'relative',left:630 , top:40}} onClick={nextImages}>
                 
             </div>
             
           </div>

           <div style={{ display: 'flex', justifyContent: 'center' , flexWrap:'wrap' }}>
             {imagesToShow.map((imageUrl, index) => (
               <div key={index} style={{ margin: '40px', width: '350px' , position:'relative' , bottom:60 }}>
                  <img
                     src={imageUrl}
                     alt={`Image ${currentImageIndex + index + 1}`}
                     style={{ width: '100%', height: '300px' , borderRadius:10 }}
                     />
               </div>
               ))}
           </div>      
       </div>       
    </div>
   
    <div>
      <Footer />
    </div>
    </div>
  )
}
