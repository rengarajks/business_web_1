import React from 'react'
import '../App.css';
import Footer from './Footer';

function HomeContent() {
  return (
    <div className='absolute  w-full'>

      <div
        className="bg-cover bg-center h-[100vh] flex justify-center items-center "
        style={{ backgroundImage: 'url(photo2.jpg)' }}
      >
        <div className='opacity-90'>
        <h1 className='text-7xl text-white font-bold'>KAMATCHI STUDIO</h1>
        <h1 className='text-xl text-white text-center '>- Kamatchi nathan</h1>
        </div>
        
      </div>
      {/* About */}
      <div id="about_sec">
        {/* <h1 className='text-center font-bold my-4 mt-6 text-gray-600 text-xl'>About</h1> */}
      
          <section class="about section bd-container" id="about">
            <h2 class="section-title">About </h2>

            <div class="about__container bd-grid">
              <div class="about__data bd-grid">
                <p class="about__description"><span>Kamatchi Studio, </span>led by Kamatchinathan, captures life’s special moments with creativity and precision. From weddings to portraits, we transform memories into beautiful images. With advanced technology and a welcoming environment, we ensure a personal, professional experience. Cherish your moments with Kamatchi Studio.</p>

                <div>
                  <span class="about__number">30</span>
                  <span class="about__achievement">Years off Experience</span>
                </div>

                <div>
                  <span class="about__number">30k</span>
                  <span class="about__achievement">Work completes</span>
                </div>

                <div>
                  <span class="about__number">08</span>
                  <span class="about__achievement">Best work awards</span>
                </div>
              </div>

              <img src="profile.jpg" alt="" class="about__img"/>
            </div>
          </section>
      </div>
      {/*  Services*/}
      {/* <div>
      <h2 class="section-title">Services </h2>
      <div>
        
      </div>
      </div> */}
      {/* Images  */}

      <div className='h-[50vh]'>
      <h2 class="section-title">Some works </h2>

        <div className='grid grid-cols-1 gap-2 p-4 sm:grid-cols-4 '>
          <div><img src='3.jpg'/></div>
          <div><img src='1.jpg'/></div>
          <div><img src='2.jpg'/></div>
          <div><img src='5.jpg'/></div>
          <div><img src='4.jpg'/></div>
          <div><img src='6.jpg'/></div>
          <div><img src='7.jpg'/></div>
          <div><img src='8.jpg'/></div>
          <div><img src='9.jpg'/></div>
          <div><img src='10.jpg'/></div>
        </div>

        <div>
        <Footer/>
        </div>
      </div>

      
      

    </div>
  )
}

export default HomeContent