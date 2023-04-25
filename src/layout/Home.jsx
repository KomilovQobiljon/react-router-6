import Button from '../components/Button';

import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
      <h2 className='home__heading'>You got the travel plans, we got the travel vans.</h2>
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Button state="default" text="Find your van" />
    </div>
  )
}

export default Home;