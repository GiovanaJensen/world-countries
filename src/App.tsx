import { Header } from "./components/Header";
import {Main } from "./components/Main";
import { useState } from "react";
import axios from 'axios';
import {Root2} from './Types/Data';

function App() {

  const [data, setData] = useState<Root2 | null>();
    const [name, setName] = useState('');
  
    let api = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        axios.get(api)
        .then(response => {
          console.log(response.data[0]);
          setData(response.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            />
            <button type="submit">Pesquisar</button>
      </form>
      {data ? (
      <Main 
        commonName={data?.name.common}
        officialName={data?.name.official}
        currencies={data?.currencies}
        population={data?.population}
        capital={data?.capital}
        region={data?.region}
        subregion={data?.subregion}
        startOfWeek={data?.startOfWeek}
        borders={data?.borders}
        languages={data?.languages}
        flags={data?.flags}
        coatOfArms={data?.coatOfArms}
      />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
