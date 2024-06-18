"use client"
import React from 'react'
import Menu from '@/app/components/menu/page'
import Team from '@/app/components/team/page'
import OurProjects from '@/app/components/ourProjects/page'
import Contact from '@/app/components/Contact/page'
import Image from 'next/image'
import Home from '@/app/components/home/page'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Footer from '@/app/components/footer/page'

export default function snapticsProfile() {
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
              <div> <h4 style={{color:'whitesmoke',alignContent:'center' , position:'relative' , bottom:70 , left:380}}> HOME  /  SNAPTICS LIFE SPACES PROFILE</h4> </div>
              
              <h1 style={{alignContent:'center' , color:'white' ,fontFamily: "'Pacifico', cursive",
                fontSize:'4em' , position:'relative' , right:170
               }}>Snaptics life spaces profile</h1>        
      </div>

      <div style={{backgroundColor:'#f1f0f0' , height:'500px' , display:'flex' , gap:20}}>
        
            <div style={{backgroundColor:'white' , height:'430px' , width:'400px' , position:'absolute' ,
                 top:'650px', left:40 , borderRadius:10 , overflow: 'hidden'}}>
              
               <Image src="/images/resort1.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover'/>
            </div>

            <div style={{backgroundColor:'#f1f0f0' , height:'430px' , width:'800px' , position:'absolute' ,
                 top:'650px' , right:20 }}>
               
               <p style={{padding:'10px' , fontFamily:'sans-serif'}}>WELCOME TO</p>

               <h1 style={{padding:'10px' , fontWeight:700 , fontFamily:'sans-serif',color:'#244946'}}> Snaptics Lifespaces ! </h1>

               <p style={{padding:'10px',fontFamily:'sans-serif'}}>
               Snaptics Lifespaces is a prominent realty enterprise, redefining modern living through innovative design and
               versatile projects, including flagship Managed Farmlands projects spanning South Indian states for a seamless 
               urban-nature blend. <br /> <br />
               With a seasoned team, we prioritize world-class amenities, elevating lifestyles, and promising value appreciation.
                Join us at Kshethra Lifespaces to experience visionary living where innovation meets reality.
               </p>
            </div>       
      </div>
      
      <div style={{display:'flex',backgroundColor:'#f1f0f0' , height:500 , gap:40,padding:20}}>
           <div style={{backgroundColor:'white',height:450 ,overflow:'hidden', width:'50%' ,position:'relative' , top:20 , borderRadius:10}}>
                <div style={{backgroundColor:'#EFB443',height:150 , width:'100%', padding:10}}>
                  <h2 style={{color:'#244946' , fontFamily:'sans-serif'}}>Nurturing Roots and Uniting Families</h2>
                </div>                
                <p style={{padding:10,fontFamily:'sans-serif'}}>Our projects serve as timeless curated farmlands,<br/><br/> offering an enduring refuge
                   and endless rewards<br/><br/> for families, couples, individuals, and all those<br/><br/> seeking a
                    distinctive and everlasting retreat who<br/><br/> own farmlands in our projects. </p>
           </div>
           <div style={{backgroundColor:'white',height:450 ,overflow:'hidden', width:'50%',position:'relative' , top:20, borderRadius:10}}>
                <div style={{backgroundColor:'#EFB443',height:150 , width:'100%', padding:10}}>
                <h2 style={{color:'#244946',fontFamily:'sans-serif'}}>Proximity to Health and Wealth</h2>
                 </div>
                 <p style={{padding:10 ,fontFamily:'sans-serif'}}>Our projects serve as timeless curated farmlands,<br/><br/> offering an enduring refuge
                   and endless rewards<br/><br/> for families, couples, individuals, and all those<br/><br/> seeking a
                    distinctive and everlasting retreat who<br/><br/> own farmlands in our projects. </p>
           </div>
           <div style={{backgroundColor:'white',height:450,overflow:'hidden', width:'50%',position:'relative' , top:20, borderRadius:10}}>
                  <div style={{backgroundColor:'#EFB443',height:150 , width:'100%', padding:10}}>
                     <h2 style={{color:'#244946' ,fontFamily:'sans-serif'}}>From monotony to myriad merry moments </h2>
                  </div>
                  <p style={{padding:10 , fontFamily:'sans-serif'}}>Our projects serve as timeless curated farmlands,<br/><br/> offering an enduring refuge
                   and endless rewards<br/><br/> for families, couples, individuals, and all those<br/><br/> seeking a
                    distinctive and everlasting retreat who<br/><br/> own farmlands in our projects. </p>
           </div>
      </div>

      <div style={{backgroundColor:'#f1f0f0' , height:900 }}>
        <h1 style={{paddingTop:10 , paddingLeft:250 , fontSize:'3em' , paddingRight:250 , color:'#244946' ,fontFamily:'sans-serif'}}>
        We are the custodians
        of Pristine Nature!</h1>

        <div style={{display:'flex' , gap:40 , padding:20}} >
           <div style={{backgroundColor:'white',height:300 ,overflow:'hidden', width:'50%' ,position:'relative'  ,bottom:30, borderRadius:10}}>
              <Image src="/images/resort1.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover'/>
           </div>
           <div style={{backgroundColor:'white',height:300 ,overflow:'hidden', width:'50%',position:'relative',bottom:30, borderRadius:10}}>
           <Image src="/images/resort2.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover'/>
           </div>
           <div style={{backgroundColor:'white',height:300,overflow:'hidden', width:'50%',position:'relative' ,bottom:30, borderRadius:10}}>
           <Image src="/images/resort3.jpg" alt="Tuscany Valley" layout='fill' objectFit='cover'/>  
           </div>
        </div>

        <div style={{display:'flex' , gap:40 , padding:20}} >
           <div style={{padding:30,backgroundColor:'white',height:300 ,overflow:'hidden', width:'50%' ,position:'relative'  ,bottom:30, borderRadius:10}}>
              <h3 style={{color:'#244946'}}>Green Guardians, Environmentally Secure</h3>
              <p style={{fontFamily:'sans-serif'}}>To mitigate environmental degradation,<br/><br/> preserve land productivity, and ensure the <br/><br/>sustainability
                 of family farms and rural<br/><br/> communities, we strictly adhere to <br/><br/>sustainable practices.</p>
           </div>
           <div style={{padding:30 ,backgroundColor:'white',height:300 ,overflow:'hidden', width:'50%',position:'relative',bottom:30, borderRadius:10}}>
              <h3 style={{color:'#244946'}}>Unwavering Ethics leading us to Excellence</h3>
              <p style={{fontFamily:'sans-serif'}}>To mitigate environmental degradation,<br/><br/> preserve land productivity, and ensure the <br/><br/>sustainability
                 of family farms and rural<br/><br/> communities, we strictly adhere to <br/><br/>sustainable practices.</p>
           </div>
           <div style={{padding:30,backgroundColor:'white',height:300,overflow:'hidden', width:'50%',position:'relative' ,bottom:30, borderRadius:10}}>
              <h3 style={{color:'#244946'}}>Effectively managed farmland property</h3>
              <p style={{fontFamily:'sans-serif'}}>To mitigate environmental degradation,<br/><br/> preserve land productivity, and ensure the<br/><br/> sustainability
                 of family farms and rural<br/><br/> communities, we strictly adhere to<br/><br/> sustainable practices.</p>
           </div>
        </div>
      </div>

      <div style={{backgroundColor:'#244946' , height:500 , width:'100%',}}>
        <h1 style={{paddingTop:40 , paddingLeft:260 , paddingRight:80 , fontSize:'3em',color:'#B5C3BE'}}>
          Service Excellence is our Success Mantra!</h1>
        <div style={{backgroundColor:'white' , height:250 ,padding: '70px 70px'}}>
           <p style={{fontFamily:'sans-serif'}}>
           Standing atop the pyramid are the visionary individuals who have dedicated themselves wholeheartedly 
           to crafting paradises exclusively for you. With the<br/><br/> right blend of architectural prowess with aesthetics,
           and rich finance acumen with project execution, they deck all the managed farmlands projects with<br/><br/> world-
           class features.
           </p>
           <div style={{backgroundColor:'#EFB443' , height:5 }}></div>
           <p style={{fontFamily:'sans-serif'}}>
           Standing atop the pyramid are the visionary individuals who have dedicated themselves wholeheartedly 
           to crafting paradises exclusively for you. With the<br/><br/> right blend of architectural prowess with aesthetics,
           and rich finance acumen with project execution, they deck all the managed farmlands projects with<br/><br/> world-
           class features.
           </p>
        </div>
      </div>
      <CheckCircleIcon sx={{position:'relative' , bottom:190 ,left:30 , color:'#EFB443'}}/>
      <CheckCircleIcon sx={{position:'relative' , bottom:65 ,left:8 ,color:'#EFB443'}}/>
      
      <div>
        <Footer />
      </div>
      
    </div>
  )
}
