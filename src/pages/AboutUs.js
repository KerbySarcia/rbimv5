import React from 'react'
import '../styles/AboutUs.css'
import photo from '../images/profile-rain.jpg'
import logo from '../images/RBIM_LOGO.png'
import { TabTitle } from '../features/GeneralFunction'

const AboutUs = () => {
  TabTitle('RBIM | The Team BesThe')

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
            <h3>Kerby Matthew Sarcia</h3>
            <p>Time is Gold I'm Watching Rold</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Kurtliam Pangilinan</h3>
            <p>I don't know what's the difference between Coding and Programming.</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>Roses are Red Violets are Blue BUt bobo si Genasky</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Kenneth Rodriguez Rana</h3>
            <p>chuchuchu</p>
          </div>
        </div>
      </section>
      <section className='AboutUs__Sections'>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Dohn Luel De Leon</h3>
            <p>chuchuchu</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Zhernan Manaloto</h3>
            <p>chuchuchu</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Dawson Manlutac</h3>
            <p>chuchuchu</p>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={photo} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Rikkimae Mallari</h3>
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