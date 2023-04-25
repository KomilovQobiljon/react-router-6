import Button from '../components/Button';

import starryNight from '../assets/starry-night.png';
import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <img src={starryNight} alt="starry-night" loading='lazy' className='about__img'/>
      <div className='about__content'>
        <h2 className='about__heading'>Don`t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified 
          before each trip to ensure your travel plans can go off without a hitch.
        </p>
        <p>(Hitch costs extra 😉)</p>
        <p className='about__content-p'>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>

        <div className='about__card'>
          <h3>Your destination is waiting.</h3>
          <h3>Your van is ready.</h3>
          <Button state="default" text="Explore our vans"/>
        </div>
      </div>
    </div>
  )
}

export default About