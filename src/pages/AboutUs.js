import React from 'react'
import '../styles/AboutUs.css'
import photo from '../images/profile-rain.jpg'
import logo from '../images/RBIM_LOGO.png'

const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <section className="AboutUs__Sections">
        <div className="AboutUs__Text__Container">
          <img 
            className='AboutUs__Logo'
            src={logo} alt='RBIM Logo'/>
          <span>About Us - Group 3</span>
          <h1>The RBIM Project</h1>
          <p>This is a Thesis Project of the Group 3 in WebSystems Subject of the Bachelor of Science in Computer Science Course in Don Honorio Ventura State University (DHVSU).</p>
        </div>
      </section>
      <section className='AboutUs__Sections'>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>chuchuchu</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>chuchuchu</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>chuchuchu</p>
          </div>
        </div>
      </section>
      <section className='AboutUs__Sections'>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>chuchuchu</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>chuchuchu</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>chuchuchu</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>chuchuchu</p>
          </div>
        </div>
      </section>
      <footer className='AboutUs__Sections'>
        <div className='AboutUs__Footer'>
          <section>
            <img 
              className='AboutUs__Logo'
              src={logo} alt='RBIM Logo'/>
              <span>RBIM</span>
          </section>
          <section>
            <p>Copyright - 2022</p>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs