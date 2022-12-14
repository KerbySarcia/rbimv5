import React from 'react'
import '../styles/AboutUs.css'
import logo from '../images/RBIM_LOGO.png'
import Kerby from '../images/KerbyPhoto.jpg'
import Kurt from '../images/KurtPhoto.jpg'
import Leigh from '../images/LeighPhoto.jpg'
import Dohn from '../images/DLProfile.jpg'
import Dos from '../images/DawsonPhoto.jpg'
import Kenneth from '../images/KennethPhoto.jpg'
import Zhern from '../images/ZhernanPhoto.jpg'
import Rikki from '../images/RikkiPhoto.jpg'
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
          <img src={Kerby} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Kerby Matthew Sarcia</h3>
            <p>Do you want to play? Let's Play</p>
            <h6>HELLO WORLD!</h6>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={Kurt} alt='Teammate' />
          <div className='AboutUs__Team__Card__Info'>
            <h3>Kurtliam Pangilinan</h3>
            <p>I don't know what's the difference between Coding and Programming.</p>
            <h6>GOODBYE WORLD!</h6>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={Leigh} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Mark Leigh L. David</h3>
            <p>If you're not a good shot today, don't worry there are other ways to be useful</p>
            <h6>SHAKDART</h6>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={Kenneth} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Kenneth Rodriguez Rana</h3>
            <p>Kenneth Pogi Kahit Tres Lang</p>
            <h6>HATDOG!</h6>
          </div>
        </div>
      </section>
      <section className='AboutUs__Sections'>
        <div className='AboutUs__Team__Card'>
          <img src={Dohn} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Dohn Luel De Leon</h3>
            <p>Kung kaya ng iba Paggawa mo Sakanila</p>
            <h6>PANCIT CANTON</h6>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={Zhern} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Zhernan Manaloto</h3>
            <p>Three days kong ginawa pero hindi ginamit</p>
            <h6>TIMESTAMP</h6>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={Dos} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Dawson Manlutac</h3>
            <p>Pogi Pogi</p>
            <h6>WALANG AMBAG</h6>
          </div>
        </div>
        <div className='AboutUs__Team__Card'>
          <img src={Rikki} alt='Teammate'/>
          <div className='AboutUs__Team__Card__Info'>
            <h3>Rikkimae Mallari</h3>
            <p>Walong Mata Pag May Pogi</p>
            <h6>SECRETARY</h6>
          </div>
        </div>
      </section>
      <footer className='AboutUs__Sections'>
        <div className='AboutUs__Footer'>
          <section>
            <img 
              className='AboutUs__Logo'
              src={logo} alt='RBIM Logo'/>
              <span>RBIM | GROUP 3</span>
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