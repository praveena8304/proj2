import React from 'react'
import './Home.css'

// import pic2 from './img/logo5.jpg';
import pic3 from './img/social-removebg-preview.png'
import picone from './img/banner7.png'
import pictwo from './img/banner6.png'
import picthree from './img/banner2.jpg'
import picfour from './img/side4.jpg'
export default function HomeAPI() {
  return (
    <>

      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={picone} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pictwo} class="d-block w-100 " alt="..." />
          </div>
          <div class="carousel-item">
            <img src={picthree} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div className='container2' id='main-heading '>      
        <div className='row'>
          <div className='col-md-9 '>
            <h1 className='hi-praveena'>Hi &#128075;<br />
              I'm praveena,<br />
              Front-end Developer</h1>
             <p className='main-matter'>I design and develop experience that make people's lives<br />
              simplier through Web and Mobile apps.I work with<br />
              HTML5,CSS3, BOOTSTRAP5,JAVASCRIPT,REACT.</p>

          </div>
           <div className='col-md-3'>
            <img src={picfour} alt='' className='pageimg'  />
          </div>
           
          </div>
          </div>
        
       
            <div className='row' id='footer-work'>
              <div className="col-md-12">
                <h4>Our Social Network</h4>
                <p> Follow us on Facebook,Twitter,Instagram,LinkedIn.</p>
                
                  <img src ={pic3} alt="" className="footer-img"/> 
              
              
            
            </div> 

           
         
        </div>
        

    </>
  )
}






