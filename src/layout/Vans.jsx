import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from '../components/Card';
import "./Vans.css";

const Vans = () => {
  const [ vans, setVans ] = useState([]);
  const [ state, setState] = useState({
    filters: [],
    vans: [],
  })
  

  useEffect(()=>{
    async function getData(){
      const result = await fetch("/api/vans");
      const data = await result.json();

      setVans(data.vans);
      setState({
        filters: [],
        vans: data.vans
      })
    }
    getData();
  },[]);

  function handleFilter(e){
    const filter = e.target.textContent.toLowerCase();

    if(filter === 'clear filter'){
      removeAllFilters();
    }else{
      addFilter(filter);
    }

    populateVans();
  }
  function removeAllFilters(){
    setState(prev => {
      const newObj = JSON.parse(JSON.stringify(prev));
      newObj.filters = [];
      return newObj;
    })
  }
  function populateVans(){
    setState(prev => {
      const newObj = JSON.parse(JSON.stringify(prev));
      const newVans = [];
      if(newObj.filters.length == 0){
        newObj.vans = vans;
      }else{
        vans.forEach(van => {
          if(newObj.filters.includes(van.type)){
            newVans.push(van);
          }
        })
        newObj.vans = newVans;
      }
     
      return newObj;
    })
  }
  function addFilter(filter){
    if(state.filters.includes(filter)){
      setState(prev => {
        const newObj = JSON.parse(JSON.stringify(prev));
        const newFilters = newObj.filters.filter(el => el != filter);
        newObj.filters = newFilters;
        return newObj;
      })
    }else{
      setState(prev => {
        const newObj = JSON.parse(JSON.stringify(prev));
        newObj.filters.push(filter);
        return newObj;
      })
    }
  }
  return (
    <div className="vans">
      <h2>Explore our van options</h2>
      <div className="vans__filters" onClick={handleFilter}>
        <Button state="" text="Simple" type="simple" />
        <Button state="default" text="Luxury" type="luxury" />
        <Button state="default" text="Rugged" type="rugged" />
        <Button state="default" text="Clear filter" type="underline" />
      </div>
      <div className="vans__grid">
        {state.vans.map(van => (
          <Card
            key={van.id}
            title={van.name}
            price={van.price}
            description={van.description}
            img={van.imageUrl}
            type={van.type}
          />
        ))}
      </div>
    </div>
  )
}

export default Vans