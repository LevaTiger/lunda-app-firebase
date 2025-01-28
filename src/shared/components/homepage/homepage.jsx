import './home-page.css';
import bandImg from '../../../assets/media/zenekarifoto.jpg'
import kepzeltFalak from '../../../assets/media/kepzelt-falak.jpg'
const Homepage = () => {





    return (
        
            
           <div className="bg-img poppins-400">
                 
             <div className="container">
                <section>
                  <main className='white-text-style'>
                    <h1>Hírek</h1>
                    

                        <div className='article-area'>
                          <div>
                            <p>Megjelent a <a target="_blank" href="https://www.youtube.com/watch?v=UMIGllyK2r8&list=PLCedEysw-Yf9BnYU0Td3i2Ki-ITl_vZUN">Képzelt falak<sup>[katt]</sup></a> albumunk ami a modern internetes társadalom individualista egymástól való eltávolodásáról, a szerelem és a legszorosabb emberi kapcsolatokról szól.</p>
                              <figure>
                                <img src={kepzeltFalak} alt="Album photo" />
                              </figure>
                           

                          </div>
                          <div>
                            <p>
                            Idén sokkal izgalmasabb ötletekkel próbáljuk felturbózni a produkciónk minden részét. Többek közt egyre igyekszünk a nyár közeledtével kiadni hasonlóan új bulis dalainkat mint a <a href="">Lila köd<sup>katt</sup></a> című dalunk, mindeközben minél több érzelmet átfogó műveinket is eljuttatni a hallgatósághoz.
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

export default Homepage;