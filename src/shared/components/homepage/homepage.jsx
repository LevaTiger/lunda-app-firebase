import './home-page.css';
import bandImg from '../../../assets/media/zenekarifoto.jpg'
import kepzeltFalak from '../../../assets/media/kepzelt-falak.jpg'
import { useState } from 'react';
const Homepage = () => {


  const [toggled, setToggled] = useState(true);
  const handleClick = ()=>{
    setToggled((state)=> !state);
  }


    return (
        
            
           <div className={` ${toggled? 'bg-img': 'bg-img-day'} poppins-400`}>
                 
                <ToggleSwitch toggled={toggled} onClick={handleClick} />
             <div className="container">
                <section>
                  <main className='white-text-style'>
                    <h1>Hírek</h1> 
                    

                        <div className='article-area'>
                          <div className='flex-wrap'>
                            <p>Megjelent a <a target="_blank" href="https://www.youtube.com/watch?v=UMIGllyK2r8&list=PLCedEysw-Yf9BnYU0Td3i2Ki-ITl_vZUN">Képzelt falak<sup>[katt]</sup></a> albumunk ami a modern internetes társadalom individualista egymástól való eltávolodásáról, a szerelem és a legszorosabb emberi kapcsolatokról szól.</p>
                              <figure>
                                <img src={kepzeltFalak} alt="Album photo" />
                              </figure>
                           

                          </div>
                          <div className='flex-wrap'>
                            <p>
                            Idén sokkal izgalmasabb ötletekkel próbáljuk felturbózni a produkciónk minden részét. Többek közt egyre igyekszünk a nyár közeledtével kiadni hasonlóan új bulis dalainkat mint a <a target='_blank' href="https://youtu.be/BEyRHlDR3Jg?feature=shared">Lila köd<sup>katt</sup></a> című dalunk, mindeközben minél több érzelmet átfogó műveinket is eljuttatni a hallgatósághoz.
                            </p>
                           
                              <figure>
                                <img src={bandImg} alt="Band photo" />
                              </figure>
                          

                          </div>
                          
                        </div>

                      
                    
                  </main>
                  
                </section>
             </div>

           </div>
        
    )
}


const ToggleSwitch = ({toggled, onClick})=>{

  return(
    <div className='toggle-btn-area'>
      <div onClick={onClick} className={`toggle ${toggled? "night": ""}`}>
          <div className="notch">
            <div className="crater" id='firstcrater'></div>
            <div className="crater" id='secondcrater'></div>
            <div className="crater" id='thirdcrater'></div>
            <div className="crater" id='fourthcrater'></div>
          </div>
      </div>
    </div>
  )
}

export default Homepage;