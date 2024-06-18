import React from 'react'
import Menu from '@/app/components/menu/page'
import Team from '@/app/components/team/page'
import OurProjects from '@/app/components/ourProjects/page'
import Contact from '@/app/components/Contact/page'
import Image from 'next/image'
import Home from '@/app/components/home/page'
import Footer from '@/app/components/footer/page'


export default function snapticsVision() {
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
      
      <div style={{background:'grey' , height:500 , backgroundImage:'url(/images/resort4.jpg)',backgroundPosition:'center',
        opacity:'0.7', display:'flex',justifyContent:'center',textShadow: 'rgba(0, 0, 0, 0.5)',alignItems:'center' , width:'100%'
      }}>
              <div> <h4 style={{color:'whitesmoke',alignContent:'center' , position:'relative' , bottom:70 , left:380}}> HOME  /  VISION & MISSION</h4> </div>
              
              <h1 style={{alignContent:'center' , color:'white' ,fontFamily: "'Pacifico', cursive",
                fontSize:'4em' , position:'relative' , right:170
               }}>Snaptics vision & mission</h1>        
      </div>
      
      <div style={{overflow:'hidden',backgroundColor:'#244946' , height:'200px' ,alignItems:'center' , justifyContent:'center'}}>        
         <center><h1 style={{fontSize:'3em' , color:'#EFB443'}}>Our vision</h1></center>
         <p style={{padding: '70px 70px' , position:'relative',bottom:80 , color:'#B5C3BE'}}>
         Kshethra Lifespaces’ vision is to develop the finest avenues for primary living, weekend gateways,
          luxury relaxation, ensuring exceptional returns through value creation, and surpassing client expectations. 
         </p>
      </div>

      <div style={{display:'flex', height:150 , backgroundColor:'#f1f0f0' , width:'100%'}}>
          <div style={{backgroundColor:'#f1f0f0',width:'40%' , justifyContent:'center',alignItems:'center',display:'flex',fontSize:'2em' }}>
             <h1 style={{color:'#244946'}}>Our projects</h1>
          </div>
          <div style={{position:'relative', backgroundColor:'#f1f0f0', width:'60%', overflow:'hidden' }}>
               <p style={{padding: '70px 70px' , position:'relative',bottom:40}}>
                Our mission is to create living avenues where people can own them, stay, unwind, spend quality
                time, reconnect with nature, and experience the joys of life. To actualize our long-term outlook,
                we adopt the following mission objectives:
               </p>
          </div>
      </div>

      <div style={{backgroundColor:'#f1f0f0' , height:500  , width:'100%' , flexDirection:'row'}}>
        <Image src='/svg/hands.svg' width={100} height={100} style={{position:'absolute' ,top:1030,left:170 ,zIndex:11}}/>
        <Image src='/svg/hands.svg' width={100} height={100} style={{position:'absolute' ,top:1030,left:620 ,zIndex:11}}/>
        <Image src='/svg/hands.svg' width={100} height={100} style={{position:'absolute' ,top:1030,right:190 ,zIndex:11}}/>
        <div style={{display:'flex' , gap:40 , padding:20 , position:'relative' , top:130}} >        
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
      
      <div>
         <Footer />
      </div>
    </div>
  )
}

