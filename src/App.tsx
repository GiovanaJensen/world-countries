import { useState } from "react";
import axios from 'axios';
import {Root2} from './Types/Data';

function App() {
  
  const [data, setData] = useState<Root2 | null>();

  axios.get("https://restcountries.com/v3.1/name/belgium?fullText=true")
    .then(response => {
      setData(response.data[0]);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <div className="App">
      {data ? (
        <>
          <p>Common name: {data.name.common}</p>
          <p>official name: {data.name.official}</p>
          {/* <p>currencies: {data.currencies.JOD.name}</p> */}
          <p>population: {data.population}</p>
          <p>Member of Europe Union: {data.unMember ? "yes" : "no"}</p>
          <p>capital: {data.capital}</p>
          <p>region: {data.region}</p>
          <p>subregion: {data.subregion}</p>
          <p>start of week: {data.startOfWeek}</p>
          {/* <p>languages:  {data.languages.map(item => (
            
          ))}</p> */}
          <p>Languages:</p>
          <ul>
          {data.borders.map(item => 
                <li>{item}</li>
            )}
          </ul>
          <p>Flag:</p>
          <img src={data.flags.svg} alt={data.flags.alt} />
          <p>coat Of Arms</p>
          <img src={data.coatOfArms.png} alt="coat of arms" />
          
        </>
      ): (
        <p>Loading...</p>
      )}
      
    </div>
  )
}

export default App
